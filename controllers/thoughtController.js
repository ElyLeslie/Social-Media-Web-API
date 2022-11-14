const { Users, Thoughts } = require('../models');
const { ObjectId } = require('mongoose').Types;

module.exports = {
    getThoughts(req, res) {
        Thoughts.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },
    getSingleThought(req, res) {
        Thoughts.findOne(
            { _id: req.params.thoughtId }

        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No Thought found with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thoughts.create(req.body)
            .then((thought) => {
                return Users.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                )
            })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Thought created, but found no user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No Thought found with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No Thought found with that ID' })
                    : res.json(thought)
            )
            .then(() => res.json({ message: 'Thought deleted' }))
            .catch((err) => res.status(500).json(err));
    },
    createReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No Thought found with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No Thought found with that ID!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    }
}