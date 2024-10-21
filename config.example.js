const pkg = require("./package.json");
const {
    monospace,
    italic,
    quote
} = require("@mengkodingan/ckptw");

// Bot
global.config = {
    bot: {
        name: "BOT",
        prefix: /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i,
        phoneNumber: "6285880631562", // Abaikan jika Anda menggunakan kode QR untuk otentikasi
        picture: {
            thumbnail: "https://e1.pxfuel.com/desktop-wallpaper/943/672/desktop-wallpaper-whatsapp-bot-what-is-it-and-how-to-use-messenger-chatbots-chatbot.jpg",
            profile: "https://i.ibb.co/3Fh9V6p/avatar-contact.png"
        },
        groupChat: "https://chat.whatsapp.com/FlqTGm4chSjKMsijcqAIJs" // Jangan lupa untuk bergabung ya teman-teman!
    },

    // MSG (Pesan)
    msg: {
        // Akses perintah
        admin: quote("❎ Perintah hanya dapat diakses oleh admin grup!"),
        banned: quote("❎ Tidak dapat memproses karena Anda telah dibanned!"),
        botAdmin: quote("❎ Bot bukan admin, tidak bisa menggunakan perintah!"),
        cooldown: quote("❎ Perintah ini sedang dalam cooldown, tunggu..."),
        coin: quote("❎ Anda tidak punya cukup koin!"),
        group: quote("❎ Perintah hanya dapat diakses dalam grup!"),
        owner: quote("❎ Perintah hanya dapat diakses Owner!"),
        premium: quote("❎ Anda bukan pengguna Premium!"),
        private: quote("❎ Perintah hanya dapat diakses dalam obrolan pribadi!"),
        restrict: quote("❎ Perintah ini telah dibatasi karena alasan keamanan!"),
        useInteractiveMessage: quote("❎ Karena Owner menonaktifkan 'useInteractiveMessage' maka bot tidak dapat mengabulkan permintaan Anda."),

        // Antarmuka perintah
        // watermark: `${pkg.name}@^${pkg.version}`,
        watermark: `IconPlus@^${pkg.version}`,
        footer: italic("Developed by ihya"),
        readmore: "\u200E".repeat(4001),

        // Proses perintah
        wait: quote("🔄 Tunggu sebentar..."),
        notFound: quote("❎ Tidak ada yang ditemukan!"),
        urlInvalid: quote("❎ URL tidak valid!")
    },

    // Owner & CoOwner
    owner: {
        name: "",
        number: "",
        organization: "",
        co: [""]
    },

    // Stiker
    sticker: {
        packname: "Stiker ini dibuat oleh",
        author: "@padepokan-gento"
    },

    // Sistem
    system: {
        autoRead: true,
        autoTypingOnCmd: true,
        cooldown: 5000,
        restrict: true, // Membatasi beberapa perintah yang akan mengakibatkan banned
        selfReply: true,
        timeZone: "Asia/Jakarta",
        useInteractiveMessage: true,
        usePairingCode: true
    }
};