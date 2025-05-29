import { List } from "@mui/material";
import TodoItem from "./TodoItem";
import TodoEmptyState from "./TodoEmptyState";
import type { Todo } from "../types";

interface TodoListProps {
	todos: Todo[];
	onToggle: (id: string) => void;
	onDelete: (id: string) => void;
	onEdit: (id: string, text: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
	return (
		<List sx={{ mb: 2 }}>
			{todos.length > 0 ? (
				todos.map((todo) => <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />)
			) : (
				<TodoEmptyState />
			)}
		</List>
	);
}
