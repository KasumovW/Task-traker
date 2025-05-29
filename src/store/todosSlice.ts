import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Todo {
	id: string;
	text: string;
	completed: boolean;
	createdAt: string;
}

interface TodosState {
	todos: Todo[];
	filter: "all" | "active" | "completed";
}

const initialState: TodosState = {
	todos: JSON.parse(localStorage.getItem("todos") || "[]"),
	filter: "all",
};

const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},
		toggleTodo: (state, action: PayloadAction<string>) => {
			const todo = state.todos.find((t) => t.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((t) => t.id !== action.payload);
		},
		editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
			const todo = state.todos.find((t) => t.id === action.payload.id);
			if (todo) {
				todo.text = action.payload.text;
			}
		},
		setFilter: (state, action: PayloadAction<"all" | "active" | "completed">) => {
			state.filter = action.payload;
		},
		clearCompleted: (state) => {
			state.todos = state.todos.filter((t) => !t.completed);
		},
	},
});

export const { addTodo, toggleTodo, deleteTodo, editTodo, setFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
