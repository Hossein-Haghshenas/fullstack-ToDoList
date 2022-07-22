import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useEffect, useState } from "react";
import { Loading, Grid } from "@nextui-org/react";
import HomePage from "./HomePage";
import { jwtToken, userInfo } from "./AuthChecker";

const Container = ({ searchHandler, searchText }) => {
  const [callStatus, setCallStatus] = useState(false);
  const statusHandler = (status) => setCallStatus(status);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const expire = userInfo && Date.now() >= userInfo.exp * 1000 ? false : true;
    jwtToken && expire && setIsLogin(true);
  }, []);

  return (
    <section>
      {!isLogin ? (
        <HomePage />
      ) : (
        <section className="main-page p-sm-5 p-1">
          {" "}
          <section className="todo-container flex-sm-nowrap m-auto m-sm-0">
            <AddTodo
              statusHandler={statusHandler}
              searchHandler={searchHandler}
            />
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
      )}
    </section>
  );
};

export default Container;
