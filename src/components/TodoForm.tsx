import { useState } from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface TodoFormProps {
	onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
	const [text, setText] = useState("");

	const handleSubmit = () => {
		if (text.trim()) {
			onAdd(text);
			setText("");
		}
	};

	return (
		<Box sx={{ mb: 3 }}>
			<TextField
				fullWidth
				variant="outlined"
				label="Добавить новую задачу"
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton color="primary" onClick={handleSubmit} disabled={!text.trim()}>
								<AddIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
}
