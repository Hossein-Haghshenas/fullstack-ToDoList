import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const Container = ({ searchText }) => {
  return (
    <section className="container">
      <AddTodo />
      <TodoList searchText={searchText} />
    </section>
  );
};

export default Container;
