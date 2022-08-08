const sharp = require('sharp');

sharp('./gatito.jpg')
    .resize(80)
    .toFile('resized.jpg');