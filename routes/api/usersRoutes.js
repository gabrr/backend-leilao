const express = require("express")
const router = express.Router();

// getting the users schema from mongoose
const Users = require("../../models/users");

// @route GET api/users
// @description get all users
// @access private
router.get('/', (req, res) => {
    Users.find()
        .sort({ date: -1 })
        .then(users => res.json(users))
})

// @route POST api/users
// @description add an user
// @access private
router.post('/', (req, res) => {
    const newUser = new Users({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
    })

    newUser.save().then(user => res.json(user));
})

// @route POST api/users
// @description add an user
// @access private
router.delete('/:id', (req, res) => {
    Users.findById(req.params.id)
        .then(user => user.remove()
            .then(() => req.json({ success: true })))
});

module.exports = router;