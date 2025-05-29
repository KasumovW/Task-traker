import React from "react";
import { Box, Button, ButtonGroup, Typography, Chip } from "@mui/material";

interface TodoFiltersProps {
	count: number;
	currentFilter: "all" | "active" | "completed";
	onFilterChange: (filter: "all" | "active" | "completed") => void;
	onClearCompleted: () => void;
	showClear: boolean;
}

export default function TodoFilters({ count, currentFilter, onFilterChange, onClearCompleted, showClear }: TodoFiltersProps) {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				borderTop: "1px solid",
				borderColor: "divider",
				pt: 2,
				mt: 1,
			}}
		>
			<Typography variant="body2">
				<Chip label={`${count} ${count === 1 ? "задача" : "задач"}`} size="small" sx={{ mr: 1 }} /> осталось
			</Typography>

			<ButtonGroup size="small">
				<Button variant={currentFilter === "all" ? "contained" : "outlined"} onClick={() => onFilterChange("all")}>
					Все
				</Button>
				<Button variant={currentFilter === "active" ? "contained" : "outlined"} onClick={() => onFilterChange("active")}>
					Активные
				</Button>
				<Button variant={currentFilter === "completed" ? "contained" : "outlined"} onClick={() => onFilterChange("completed")}>
					Завершенные
				</Button>
			</ButtonGroup>

			{showClear && (
				<Button variant="text" color="error" size="small" onClick={onClearCompleted}>
					Очистить завершенные
				</Button>
			)}
		</Box>
	);
}
