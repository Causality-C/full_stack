<template>
    <div class="container">
        <h1>Todo List</h1>
        <div class="add-todo">
            <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo..." class="todo-input">
            <button @click="addTodo" class="add-button" :disabled="!newTodo.trim()">Add</button>
        </div>
        <div class="todo-list">
            <div v-for="todo in todos" :key="todo.id" class="todo-item">
                <input type="checkbox" v-model="todo.completed" @change="updateTodo(todo)">
                <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
                <button @click="deleteTodo(todo.id)" class="delete-button">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export default {
    data() {
        return {
            todos: [],
            newTodo: ''
        }
    },
    methods: {
        async fetchTodos() {
            try {
                const response = await axios.get(`${API_URL}/todos`);
                this.todos = response.data;
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        },
        async addTodo() {
            if (!this.newTodo.trim()) return;

            try {
                const response = await axios.post(`${API_URL}/todos`, {
                    text: this.newTodo,
                    completed: false
                });
                this.todos.push(response.data);
                this.newTodo = '';
            } catch (error) {
                console.error('Error adding todo:', error);
            }
        },
        async updateTodo(todo) {
            try {
                await axios.put(`${API_URL}/todos/${todo.id}`, todo);
            } catch (error) {
                console.error('Error updating todo:', error);
            }
        },
        async deleteTodo(id) {
            try {
                await axios.delete(`${API_URL}/todos/${id}`);
                this.todos = this.todos.filter(todo => todo.id !== id);
            } catch (error) {
                console.error('Error deleting todo:', error);
            }
        }
    },
    mounted() {
        this.fetchTodos();
    }
}
</script>

<style>
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
    color: #2c3e50;
}

.add-todo {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.todo-input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

.add-button {
    padding: 8px 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.add-button:hover:not(:disabled) {
    background-color: #3aa876;
}

.add-button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
}

.todo-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.todo-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 4px;
}

.completed {
    text-decoration: line-through;
    color: #6c757d;
}

.delete-button {
    margin-left: auto;
    padding: 4px 8px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.delete-button:hover {
    background-color: #c82333;
}
</style>