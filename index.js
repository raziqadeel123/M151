/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

import express from "express"
import cors from "cors"
import session from "express-session"
import dotenv from "dotenv"


/*----------------------------------------------------------------------------*/
/* DECLARATION AND INITIALIZATION                                                            */
/*----------------------------------------------------------------------------*/

dotenv.config();

const app = express();

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

app.listen(process.env.APP_PORT, ()=>{
    console.log("Server up and running")
})

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/