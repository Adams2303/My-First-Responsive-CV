import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Accordion,
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const Todo3 = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    name: "",
    description: "",
    deadline: "",
  });
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const result = await axios.get("/api/todos");
      setTodos(result.data);
    };
    fetchTodos();
  }, []);

  const handleNewTodoChange = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
  };

  const handleEditTodoChange = (event) => {
    setEditTodo({ ...editTodo, [event.target.name]: event.target.value });
  };

  const handleCreateTodo = async (event) => {
    event.preventDefault();
    const result = await axios.post("/api/todos", newTodo);
    setTodos([...todos, result.data]);
  };

  const handleUpdateTodo = async (id) => {
    const result = await axios.put(`/api/todos/${id}`, editTodo);
    setTodos(todos.map((todo) => (todo.id === id ? result.data : todo)));
    setEditTodo(null);
  };

  const handleDeleteTodo = async (id) => {
    await axios.delete(`/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todos</h1>
      <Form onSubmit={handleCreateTodo}>
        <InputGroup className='mb-3'>
          <FormControl
            name='name'
            placeholder='Todo Name'
            value={newTodo.name}
            onChange={handleNewTodoChange}
            required
          />
          <FormControl
            name='description'
            placeholder='Description'
            value={newTodo.description}
            onChange={handleNewTodoChange}
            required
          />
          <FormControl
            name='deadline'
            placeholder='Deadline'
            value={newTodo.deadline}
            onChange={handleNewTodoChange}
            required
          />
          <InputGroup.Append>
            <Button type='submit'>Create</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      {todos.map((todo) => (
        <Accordion key={todo.id}>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                {todo.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                <p>Description: {todo.description}</p>
                <p>Deadline: {todo.deadline}</p>
                {editTodo === todo ? (
                  <Form onSubmit={() => handleUpdateTodo(todo.id)}>
                    <InputGroup className='mb-3'>
                      <FormControl
                        name='name'
                        placeholder='Todo Name'
                        value={editTodo.name}
                        onChange={handleEditTodoChange}
                        required
                      />
                      <FormControl
                        name='description'
                        placeholder='Description'
                        value={editTodo.description}
                        onChange={handleEditTodoChange}
                        required
                      />
                      <FormControl
                        name='deadline'
                        placeholder='Deadline'
                        value={editTodo.deadline}
                        onChange={handleEditTodoChange}
                        required
                      />
                      <InputGroup.Append>
                        <Button type='submit'>Update</Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form>
                ) : (
                  <div>
                    <Button
                      variant='secondary'
                      onClick={() => setEditTodo(todo)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant='danger'
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </div>
  );
};

export default Todo3;
