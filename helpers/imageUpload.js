const multer = require('multer');

const storage = multer.diskStorage({
    destination : function (req, file, cd) {
        cd(null, 'public/images');
    },
    filename : function(req, file, cd) {
        cd(null, `${Date.now()}_${file.originalname}`);
    },
});

exports.upload = multer({ storage : storage});