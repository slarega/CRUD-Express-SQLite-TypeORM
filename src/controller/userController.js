import { getUsers, getUserById, addUser, updateUser, deleteUser} from "../sql3-data"

const userController = {

    getUsers: async function (req, res) {
        res.status(200).json(await getUsers());
    },

    getUserById: async function (req, res) {
        res.status(200).json(await getUserById(req.params.id));
    },

    addUser: async function (req, res) {
        let newUser = {...req.body}
        res.status(201).json(await addUser(newUser));
    },

    updateUser: async function (req, res){
        let updatedData = {...req.body}
        res.json(await updateUser(req.params.id, updatedData))
    },

    deleteUser: async function(req, res) {
        res.json(await deleteUser(req.params.id))
    }
}

export default userController;