const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const authMiddleware = require('../middlewares/auth')

const router = express.Router();
router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send({ok: true, user: req.userId})
});

module.exports = app => app.use('/projects', router);