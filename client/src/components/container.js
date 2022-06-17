import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useState } from "react";
import { Loading, Grid } from "@nextui-org/react";

const Container = ({ searchHandler, searchText }) => {
  const [callStatus, setCallStatus] = useState(false);

  const statusHandler = (status) => setCallStatus(status);

  return (
    <section className="main-page p-sm-5 p-1">
      <section className="todo-container flex-sm-nowrap m-auto m-sm-0">
        <AddTodo statusHandler={statusHandler} searchHandler={searchHandler} />
      </section>
      <section>
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
    </section>
  );
};

export default Container;
