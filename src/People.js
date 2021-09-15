import React, { Fragment, useEffect } from "react";
import uniqid from "uniqid";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;

function People({ records }) {
  return (
    <Fragment>
      <Title>Contact List</Title>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((user) => (
            <tr key={uniqid()}>
              <td> {user.firstName}</td>
              <td> {user.lastName}</td>
              <td> {user.phone}</td>
              <td> {user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default People;
