// *for postgres
import Router from "express";
import userController from "../controller/userController";

const router = new Router();

router.route('/server')
    .get(userController.getUsers)
    .post(userController.addUser)

router.get('/server/:id', userController.getUserById)
router.delete('/server/:id', userController.deleteUser)
router.put('/server/:id', userController.updateUser)

export default router;