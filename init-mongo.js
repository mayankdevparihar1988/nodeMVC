
db.createUser({
    user: "mayankparihar1988",
    pwd: "mayank123",
    roles: [
        {
            role: "readWrite",
            db: "testDb"
        }
    ]
})