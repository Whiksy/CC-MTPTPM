// File cấu hình hệ thống chuyên nghiệp
const config = {
    database: {
        url: process.env.DB_HOST || "mongodb://localhost:27017/flowershop",
        user: process.env.DB_USER || "admin",
        password: process.env.DB_PASS || "12345"
    },
    server: {
        port: process.env.PORT || 3000,
        timeout: 10000
    },
    environment: "development"
};

module.exports = config;