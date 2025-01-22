import { useState } from "react";
import { Container, Col, Row, Form, Button, InputGroup } from "react-bootstrap";

const MainPages = () => {
  const [inputValue, setInputValue] = useState("");
	const [taskList, setTaskList] = useState<string []>([])


  return (
    <Container className="container-fluid heig-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col>
          <h1>TO-DO List</h1>
          <InputGroup>
						<Form.Control  onChange={(event) => setInputValue(event.target.value)}></Form.Control>
						<Button onClick={() => setTaskList([...taskList, inputValue])}>Add</Button>
					</InputGroup>
          {taskList.length !== 0 ?
						<ul>
							{taskList.map((task, index) => <li key={index} >{task}</li>)}
						</ul>
						: <></>
					}
        </Col>
      </Row>
    </Container>
  );
};

export default MainPages;
