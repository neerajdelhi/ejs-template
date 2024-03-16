//midleware
const reqFilter = (req, res, next)=>{

    if(!req.query.age){
        res.send('Please type age.');
    }

    next();
}

module.exports = reqFilter;