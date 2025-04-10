export const databaseAPI = {
  addUser: (user) => window.databaseAPI.addUser(user),
  getUsers: () => window.databaseAPI.getUsers(),
  updateUser: (user) => window.databaseAPI.updateUser(user),
  deleteUser: (id) => window.databaseAPI.deleteUser(id),
};