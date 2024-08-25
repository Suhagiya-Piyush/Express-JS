const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

exports.verifyToken = async (req, res, next) => {
    try {
        const authorization = req.headers['authorization'];
        if(!authorization){
            return res.json({message : 'Not Authorization'});
        }
        const token = authorization.split(" ")[1];
        const payload = await jwt.verify(token, process.env.JWT_SECRET);    
        if(!payload){
            return res.status(401).json({message : 'Unauthorized'});
        }
        const user = await User.findOne({_id : payload.userId, isDelete : false});
        if(!user){
            return res.status(404).json({message : 'User Not Found...'});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'Internal Server Error...'});
    }
};