import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('https://ukifunwork2by-sajeev.herokuapp.com/delete-student/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.age}</td>
                <td>{this.props.obj.city}</td>
                <td>{this.props.obj.mobile}</td>

                <td>
                    <Link className="edit-link b1" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button className="b2" onClick={this.deleteStudent} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}