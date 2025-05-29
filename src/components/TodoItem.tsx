import React, { useState } from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import type { Todo } from "../types";

interface TodoItemProps {
	todo: Todo;
	onToggle: (id: number) => void;
	onDelete: (id: number) => void;
	onEdit: (id: number, text: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(todo.text);

	const handleSave = () => {
		if (editText.trim()) {
			onEdit(todo.id, editText);
			setIsEditing(false);
		}
	};

	return (
		<ListItem
			secondaryAction={
				!isEditing ? (
					<>
						<IconButton edge="end" onClick={() => setIsEditing(true)}>
							<EditIcon />
						</IconButton>
						<IconButton edge="end" onClick={() => onDelete(todo.id)} sx={{ ml: 1 }}>
							<DeleteIcon color="error" />
						</IconButton>
					</>
				) : (
					<>
						<IconButton edge="end" onClick={handleSave}>
							<CheckIcon color="success" />
						</IconButton>
						<IconButton edge="end" onClick={() => setIsEditing(false)} sx={{ ml: 1 }}>
							<CloseIcon color="error" />
						</IconButton>
					</>
				)
			}
			disablePadding
		>
			<ListItemButton onClick={() => !isEditing && onToggle(todo.id)}>
				<ListItemIcon>
					<Checkbox edge="start" checked={todo.completed} tabIndex={-1} disableRipple />
				</ListItemIcon>

				{isEditing ? (
					<TextField fullWidth value={editText} onChange={(e) => setEditText(e.target.value)} autoFocus onKeyPress={(e) => e.key === "Enter" && handleSave()} />
				) : (
					<ListItemText
						primary={todo.text}
						secondary={`Создано: ${new Date(todo.createdAt).toLocaleDateString()}`}
						sx={{
							textDecoration: todo.completed ? "line-through" : "none",
							color: todo.completed ? "text.secondary" : "text.primary",
						}}
					/>
				)}
			</ListItemButton>
		</ListItem>
	);
}
