/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

import mongoose from "mongoose";

/*----------------------------------------------------------------------------*/
/* DECLARATION AND INITIALIZATION                                             */
/*----------------------------------------------------------------------------*/

const connectDB = async (DATABASE_URL) =>{
    try {

        const DB_OPTIONS = {
            dbName : "M151"
        }
        mongoose.set('strictQuery', true);
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log('Db Connected Successfully ...');
    } catch (err) {
        console.log(err)
    }
}

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
export default connectDB;