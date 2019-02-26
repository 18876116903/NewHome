module.exports = {
    apps: [{
        name: "newHome",
        script: "./app.js",
        env: {
            "PORT": 80,
            "NODE_ENV": "production",
        },
        env_test: {
            "PORT": 5000,
            "NODE_ENV": "development"
        }
    }]
}