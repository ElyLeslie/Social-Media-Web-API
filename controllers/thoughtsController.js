const {ObjectId } = require('mongoose').Types;
const { Users, Thoughts } = require('../models')

module.exports = {
    getAllThoughts(req, res) {
        Thoughts.find().then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))

    },
    createThought(req, res) {
        Thoughts.find().then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))

    },
    updateThought(req, res) {
        Thoughts.find().then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))

    },
    getSingleThought(req, res) {
        Thoughts.find().then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))

    },
    deleteThought(req, res) {
        Thoughts.find().then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err)) 
    },
    createReaction(req, res) {
        Thoughts.find().then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err)) 
    },
    deleteReaction(req, res) {
        Thoughts.find().then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err)) 
    },
    // createThought()
    // getSingleThought()
    // updateThought()
    // deleteThought()
    // createReaction()
    // deleteReaction()
}