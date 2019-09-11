const express = require( 'express' );
const router = express.Router();
const auth = require( '../../middleware/auth' );
const Profile = require( '../../modules/Profile' );
const User = require( '../../modules/User' );
const {check, validationResult } = require( 'express-validator' );


router.get( '/me', auth, async ( req, res ) => {
  try {

    const profile = await Profile.findOne( {user: req.user.id} )
    .populate(
      'user',
      [ 'name', 'avatar', 'email' ]
    );
    console.log(req.user, 'Profile');

    if ( !profile ) {
      return res.json( {} );
    }

    res.json( profile );

  } catch ( err ) {
    console.error( err.message );
    res.status( 500 ).send( 'Server Error' );
  }
} );




router.post(
  '/',
  [
    auth,
    [
      check( 'status', 'Status is required' )
      .not()
      .isEmpty()
    ]
  ],
  async ( req, res ) => {
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
      return res.status( 400 ).json( {
        errors: errors.array()
      } );
    }

    const {
      name,
      email,
      location,
      avatar,
      status,
      interests,
      instagram,
    } = req.body;


    // console.log(req.body)

    // Build profile object
    const profileFields = {};
    const profileFieldsData = {}
    profileFields.user = req.user.id;
    if ( name ) profileFieldsData.name = name;
    if ( email ) profileFieldsData.email = email;
    if ( location ) { 
      profileFields.location = location;
    } else if (location === "") {
      profileFields.location = ""
    }
    if ( avatar ) {
      profileFieldsData.avatar = avatar;
    } else if (avatar === "") {
      profileFieldsData.avatar = "https://images.app.goo.gl/NG9v1DgyDhnQe1AL6"
    }
    if ( status ) profileFields.status = status;

    if ( interests ) {
      profileFields.interests = interests;
    } else if (interests === "") {
      profileFields.interests = ""
    }


    
    // Build social object
    profileFields.social = {};
    if ( instagram ) profileFields.social.instagram = instagram;


    try {
      let profile = await Profile.findOne( {
        user: req.user.id
      } );

      let user = await User.findOne( {
        _id: req.user.id
      })

      //  console.log(profile, 'Profile DataBase');
      //  console.log(user, 'Profile DataBase User______________________');

      if ( profile ) {
        // Update
        profile = await Profile.findOneAndUpdate( {
          user: req.user.id
        }, {
          $set: profileFields
        }, {
          new: true
        } );

        if ( user ) {
          user = await User.findOneAndUpdate( {
            _id: req.user.id
          }, {
            $set: profileFieldsData
          }, {
            new: true
          } );
        }

        return res.json( profile);
      }

      // Create
      profile = new Profile( profileFields );
      // console.log(profile, 'Second.............');

      await profile.save();
      await user.save();
      res.json( profile );
    } catch ( err ) {
      console.error( err.message );
      res.status( 500 ).send( 'Server Error' );
    }
  }
);

// @route    GET api/profile
// @access   Public
router.get( '/', async ( req, res ) => {
  try {
    const profiles = await Profile.find().populate( 'user', [ 'name', 'avatar' ] );
    res.json( profiles );
  } catch ( err ) {
    console.error( err.message );
    res.status( 500 ).send( 'Server Error' );
  }
} );


router.get( '/user/:user_id', async ( req, res ) => {
  try {
    const profile = await Profile
    .findOne( { user: req.params.user_id } )
    .populate( 'user', [ 'name', 'avatar' ] );
    // console.log(req)

    if ( !profile ) return res.status( 400 ).json( {
      msg: 'Profile not found'
    } );

    res.json( profile );

  } catch ( err ) {

    console.error( err.message );
    
    if ( err.kind == 'ObjectId' ) {
      return res.status( 400 ).json( {
        msg: 'Profile not found'
      } );
    }

    res.status( 500 ).send( 'Server Error' );
  }
} );

//   Delete profile, user & posts


router.delete( '/', auth, async ( req, res ) => {
  try {
    // Remove user posts
    // await Post.deleteMany( {
    //   user: req.user.id
    // } );
    // Remove profile
    await Profile.findOneAndRemove( {
      user: req.user.id
    } );
    // Remove user
    await User.findOneAndRemove( {
      _id: req.user.id
    } );

console.log(req.user)

    res.json( {
      msg: 'User deleted'
    } );
  } catch ( err ) {
    console.error( err.message );
    res.status( 500 ).send( 'Server Error' );
  }
} );



module.exports = router;