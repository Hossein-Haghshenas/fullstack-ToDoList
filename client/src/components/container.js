import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const Container = ({ todoList }) => {
  return (
    <section className="container">
      <AddTodo />
      <TodoList todoList={todoList} />
    </section>
  );
};

export default Container;
