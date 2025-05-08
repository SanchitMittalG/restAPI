import express from 'express';//web framework for Node.js used to build APIs and web applications
import http from 'http';// built-in Node.js module for creating an HTTP server
import bodyParser from 'body-parser';//Middleware to parse incoming request bodies (JSON, form data, etc.)
import cookieParser from 'cookie-parser';//Middleware for parsing cookies from incoming requests
import compression from 'compression';// Middleware for compressing HTTP responses (improves performance)
import cors from 'cors'//Middleware to allow Cross-Origin Resource Sharing (CORS), enabling communication between different domains
import mongoose from 'mongoose';
import router from './router';

const app = express();

app. use (cors({   //applying middleware
credentials: true,
}));
app. use (compression()); 
app. use (cookieParser());
app. use (bodyParser. json( ));
const server = http.createServer(app);

server.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
  });

  mongoose.connect("mongodb+srv://sanchitmittal:Sanchit123@cluster0.amrcd.mongodb.net/")
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch((error) => console.log("❌ MongoDB Connection Failed:", error));

mongoose.Promise = Promise;
mongoose.connection.on('error',(error : Error)=> console.log(error));

app.use('/',router());
