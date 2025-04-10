const fs = require('fs');
const path = require('path');

class JSONDatabase {
  constructor() {
    // 数据文件路径
    const dirPath = path.join(__dirname, '../data');
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true }); // 递归创建目录
    }
    this.filePath = path.join(dirPath, 'db.json');

    // 如果文件不存在，则初始化
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify({ users: [] }, null, 2));
    }
  }

  // 读取数据
  read() {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data);
  }

  // 写入数据
  write(data) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  // 添加用户
  addUser(user) {
    const data = this.read();
    user.id = Date.now(); // 使用时间戳作为唯一 ID
    data.users.push(user);
    this.write(data);
    return user;
  }

  // 获取所有用户
  getUsers() {
    return this.read().users;
  }

  // 更新用户
  updateUser(id, updatedUser) {
    const data = this.read();
    const index = data.users.findIndex(user => user.id === id);
    if (index !== -1) {
      data.users[index] = { ...data.users[index], ...updatedUser };
      this.write(data);
      return data.users[index];
    }
    return null;
  }

  // 删除用户
  deleteUser(id) {
    const data = this.read();
    const filteredUsers = data.users.filter(user => user.id !== id);
    this.write({ users: filteredUsers });
    return filteredUsers;
  }
}

module.exports = new JSONDatabase();