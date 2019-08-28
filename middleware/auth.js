const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {

    const token = req.header('x-auth-token');
// console.log(token);
    if(!token) {
        res.status(401).json({msg: 'No token '})
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // console.log(token, "TTTTTTOOOOOOOOOOOKKKKKKKKKKKKEEEEEEEEEEEN");
        // console.log(decoded, 'DECOOOOOOOOOOOODET');
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json('Token is not valid')
    }

}