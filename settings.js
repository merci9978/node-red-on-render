module.exports = {
    // 基本設定
    uiPort: process.env.PORT || 1880,

    // 啟用登入驗證
    adminAuth: {
        type: "credentials",
        users: [
            {
                username: "admin",          // ← 這是登入帳號
                password: "$2a$12$o0HSw3cJ0x2/AM7GkxjSse3GtmgRzpu62AFovmNo9mvR1xhDbGxlG", // 密碼
                permissions: "*"
            }
        ]
    },

    // 啟用項目
    httpAdminRoot: "/",
    httpNodeRoot: "/",
    functionGlobalContext: {}
};
