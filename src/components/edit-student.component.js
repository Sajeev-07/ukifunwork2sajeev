import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class EditStudent extends Component {

  constructor(props) {
    super(props)

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
    this.onChangeStudentCity = this.onChangeStudentCity.bind(this);
    this.onChangeStudentMobile = this.onChangeStudentMobile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      age: '',
      city: '',
      mobile: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name:this.state.name,
          email:this.state.email,
          age:this.state.age,
          city:this.state.city,
          mobile:this.state.mobile
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentAge(e) {
    this.setState({ age: e.target.value })
  }

  onChangeStudentCity(e) {
    this.setState({ city: e.target.value })
  }

  onChangeStudentMobile(e) {
    this.setState({ mobile: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name:this.state.name,
          email:this.state.email,
          age:this.state.age,
          city:this.state.city,
          mobile:this.state.mobile
    };

    axios.put('http://localhost:4000/students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/student-list')
  }


  render() {
    return (<div   className="form-wrapper t1" style={{
      backgroundColor: 'white'
    }}>
     <Container className="fluid">
  <Row>
    <Col sm={6}>
     <Form onSubmit={this.onSubmit} className=" bg-white text-dark t1" >
        <Form.Group controlId="Name" >
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Age:</Form.Label>
          <Form.Control type="text" value={this.state.age} onChange={this.onChangeStudentAge} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>City:</Form.Label>
          <Form.Control type="text" value={this.state.city} onChange={this.onChangeStudentCity} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Mobile:</Form.Label>
          <Form.Control type="text" value={this.state.mobile} onChange={this.onChangeStudentMobile} />
        </Form.Group>

        <Button variant="dark" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
      </Col>

    <Col sm={6} className="co1">
    <Image src="https://media.istockphoto.com/vectors/group-of-pupils-vector-school-mix-race-chat-bubbles-communication-vector-id1020464650?k=6&m=1020464650&s=170667a&w=0&h=oKsVZ98s0HI6N5eF0r11_cSWrMLVyQrjJyK4UQFeX3I=" />
    </Col>
  </Row>
 
</Container>
    </div>);
  }
}
