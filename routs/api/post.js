const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');
const Post = require('../../modules/Post');
const User = require('../../modules/User');
const UserPost = require('../../modules/UserPost');

router.put('/', [auth,
[
check('text', 'Type in text')
.not()
.isEmpty()
]

], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status( 400 ).json( {
            errors: errors.array()
          } );
    }

try {
    
    let ownPost = await UserPost.findOne({ownerPosts: req.user.id});
    let friendPost = await UserPost.findOne({ownerPosts: req.body.user_id});
    let post = null;
    let commonPost = null;

    await ownPost.postList.forEach( user => {

        if ( user.user.toString() === req.body.user_id.toString() ) {
            return post = user.post_id
        }
      })
      
    const user = await User.findById(req.user.id).select('-password');

if( post ) {

    commonPost = await Post.findOne({ _id: post });


     await commonPost.message.push({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
        });

} 

     const posts = await commonPost.save();
    await ownPost.save();
    await friendPost.save();
    
    res.json(posts);
} catch (err) {
    console.error(err.message);
    res.status( 500 ).send( 'Server Error' );
}
});



router.post('/', auth, async (req, res) => {
      
    try {
        let ownPost = await UserPost.findOne({ownerPosts: req.user.id});
        let friendPost = await UserPost.findOne({ownerPosts: req.body.user_id});
        let post = null;
        let commonPost = null;
    
        await ownPost.postList.forEach( user => {
    
            if ( user.user.toString() === req.body.user_id.toString() ) {
                return post = user.post_id
            }
          })
          
        const user = await User.findById(req.user.id).select('-password');
    
    if( post ) {
        commonPost = await Post.findOne({ _id: post });
    
    } else if ( post === null ) {
    
        commonPost = await new Post();
                   
        await ownPost.postList.push({
            user: req.body.user_id,
            post_id: commonPost._id
        })
    
        await friendPost.postList.push({
            user: req.user.id, 
            post_id: commonPost._id
        })
    
    }
         
         const posts = await commonPost.save();
        await ownPost.save();
        await friendPost.save();
        
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status( 500 ).send( 'Server Error' );
    }
    });



router.get('/post/:post_id', auth, async (req, res) => {
    try {
        const posts = await Post.findById(req.params.post_id)
     
    //   await console.log(posts, 'Required............................................')
    
      res.json(posts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



router.get('/', auth, async (req, res) => {
    try {
        const ownPost = await UserPost.findOne({ownerPosts: req.user.id}).select('postList')
        .populate('postList.user', ['name', 'avatar'])

        
        if(!ownPost) {
            console.error(err.message);
            res.status(400).send('Post not found')
        }
        res.json(ownPost);
    } catch (err) {
        console.error(err.messasge);
        if(err.kind === 'ObjectId') {
            res.status(400).send('Post not found')
        }
        res.status(500).send('Server Error');
    }
})

router.delete('/post/:post_id', auth, async (req, res) => {
 
    // await console.log(req,"________---DIFERENT---______");
    try {
         const post = await Post.findById(req.params.post_id);

        // console.log(post,'postpostpostpostpostpostpostpostpostpostpostpost')
        // if(post.user.id !== req.user.id) {
        //     console.error(err.message);
        //     res.status(400).send('User not autorized')
        // }

        await post.remove();
        res.json({
            msg: 'Post deleted'
        });
    } catch (err) {
        console.error(err.messasge);
        if(err.kind === 'ObjectId') {
            res.status(400).send('Post not found')
        }
        res.status(500).send('Server Error');
    }
});


router.put('/likes/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);


        if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            
             let postNew =  post.likes.map(like => like.user.toString()).indexOf(req.user.id)
            post.likes.splice(postNew, 1);
            // return res.status(400).json({msg: "Like is been"});
        
    } else if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0){

        post.likes.push({user: req.user.id})
    }       
        console.log(req)
        
        await post.save();
        res.json(post.likes);
    } catch (err) {
        console.error(err.messasge);
        res.status(500).send('Server Error'); 
    }
})

module.exports = router;