import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import UpdateTodo from "./UpdateTodo";
import DeleteTodo from "./DeleteTodo";
import Timer from "./Timer";
import { Loading, Grid, Card, Text, Avatar, Col } from "@nextui-org/react";

const TodoList = ({ searchText }) => {
  const [data, setData] = useState([]);
  const [isBold, setIsBold] = useState(false);
  const [boldElement, setBoldElement] = useState("");

  useEffect(() => {
    try {
      axios
        .get("https://mytodolistapp2022.herokuapp.com/")
        .then((res) => setData(res.data.todos));
    } catch (error) {}
  }, []);

  const starHandler = (id) => {
    setIsBold(!isBold);
    setBoldElement(id);
  };

  return (
    <section className="list-container">
      {Object.keys(data).length === 0 ? (
        <Grid className="mt-5">
          <Loading color="secondary" textColor="secondary">
            Please wait
          </Loading>
        </Grid>
      ) : (
        <section className="todo-list py-5">
          <Grid.Container justify="center" className="p-0">
            {data
              ?.filter((todo) => todo.text.includes(searchText))
              .map((todo) => {
                const { text, _id, time, date, statusColor } = todo;
                return (
                  <Grid key={_id}>
                    <Card
                      css={{ m: "$8", mw: "280px", h: "15rem" }}
                      style={{ backgroundColor: `${statusColor}` }}
                    >
                      <Card.Header>
                        <Avatar
                          size="lg"
                          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                          color="gradient"
                          bordered
                        />
                        <Grid.Container css={{ pl: "$6" }}>
                          <Grid xs={12}>
                            <Text h4 css={{ lineHeight: "$xs" }}>
                              practice english
                            </Text>
                          </Grid>
                          <Grid xs={12}>
                            <Text css={{ color: "$accents8" }}>user</Text>
                          </Grid>
                        </Grid.Container>
                      </Card.Header>
                      <Card.Body css={{ py: "$2" }}>
                        <Text>
                          {_id === boldElement && isBold === true ? (
                            <b>{text}</b>
                          ) : (
                            text
                          )}
                        </Text>
                      </Card.Body>
                      <Card.Footer
                        css={{
                          bgBlur: "#0f111466",
                          borderTop: "$borderWeights$light solid $gray800",
                          zIndex: 1,
                          h: "4rem",
                        }}
                      >
                        <Col>
                          <span className="todo-btns">
                            <DeleteTodo todoId={_id} />
                            <UpdateTodo todoId={_id} text={text} />
                            <button
                              className="star-icon"
                              onClick={() => starHandler(_id)}
                            >
                              <AiFillStar />
                            </button>
                          </span>
                        </Col>
                        <Col>
                          {time !== null && (
                            <Timer
                              timeValue={time}
                              dateValue={date}
                              todoId={_id}
                              colorHandler={statusColor}
                            />
                          )}
                        </Col>
                      </Card.Footer>
                    </Card>
                  </Grid>
                );
              })}
          </Grid.Container>
        </section>
      )}
    </section>
  );
};

export default TodoList;
