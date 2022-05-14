const TodoList = ({ todoList }) => {
  console.log(todoList);

  return (
    <section className="todo-list">
      <ul>
        {todoList.map((todo) => {
          const { text, id } = todo;
          return (
            <li className="todo-item" key={id}>
              {text}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
