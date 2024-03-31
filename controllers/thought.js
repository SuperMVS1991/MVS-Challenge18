const { Thought, User } = require("../models");

module.exports = {
    // get all Thoughts
    thoughts(req, res) {
        Thought
        .find({})
        .select("-__v")
        .sort({ _id: -1 })
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    
    // get one Thought by id
    getThought({ params }, res) {
        Thought
        .findOne({ _id: params.Id })
        .select("-__v")
        .then((dbThoughtData) => {
            // If no Thought is found, send 404
            if (!dbThoughtData) {
            res.status(404).json({ message: "No Thought found with this id!" });
            return;
            }
            res.json(dbThoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    
    // create Thought
    createThought({ body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
       //       { _id: body.userId },  this line of code is breaking us 
              { username: body.username },
              { $push: { thoughts: _id } },
              { new: true }
            );
          })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No thoughts found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
      },
    
    // update Thought by id
    updateThought({ params, body }, res) {
        Thought
        .findOneAndUpdate({ _id: params.Id }, body, {
            new: true,
            runValidators: true,
        })
        .then((dbThoughtData) => {
            if (!dbThoughtData) {
            res.status(404).json({ message: "No Thought found with this id!" });
            return;
            }
            res.json(dbThoughtData);
        })
        .catch((err) => res.status(400).json(err));
    },
    
    // delete Thought
    deleteThought({ params }, res) {
        Thought
        .findOneAndDelete({ _id: params.Id })
        .then((dbThoughtData) => {
            if (!dbThoughtData) {
            res.status(404).json({ message: "No Thought found with this id!" });
            return;
            }
            res.json(dbThoughtData);
        })
        .catch((err) => res.status(400).json(err));
    },
    
    // add reaction to Thought
    addReaction({ params, body }, res) {
        Thought
        .findOneAndUpdate(
            { _id: params.Id },
            { $addToSet: { reactions: body } },
            { new: true, runValidators: true }
        )
        .then((dbThoughtData) => {
            if (!dbThoughtData) {
            res.status(404).json({ message: "No Thought found with this id!" });
            return;
            }
            res.json(dbThoughtData);
        })
        .catch((err) => res.json(err));
    },

    deleteReaction({ params }, res) {
        Thought
        .findOneAndUpdate(
            { _id: params.Id },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => res.json(err));
    }
};
