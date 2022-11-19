import { useEffect, useState } from "react";
import { Alert, Col, Container, Form, InputGroup, Row, Button } from "react-bootstrap";

function App() {
	const emptyData = { a: 0, b: 0, c: 0 };
	const testData = { a: 21.6, b: 15.4, c: 28.7 };

	const defaultState = emptyData;

	const [data, setData] = useState(defaultState);
	const [area, setArea] = useState(0);

	useEffect(() => {
		if (data.a && data.b && data.c) {
			const a = parseFloat(data.a);
			const b = parseFloat(data.b);
			const c = parseFloat(data.c);
			const p = (a + b + c) / 2;
			const interimResult = p * (p - a) * (p - b) * (p - c);
			if (interimResult > 0) {
				setArea(Math.sqrt(interimResult));
			} else {
				setArea("Invalid Triangle Sides");
			}
			log({ data, p });
		}
	}, [data.a, data.b, data.c]);

	const handleDataInputChange = (event) => {
		setData({ ...data, [event.target.id]: parseFloat(event.target.value) });
	};

	const handleReset = () => {
		setData(defaultState);
		setArea(0);
	};

	const log = (msg) => {
		console.log(msg);
	};

	return (
		<>
			<Container>
				<Alert className="my-3">
					<Row>
						{area === 0 && (
							<Col className="col-md-9">
								Enter all three sides to calculate the Area
							</Col>
						)}
						{area > 0 && <Col className="col-md-9">Area = {area}</Col>}
						<Col className="col-md-3">
							<Button onClick={handleReset} variant="warning">
								Reset
							</Button>
						</Col>
					</Row>
				</Alert>
				<InputGroup className="my-3">
					<InputGroup.Text id="basic-addon1">Side a</InputGroup.Text>
					<Form.Control
						placeholder="Length of Side a"
						aria-label="Length of Side a"
						aria-describedby="basic-addon1"
						id="a"
						type="number"
						value={data.a}
						onChange={handleDataInputChange}
					/>
				</InputGroup>
				<InputGroup className="my-3">
					<InputGroup.Text id="basic-addon1">Side b</InputGroup.Text>
					<Form.Control
						placeholder="Length of Side b"
						aria-label="Length of Side b"
						aria-describedby="basic-addon1"
						id="b"
						type="number"
						value={data.b}
						onChange={handleDataInputChange}
					/>
				</InputGroup>
				<InputGroup className="my-3">
					<InputGroup.Text id="basic-addon1">Side c</InputGroup.Text>
					<Form.Control
						placeholder="Length of Side c"
						aria-label="Length of Side c"
						aria-describedby="basic-addon1"
						id="c"
						type="number"
						value={data.c}
						onChange={handleDataInputChange}
					/>
				</InputGroup>
			</Container>
		</>
	);
}

export default App;
