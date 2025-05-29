import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import { store } from "./store/store";

export default function TodoList() {
	return (
		<>
			<Provider store={store}>
				<TodoApp />
			</Provider>
		</>
	);
}
