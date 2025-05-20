import dotenv from 'dotenv';
dotenv.config({path:'Config/.env'});

import express from 'express';
const app = express();

import cors from 'cors';
import authRouter from "./Views/msAuth.js";
import session from 'express-session';

const corsOptions = {
    origin : `${process.env.FRONTENDURL}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type' , 'auth-token' , 'Accept' , 'Code' , 'Origin', 'Authorization'],
    credentials: true
}

app.use(cors(corsOptions)); 
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET || 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
}));

function ensureAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    }
    // redirected to login if not authenticated
    res.redirect('/auth/login');
}

// Protect routes
app.use('/protected', ensureAuthenticated, (req, res) => {
    res.status(200).json({ user: req.session.user });
});

app.use(authRouter);

app.listen(process.env.PORT || 5001, (req,res,err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Server listening on PORT ", process.env.PORT||5001);
    }
})