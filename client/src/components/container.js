import { BsFillPlusCircleFill } from "react-icons/bs";

const Container = () => {
  return (
    <section className="container">
      <section className="todo-input-container">
        <input type="text" className="todo-input" />
        <BsFillPlusCircleFill className="input-icon" />
      </section>
    </section>
  );
};

export default Container;
