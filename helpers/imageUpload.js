const multer = require('multer');
// const path = require('path');
// const filePath = path.join(__dirname, '../assets/images');

const storage = multer.diskStorage({
    destination : function (req, file, cd) {
        cd(null, 'public/images');
    },
    filename : function(req, file, cd) {
        const fileName = file.originalname.replace(/ /g, '%20');
        cd(null, `${Date.now()}_${fileName}`);
    },
});

exports.upload = multer({ storage : storage});