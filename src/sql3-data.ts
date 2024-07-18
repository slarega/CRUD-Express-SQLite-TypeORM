import { AppDataSource } from "./dataSource"
import { User } from "./entity/User";

const userRepository = AppDataSource.getRepository(User)

const getUsers = async () => {
    try {
        const users = await userRepository.find()
        return users
    } catch (err) {
        return null
    }
}

const addUser = async (user: { firstName: string, lastName: string }) => {
    const newUser = userRepository.create(user)
    await userRepository.save(newUser)
    return newUser
  }

const updateUser = async (
    id: number,
    updatedData: { firstName: string, lastName: string }
) => {
    const user = await userRepository.findOneBy({id})
    if (!user) {
        return null
    }
    userRepository.merge(user,updatedData)
    await userRepository.save(user)
    return user
}

const deleteUser = async (id: number) => {
    console.log(id)
    const result = await userRepository.delete(id)
    return (result.affected ?? 0) > 0
}

const getUserById = async (id: number) => {
    console.log(id)
    const user = await userRepository.findOneBy({id})
    return user
}

export { getUsers, getUserById, addUser, updateUser, deleteUser}