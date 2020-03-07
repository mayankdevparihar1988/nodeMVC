module.exports = {
    defaultServerRespose: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: "Product created Successfully!!",
        PRODUCT_FATCHED: "All the products are retrived!!",
        PRODUCT_NOT_FOUND:"The requested product is not found!!",
        PRODUCT_UPDATED: "The product is updated successfuly!!",
        PRODUCT_DELETED: "The product deleted successfully!!"
    },
    userMessage: {
 
        USER_SIGNUP: "User Signup Sucessfully!!",
        LOGIN_SUCCESS:"Login is successful!!",
        DUPLICATE_EMAIL:"User has already giveen this eamil",
        USER_NOT_FOUND:" The User is not found!",
        USER_PASSWORD_INVALID:"The password give is invalid please try again!!"

    },
    requestValidationMessage: {
        BAD_REQUEST: 'The Request body has invalid property',
        TOKEN_MISSING: 'Token is missing in header'
    },
    databaseMessage:{
        INVALID_ID:'Invalid ID'
    }
}
