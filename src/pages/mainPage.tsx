import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Container, Col, Row, Form, Button, InputGroup } from "react-bootstrap";

import { addTask } from "../slices/tasksReducer";

const MainPages = () => {
  const [inputValue, setInputValue] = useState("");

	const tacks = useAppSelector((state) => state.tasksList.tasks);
	const dispatch = useAppDispatch()
	console.log(tacks)
  return (
    <Container className="container-fluid heig-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col>
          <h1>TO-DO List</h1>
          <InputGroup>
						<Form.Control  onChange={(event) => setInputValue(event.target.value)}></Form.Control>
						<Button onClick={() => dispatch(addTask(inputValue))}>Add</Button>
					</InputGroup>
          {tacks.length !== 0 ?
						<ul>
							{tacks.map((task, index) => <li key={index} >{task}</li>)}
						</ul>
						: <></>
					}
        </Col>
      </Row>
    </Container>
  );
};

export default MainPages;
