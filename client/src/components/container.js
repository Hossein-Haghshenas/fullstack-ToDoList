import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const Container = () => {
  return (
    <section className="container">
      <AddTodo />
      <TodoList />
    </section>
  );
};

export default Container;
