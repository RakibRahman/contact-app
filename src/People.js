import React, { Fragment, useEffect } from "react";
import uniqid from "uniqid";
import styled from "styled-components";

const Table = styled.table`
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;
const TheadTr = styled.tr`
  height: 60px;
  background: #ffed86;
  font-size: 16px;
`;
const TbodyTr = styled.tr`
  height: 48px;
  border-bottom: 1px solid #e3f1d5;
`;
const Title = styled.h1`
  text-align: center;
  margin: 1rem 0;
`;
function People({ records }) {
  return (
    <Fragment>
      <Title>Contact List</Title>

      <Table>
        <thead>
          <TheadTr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </TheadTr>
        </thead>
        <tbody>
          {records.map((user) => (
            <TbodyTr key={uniqid()}>
              <td> {user.firstName}</td>
              <td> {user.lastName}</td>
              <td> {user.phone}</td>
              <td> {user.email}</td>
            </TbodyTr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default People;
