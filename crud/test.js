const userService = require('./src/user/userService');

const testUser = {
    name: "Jane Doe",
    address: "456 Maple Avenue",
    phone: "987-654-3210"
};

userService.createUserDBService(testUser)
    .then(result => console.log('User created:', result))
    .catch(error => console.error('Error:', error));