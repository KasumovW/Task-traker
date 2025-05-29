import { useEffect } from "react";
import { Container, CssBaseline, Paper, Typography } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo, editTodo, setFilter, clearCompleted } from "../store/todosSlice";
import type { RootState } from "../store/store";

export default function TodoApp() {
	const dispatch = useDispatch();
	const { todos, filter } = useSelector((state: RootState) => state.todos);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleAddTodo = (text: string) => {
		dispatch(
			addTodo({
				id: Date.now().toString(),
				text,
				completed: false,
				createdAt: new Date().toISOString(),
			})
		);
	};

	const handleToggleTodo = (id: string) => {
		dispatch(toggleTodo(id));
	};

	const handleDeleteTodo = (id: string) => {
		dispatch(deleteTodo(id));
	};

	const handleEditTodo = (id: string, newText: string) => {
		dispatch(editTodo({ id, text: newText }));
	};

	const handleClearCompleted = () => {
		dispatch(clearCompleted());
	};

	const handleFilterChange = (newFilter: "all" | "active" | "completed") => {
		dispatch(setFilter(newFilter));
	};

	const filteredTodos = todos.filter((todo: { completed: any }) => {
		if (filter === "active") return !todo.completed;
		if (filter === "completed") return todo.completed;
		return true;
	});

	return (
		<>
			<CssBaseline />
			<Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
				<Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
					<Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700 }}>
						Todo List
					</Typography>

					<TodoForm onAdd={handleAddTodo} />

					<TodoList todos={filteredTodos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />

					<TodoFilters
						count={todos.filter((t) => !t.completed).length}
						currentFilter={filter}
						onFilterChange={handleFilterChange}
						onClearCompleted={handleClearCompleted}
						showClear={todos.some((t) => t.completed)}
					/>
				</Paper>
			</Container>
		</>
	);
}
