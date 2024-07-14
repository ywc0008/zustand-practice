import { create } from "zustand";

type Todo = {
  id: number;
  text: string;
};

type State = {
  todoList: Todo[];
};

type Action = {
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

const useTodoStore = create<State & Action>((set) => ({
  todoList: [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
  ],
  addTodo: (text) =>
    set((state) => ({
      todoList: [
        ...state.todoList,
        { id: Date.now(), text }, // 유일한 ID 생성
      ],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todoList: state.todoList.filter((todo) => todo.id !== id),
    })),
}));

export default useTodoStore;
