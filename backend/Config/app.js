import dotenv from "dotenv";
dotenv.config({path:"config/.env"});

import express from "express";
const app = express();

import querystring from 'querystring';
import cors from 'cors';

const corsOptions = {
    origin: `${process.env.FRONTENDURL}`, // use your actual domain name (or localhost), using * is not recommended
    // origin: "http://localhost:3000", // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type' , 'auth-token' , 'Accept' , 'Code' , 'Origin', 'Authorization'],
    credentials: true
  };
 
 app.use(cors(corsOptions)); 

import User from "./Views/user.js";

import sessions from "express-session";

import student from "./Views/student.js";
import project from "./Views/projects.js";


app.use(express.json());

import Student from "./Models/Student.js";

//mongoose connection
import connectDatabase from "./config/database.js"
import authRouter from "./Views/msAuth.js";
connectDatabase();

const clientId = process.env.MICROSOFT_GRAPH_CLIENT_ID;
console.log(clientId)
const tenantId = process.env.MICROSOFT_GRAPH_TENANT_ID;
const clientSecret = process.env.MICROSOFT_GRAPH_CLIENT_SECRET;

const redirectUri = `${process.env.FRONTENDURL}/studentallproject`;
const scopes = 'user.read';


app.use("/user",User);

app.get('/api/getToken', (req, res) => {
    const authorizationUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize`;
    const queryParams = querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: scopes,
    });
  
    const authorizeUrl = `${authorizationUrl}?${queryParams}`;
    res.redirect(authorizeUrl);
  });


const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));



// app.use("",msRoute);
app.use(authRouter)
app.use("/student",student)
app.use("/project",project);

app.get("/",async (req,res)=>{
    if(req.user){
        const student = await Student.findById(req.user._id);
        res.send(student);   
    }
    else{
        res.send("Error");
    }
})



app.listen(process.env.PORT,(req,res,err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server listening on PORT ", process.env.PORT);
    }
})