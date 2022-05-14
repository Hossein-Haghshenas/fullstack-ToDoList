import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const Container = ({ handleNewTodo, todoList }) => {
  return (
    <section className="container">
      <AddTodo handleNewTodo={handleNewTodo} />
      <TodoList todoList={todoList} />
    </section>
  );
};

export default Container;
