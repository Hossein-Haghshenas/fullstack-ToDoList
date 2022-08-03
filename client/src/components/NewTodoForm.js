import { useRef, useState } from "react";
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Spacer,
} from "@nextui-org/react";

const NewTodoForm = ({ newTodo }) => {
  const timeInput = useRef(null);

  const [inputVisible, setInputVisible] = useState(false);
  const [newTodoText, setNewTodoText] = useState("");
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoTime, setNewTodoTime] = useState(0);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const timeInputHandler = (e) => {
    setInputVisible(e);
    inputVisible
      ? timeInput.current.setAttribute("disabled", "")
      : timeInput.current.removeAttribute("disabled", "");
  };

  const handleSubmit = () => {
    newTodoText !== "" && newTodoTitle !== ""
      ? newTodo(newTodoTitle, newTodoText, newTodoTime)
      : alert("Please enter something !");
    setNewTodoText("");
    setNewTodoTitle("");
    closeHandler();
  };

  const closeHandler = () => {
    setVisible(false);
    setNewTodoText("");
    setNewTodoTitle("");
    setNewTodoTime(0);
  };

  return (
    <>
      <Button
        className="create-todo-btn"
        auto
        ghost
        color="secondary"
        onClick={handler}
      >
        Create New Todo
      </Button>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              New Todo
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            aria-label="todo text"
            clearable
            bordered
            fullWidth
            color="secondary"
            size="lg"
            placeholder="Todo Text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <Input
            aria-label="todo Title"
            clearable
            bordered
            fullWidth
            color="secondary"
            size="lg"
            placeholder="Todo Title"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
          />
          <Row>
            <Input
              aria-label="todo item"
              bordered
              fullWidth
              color="secondary"
              size="lg"
              placeholder="How much minutes ?"
              type="number"
              ref={timeInput}
              disabled
              onInput={(e) => setNewTodoTime(e.target.value * 60)}
            />
            <Spacer x={0.5} />
            <Checkbox
              aria-label="disable time"
              color="gradient"
              className="mt-2"
              defaultSelected={false}
              onChange={(e) => timeInputHandler(e)}
            ></Checkbox>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onPress={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewTodoForm;
