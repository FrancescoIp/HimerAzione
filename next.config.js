const nextTranslate = require("next-translate");

module.exports = {
  images: {
    domains:['images.ctfassets.net']
  },
  ...nextTranslate(),
}