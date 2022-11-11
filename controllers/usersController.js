const { ObjectId } = require('mongoose').Types;
const { Users, Thoughts } = require('../models');

module.exports = {
    getUsers(req, res) {
        Users.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        Users.findOne({ _id: req.params.userId})
        .select('-__v')
        .then((user) =>
        !user? res.status(404).json({ message: 'No User found with that ID' })
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        Users.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },
    updateUser(req, res) {
        Users.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((user) => 
        !user? res.status(404).json({message: 'No user found with this ID'})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteUser(req,res) {
        Users.findOneAndDelete(
            {_id: req.params.userId}
        )
        .then((user) => 
        !user? res.status(404).json({message: 'No user found with this ID'})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        Users.findOneAndUpdate(
            {_id: req.params.userId},
            {$push: {friends: req.params.friendsId} },
            {runValidators: true, new: true}
        )
        .then((user) => 
        !user
        ? res.status(404).json({message: 'No user found with this ID'})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    deleteFriend(req, res) {
        Users.findOneAndDelete(
            {_id: req.params.userId},
            {$push: {friends: req.params.friendsId} },
            {runValidators: true, new: true}
        )
        .then((user) => 
        !user? res.status(404).json({message: 'No user found with this ID'})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
}