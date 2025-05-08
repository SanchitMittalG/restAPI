import express from 'express';

import {deleteUserById,getUsers,getUserById} from '../db/users';

export const getAllUsers = async(req:express.Request , res:express.Response)=>{
    try{
         const users = await getUsers();
         res. status (200). json(users);
         return;
    }catch(error){
        console. log(error);
        res.sendStatus (400);
        return;
    }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try{
    const{ id } = req.params;
    
    const deletedUser = await deleteUserById(id);
    res. json (deletedUser);
    return 
    }catch (error) {
    console. log(error);
    res. sendStatus(400);
    return 
    }
}

export const updateUser = async (req: express.Request, res: express.Response)=>{
try{
const {id }= req.params;
const{username}= req. body;
 
if (!username) {
res.sendStatus(400);
return ;
}

const user = await getUserById(id);
user.username = username;
await user. save();
 res.status(200).json(user). end();
 return
}catch(error) {
console. log(error);
 res.sendStatus (400);
 return
}
}
