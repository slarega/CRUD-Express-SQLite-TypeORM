// *for data.js[
import Router from "express";
import userControllerData from "../controller/userControllerData.js";

const router = new Router();

router.route('/server')
    .get(userControllerData.getUsers)
    .post(userControllerData.addUser)

router.get('/server/:id', userControllerData.getUserById)
router.delete('/server/:id', userControllerData.deleteUser)
router.put('/server/:id', userControllerData.updateUser)

export default router;