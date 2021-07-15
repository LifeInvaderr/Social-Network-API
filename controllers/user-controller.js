const { User } = require('../models');

const userController = {
    GetAllUser(req, res) {
        User.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserdata))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
}


module.exports = userController;