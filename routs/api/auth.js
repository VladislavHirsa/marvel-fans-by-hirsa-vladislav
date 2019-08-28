const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');


router.get('/', auth, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user); 
        // console.log(req);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


router.post('/', [
    check('email', 'Please include valid email').isEmail().exists(),
    check('password', 'Please password is required').exists()
    
] ,
async (req, res) => {
const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }

    const {email, password} = req.body;
    console.log(req.body, 'Auth');
    try {

        let user = await User.findOne({email})
        let userPassword = await User.findOne({password})

        if(!user) {
           return res
           .status(400)
           .json({ errors: [{ msg: 'Invalid Email'}]})
        } else if (!userPassword) {
            return res
           .status(400)
           .json({ errors: [{ msg: 'Invalid Password'}]})
        }
    
       const isMatch = await bcrypt.compare(password, user.password)

       if(!isMatch) {
        return res
        .status(400)
        .json({ errors: [{ msg: 'Invalid Credentials'}]})
       }

        const payload = {
            user:{
                id: user.id
            }
        }

        jwt.sign(payload,
            config.get('jwtSecret'),
            {expiresIn: 36000},
            (err, token) => {
                if(err) throw err;
                res.json({token})
            }
            )

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }

});

module.exports = router;