/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

import express from "express"
import cors from "cors"
import session from "express-session"
import dotenv from "dotenv"
import Database from "./config/Database.js"


/*----------------------------------------------------------------------------*/
/* DECLARATION AND INITIALIZATION                                                            */
/*----------------------------------------------------------------------------*/

dotenv.config();

const app = express();


const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';
const port = process.env.PORT || '3100';

// Database Connection
Database(DATABASE_URL);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie : {
        secure : "auto"
    }
}))

// middlewares
app.use(cors({
    credentials : true,
    origin: "http://localhost:3000"
}))

app.use(express.json())

app.listen(port, ()=>{
    console.log(`Server up and running on ${port}`)
})

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/