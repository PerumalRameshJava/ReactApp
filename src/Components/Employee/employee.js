import React, { Fragment, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";
import { connect } from "react-redux";
import { getEmployeeDetails } from "../../actions/employeeActions";
import PropTypes from "prop-types";

const Employee = ({ getEmployeeDetails, employeeDetails }) => {
  const [state, setstate] = useState({
    employeeId: "",
  });

  const { employeeId } = state;
  console.log("employeeDetails ", employeeDetails);

  const onChange = (e) => {
    const { name, value } = e.target;
    setstate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("inside 1");
    getEmployeeDetails(employeeId);
  };
  let count = 0;
  return (
    <Fragment>
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "40%",
        }}
      >
        <Form inline onSubmit={onSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="searchEmployeeId" className="mr-sm-2">
              Employee Id
            </Label>
            <Input
              type="text"
              name="employeeId"
              id="employeeId"
              onChange={onChange}
              placeholder="Enter Employee Id"
            />
          </FormGroup>
          <Button type="submit">Search</Button>
        </Form>
      </div>
      <hr style={{ marginTop: "35px" }} />
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {employeeDetails.map((employeeDet) => {
              count++;
              return (
                <tr>
                  <th scope="row">{count}</th>
                  <td>{employeeDet.first_name}</td>
                  <td>{employeeDet.last_name}</td>
                  <td>{employeeDet.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

Employee.propTypes = {
  getEmployeeDetails: PropTypes.func.isRequired,
  employeeDetails: PropTypes.array,
};

const mapStateToProps = (state) => ({
  employeeDetails: state.EmployeeReducer,
});

export default connect(mapStateToProps, { getEmployeeDetails })(Employee);
