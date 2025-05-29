import React from "react";
import { Box, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";

export default function TodoEmptyState() {
	return (
		<Box
			sx={{
				textAlign: "center",
				py: 4,
				color: "text.secondary",
			}}
		>
			<InboxIcon sx={{ fontSize: 72, mb: 1 }} />
			<Typography variant="h6">Список задач пуст</Typography>
			<Typography variant="body1">Добавьте свою первую задачу</Typography>
		</Box>
	);
}
