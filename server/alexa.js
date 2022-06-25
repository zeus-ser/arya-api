const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const { merdekaNews } = require('../scraper/merdekanews')
const fetch = require('node-fetch')
const fs = require('fs')
__path = process.cwd()

var alexaqr = "xhdbdndudjdkkxkxmdndnnfnfnfnfnfnffnnfbxbxhcxhxyfhhdhdbdbdbdbdndndndbbrjglllshefin frannskdhddhndndndndndndndjdlenegsksosbewlspsvsmalags sbsnsis sbsndmddbdndssy"

router.get("/qrcode", (req, res) => {
 var qr = require('qr-image')
 var img = qr.image(alexaqr,{size :18});
 res.writeHead(200, {'Content-Type': 'image/png'});
 img.pipe(res);
});

module.exports = router
