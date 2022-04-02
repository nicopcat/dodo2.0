import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            todos: [],
            filterWords: '',
        }
    },
    getters: {
        todoList(state) {
            if (state.todos.length > 0) {
                return state.todos.filter(todo => todo.done === false)
            } else {
                return 0;
            }

        },
        doneList(state) {
            // 不可以写todo.done === true

            if (state.todos.length > 0) {
                return state.todos.filter(todo => todo.done !== false)
            } else {
                return 0;
            }
        },
        filteredWord(state) {
            return state.filterWords;
        }
    },
    actions: {
        loadTodo(context) {
            const data = localStorage.getItem("todoList");
            const todoData = JSON.parse(data);
            context.commit('loadTodoList', todoData);
        },
        addNewList(context, payload) {
            const newAdd = {
                id: payload.id,
                taskName: payload.taskName,
                done: payload.done,
            };
            context.commit('addTodoList', newAdd);
        },
        deleteTodo(context, payload) {
            // JSON.parse()转换为array 不然报错 “updatedData.findIndex is not a function”
            let updatedData = JSON.parse(localStorage.getItem("todoList"));
            const index = updatedData.findIndex(item => item['id'] == payload);
            updatedData.splice(index, 1);
            context.commit('delTodo', updatedData);
        },
        checkTodo(context, payload) {
            // 得到当前local数据
            let updatedData = JSON.parse(localStorage.getItem("todoList"));

            // 将checked的任务 done状态改为true
            const index = updatedData.findIndex(item => item['id'] === payload);
            updatedData[index]['done'] = true

            // 更新local数据
            localStorage.setItem("todoList", JSON.stringify(updatedData))
            context.commit('checkedTodo', updatedData);
        },
        uncheckTodo(context, payload) {
            // 得到当前local数据
            let updatedData = JSON.parse(localStorage.getItem("todoList"));

            // 将checked的任务 done状态改为true
            const index = updatedData.findIndex(item => item['id'] === payload);
            updatedData[index]['done'] = false

            // 更新local数据
            localStorage.setItem("todoList", JSON.stringify(updatedData))
            context.commit('checkedTodo', updatedData);
        },
        passFilterWord(context, payload) {
            context.commit('passFilterWords', payload);
        },
        clearFilters(context) {
            context.commit('clearFilterWords');
        },
        editTodo(context, payload) {
            // 得到当前local数据
            let updatedData = JSON.parse(localStorage.getItem("todoList"));

            // 将id为payload.id的任务的taskName更新
            const index = updatedData.findIndex(item => item['id'] === payload.id);
            updatedData[index]['taskName'] = payload.content

            // 更新local数据
            localStorage.setItem("todoList", JSON.stringify(updatedData))
            context.commit('editTodos', updatedData);
        }
    },
    mutations: {
        addTodoList(state, payload) {
            // fetch data
            function getData() {
                var datas = localStorage.getItem("todoList");
                if (datas !== null) {
                    return JSON.parse(datas);
                } else {
                    return [];
                }
            }

            let storedTodo = getData() || [];
            // push new list to loacalStorage
            storedTodo.push(payload);
            // state.todos.push(payload);
            localStorage.setItem("todoList", JSON.stringify(storedTodo));

        },
        loadTodoList(state, payload) {
            state.todos = payload;
        },
        delTodo(state, payload) {
            state.todos = payload;
            localStorage.setItem("todoList", JSON.stringify(payload))
        },
        checkedTodo(state, payload) {
            state.todos = payload;
        },
        passFilterWords(state, payload) {
            state.filterWords = payload;
        },
        clearFilterWords(state) {
            state.filterWords = '';
        },
        editTodos(state, payload) {
            state.todos = payload;
        }
    }
})

export default store;