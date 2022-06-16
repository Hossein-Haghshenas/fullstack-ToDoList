import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { MdEdit } from "react-icons/md";
import { updateTodos } from "../api/todoApi";

const UpdateTodo = ({ todoId, text }) => {
  const navigate = useNavigate();
  const [newTodo, setNewTodo] = useState(text);
  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);

  // close modal function

  const closeHandler = () => {
    setVisible(false);
    setNewTodo(text);
  };

  // update todo and send to the database function

  const editHandler = (id) => {
    const addNewTodo = {
      text: newTodo,
    };
    updateTodos(id, addNewTodo, navigate);
    closeHandler();
  };

  return (
    <div>
      <button className="edit-icon">
        <MdEdit onClick={handler} />
      </button>

      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            My TodoList App
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            underlined
            clearable
            fullWidth
            color="secondary"
            size="lg"
            placeholder="NewTodo"
            aria-label="NewTodo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button
            type="submit"
            color="secondary"
            auto
            onClick={() => editHandler(todoId)}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateTodo;
