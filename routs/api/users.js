const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const User = require('./../../modules/User')
const UserPost = require('./../../modules/UserPost')
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Please enter password 8 or more characters').isLength({min: 8})
    
] ,
async (req, res) => {
const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }

    const {name, email, password} = req.body;
    // console.log(req.body);
    try {

        let userEmail = await User.findOne({email})
        let userName = await User.findOne({name})

        if(userEmail) {
           return res.status(400).json({ errors: [{ msg: 'The email exist alredy'}]})
        } else if (userName) {
           return res.status(400).json({ errors: [{ msg: 'The user name exist alredy'}]})
        }
    
        const avatar = gravatar.url(email, {
            s:'150',
            r:'pg',
            d:'retro'
        },
        false
        );

       let user = new User ({
            name,
            email,
            avatar,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);
         await user.save();

        const payload = {
            user: {
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

            const userPost = new UserPost({
                ownerPosts: user.id
            })

            await userPost.save();
            
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }

});

module.exports = router;