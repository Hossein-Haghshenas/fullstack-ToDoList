import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useState } from "react";
import { Loading, Grid } from "@nextui-org/react";

const Container = ({ searchText }) => {
  const [callStatus, setCallStatus] = useState(false);

  const statusHandler = (status) => setCallStatus(status);

  return (
    <section className="container">
      <AddTodo statusHandler={statusHandler} />
      {callStatus ? (
        <Grid>
          <Loading color="secondary" textColor="secondary">
            Please wait
          </Loading>
        </Grid>
      ) : (
        <TodoList searchText={searchText} />
      )}
    </section>
  );
};

export default Container;
