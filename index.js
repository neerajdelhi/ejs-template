const express = require('express');
const app = express();
const reqFilter = require('./middleware');
const route = express.Router();

app.set('view engine','ejs');

route.use(reqFilter);

route.get('/',(req,res)=>{
    res.send('<h1>Welcome to the page</h1>');
});

app.get('/profile',(req,res)=>{
    const user = {
        name: 'anil',
        email: 'sindhu',
        age: 26,
        language: ['php','js','nodejs','electron']
    }

    res.render('profile',{user});
});

app.use('/',route);

app.listen(4000);