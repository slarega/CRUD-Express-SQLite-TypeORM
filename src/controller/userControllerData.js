let data = [
  {id: "1", firstName: "Василий", lastName: "Иванов"},
  {id: "2", firstName: "Кирилл", lastName: "Кузнецов"},
  {id: "3", firstName: "Иван", lastName: "Петров"},
  {id: "4", firstName: "Егор", lastName: "Соколов"}
]

let currentId = data.length + 1

const userControllerData = {

  getUsers: async function (req, res) {
    res.status(200).json(data)
  },

  getUserById: async function (req, res) {
    let userIndex = data.findIndex(s => s.id === req.params.id.toString())
    if (userIndex !== -1) {
      res.json(data[userIndex])
    }
    return null
  },

  addUser: async function (req, res) {
    const newServer = {
      id: currentId.toString(),
      ...req.body
    }
    currentId++
    data.push(newServer)
    res.status(201).json(newServer)
  },

  updateUser: async function (req, res) {
    let userIndex = data.findIndex(s => s.id === req.params.id.toString())
    if (userIndex !== -1) {
        data[userIndex] = {id: data[userIndex].id, ...req.body}
        res.json(data[userIndex])
    }
    return null
  },

  deleteUser: async function (req, res) {
    data = data.filter(s => s.id !== req.params.id)
    res.json({message: `id: ${req.params.id} has been removed.`})
    console.log(data[0].id)
    console.log(req.params.id)
  }
}

export default userControllerData;