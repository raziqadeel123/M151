/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

import express from "express";
import { getUsers , getUserById, saveUser, updateUser,deleteUser, } from "../Controllers/UserController";

/*----------------------------------------------------------------------------*/
/* User Router                                                                   */
/*----------------------------------------------------------------------------*/

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", saveUser);
router.delete("/users/:id", updateUser);
router.delete("/users/:id", deleteUser)

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/

export default router;