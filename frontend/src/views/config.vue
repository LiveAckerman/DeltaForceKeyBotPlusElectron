<template>
  <div>
    <h1>User Management</h1>
    <form @submit.prevent="addUser">
      <input v-model="newUser.name" placeholder="Name" required />
      <input v-model.number="newUser.age" placeholder="Age" type="number" required />
      <button type="submit">Add User</button>
    </form>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.age }})
        <button @click="deleteUser(user.id)">Delete</button>
        <button @click="editUser(user)">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { databaseAPI } from '@/api/database';

const users = ref([]);
const newUser = ref({ name: '', age: null });

const fetchUsers = async () => {
  users.value = await databaseAPI.getUsers();
};

const addUser = async () => {
  await databaseAPI.addUser(newUser.value);
  newUser.value = { name: '', age: null };
  fetchUsers();
};

const deleteUser = async (id) => {
  await databaseAPI.deleteUser(id);
  fetchUsers();
};

const editUser = async (user) => {
  const updatedName = prompt('Enter new name:', user.name);
  const updatedAge = prompt('Enter new age:', user.age);
  if (updatedName && updatedAge) {
    await databaseAPI.updateUser({ id: user.id, name: updatedName, age: Number(updatedAge) });
    fetchUsers();
  }
};

onMounted(fetchUsers);
</script>