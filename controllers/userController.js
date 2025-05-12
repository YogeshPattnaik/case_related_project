const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).send('Error fetching users');
  }
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.createUser(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send('Error creating user');
  }
};