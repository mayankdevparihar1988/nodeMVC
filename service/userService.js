const userModel = require('../db/models/userModel');
const formatMongoData = require('../helper/dbhelper').formatMongoData;
const checkObjectId = require('../helper/dbhelper').checkObjectId;
const constants = require('../constants/index');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');

module.exports.signup = ({ email, password }) => {



    return new Promise((resolve, reject) => {

        userModel.findOne({ email }).then((user) => {
            if (user) {
                throw new Error(constants.userMessage.DUPLICATE_EMAIL);
            }
            return { email, password };
        }).then(({ email, password }) => {

            password = bcrypt.hashSync(password, 12);

            let newUser = new userModel({ email, password });

            console.log('The user to be saved is  Email: ' + newUser.email + " Passowrd " + newUser.password);

            return newUser.save();
        }).then((data) => {
            console.log('Created Product is ', data);

            return resolve(formatMongoData(data));

        }).catch((error) => {
            console.log('Something is wrong in the product service .. ', error);
            return reject(new Error(error));
        });

    });

};


module.exports.login = ({ email, password }) => {



    return new Promise((resolve, reject) => {

        userModel.findOne({ email }).then((user) => {
            if (!user) {
                throw new Error(constants.userMessage.USER_NOT_FOUND);
            }

            const isValid = bcrypt.compareSync(password, user.password);
            console.log('The isValid ', isValid);

            if (!isValid) {

                throw new Error(constants.userMessage.USER_PASSWORD_INVALID);
            }

            const token = jsonWebToken.sign({id:user._id}, process.env.SECRET_KEY || 'my-secret-key', {expiresIn: '1d'});

            return resolve({token});
        })
        .catch((error) => {
            console.log('Something is wrong in the user login service .. ', error);
            return reject(new Error(error));
        });

    });

};