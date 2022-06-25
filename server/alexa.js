const { WAConnection, MessageType } = require('@adiwajshing/baileys')

function alexaqr() {
    const conn = new WAConnection();
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 30000;
    conn.on('open', async () => {
        const session = 'ASENA;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')
        await conn.sendMessage(conn.user.jid, session, MessageType.text)
    });
     conn.connect();
}

router.get("/qrcode", (req, res) => {
 var qr = require('qr-image')
 var img = qr.image(alexaqr,{size :18});
 res.writeHead(200, {'Content-Type': 'image/png'});
 img.pipe(res);
});
