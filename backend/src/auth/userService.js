/**
 * @file userService.js
 * @brief User authentication service
 * WARNING: This code has intentional issues for testing Multi-AI Review
 */

const users = [];

function registerUser(email, password) {
    // Issue 1: No email validation
    // Issue 2: Password not hashed
    // Issue 3: No duplicate check

    const user = {
        id: users.length + 1,
        email: email,
        password: password, // Plain text password!
        createdAt: new Date()
    };

    users.push(user);
    return user;
}

function login(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    return user || null;
}

module.exports = { registerUser, login };
