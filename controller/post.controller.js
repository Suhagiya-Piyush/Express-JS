// const users = require('../Data/user.json');
const User = require('../model/user.model');

// add New User
exports.addNewUser = async (req, res) => {
    try{
        // console.log(req.body);
        // const user = await User.create({...req.body});
        // user.save();
        // res.status(201).json({user, message : 'User Added'});
        const {firstName, lastName, email, hobbies, address, age} = req.body;
        let user = await User.findOne({email : email});
        if(user)
            return res.status(400).json({message : "User already exist..."});
        user = await User.create({
            firstName, lastName, email, age, hobbies, address
        });
        user.save();
        res.status(201).json({user, message : 'User Added'});
    } catch(error){
        console.log(error);
        res.status(500).json({message : 'Internal Server Error'});
    }
};

// Get All User
exports.getAllUser = async (req, res) => {
    try{
        let users = await User.find();
        res.status(200).json(users);
    } catch(error){
        console.log(error);
        res.status(500).json({message : 'Internal Server Error'});
    }
}

// Get User
exports.getUser = async (req, res) => {
    try{
        // let user = await User.findOne({_id : req.query.userId});
        let user = await User.findById(req.query.userId);
        // console.log(user);
        if(!user)
            return res.status(404).json({message : "User not Found..."});
        res.status(200).json(user);
    } catch(error){
        console.log(error);
        res.status(500).json({message : 'Internal Server Error'});
    }
};