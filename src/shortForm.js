import React from "react";
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";
import Logo from "./téléchargement.png";

class ShortForm extends React.Component {
  state = {
    name: "",
    subject: "",
    date: "",
  };

  setName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  setDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  setSubject = (event) => {
    this.setState({
      subject: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, date } = this.state;

    alert(`Appointment created for ${name} 
        on ${date}`);
  };

  render() {
    const { name, subject, date } = this.state;

    return (
      <>
        <br />
        <Container>
          <Row>
            <Col md={{ span: 7, offset: 3 }}>
              <Jumbotron>
                <img src={Logo} alt="zenva" width={300} />
                <p>
                theses courses are the less difficult ones .
                only for the people who are sure to excel in litterature ,languages or history
                </p>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <h2>STUDIES INFORMATION</h2>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="input"
                      value={name}
                      placeholder="Name"
                      onChange={this.setName}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBirth">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridSubject">
                      <Form.Label>Subjects</Form.Label>
                      <Form.Control
                        as="select"
                        value={subject}
                        onChange={this.setSubject}
                      >
                        <option>Choose...</option>
                        <option>English</option>
                        <option>french</option>
                        <option>history</option>
                        <option>phylosophie</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridDegree">
                      <Form.Label>Degree</Form.Label>
                      <Form.Control placeholder="EnterDegree" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridSex">
                      <Form.Label>Sex</Form.Label>
                      <Form.Check
                        type="radio"
                        label="Male"
                        name="formHoriRadios"
                        ids="formHoriRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="Female"
                        name="formHoriRadios"
                        ids="formHoriRadios1"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAltered">
                      <Form.Label>Altered</Form.Label>
                      <Form.Check
                        type="radio"
                        label="Yes"
                        name="formHoriRadios2"
                        ids="formHoriRadios2"
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        name="formHoriRadios2"
                        ids="formHoriRadios2"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group>
                    <Form.Label>
                    why should we take you with us ,do you have questions or a request ?
                    </Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Schedule Appointment</Form.Label>
                    <Form.Control
                      type="date"
                      value={date}
                      onChange={this.setDate}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ShortForm;
