import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { fetchData } from "../utils/helpers";

const StyledButton = styled(Button)`
  background: linear-gradient(to bottom, #003366 4%, #003399 134%);
  border: none;
  font-weight: 800;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
const StyledRow = styled(Row)`
  margin-top: 20px;
`;
const StyledCardImage = styled(MDBCardImage)`
  width: 100px;
`;

function UserprofileList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchData(`/users`);
      setUsers(users);
    };
    getUsers();
  }, []);

  return (
    <Container>
      <StyledRow className="row-cols-1 row-cols-md-3 g-4">
        {users.map((user) => {
          return (
            <Col key={user.id}>
              <MDBCard>
                <MDBCardBody className="text-center">
                  <div className="mt-3 mb-4">
                    <StyledCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded-circle"
                      fluid
                    />
                  </div>
                  <MDBTypography tag="h4">{user.name}</MDBTypography>
                  <MDBCardText className="text-muted mb-4">
                    @{user.username} <span className="mx-2">|</span>{" "}
                    <a href="#!">{user.website}</a>
                  </MDBCardText>
                  <MDBCardText>Phone: {user.phone}</MDBCardText>
                  <MDBCardText>Email: {user.email}</MDBCardText>
                  <MDBCardText>Address: {user.address.city}</MDBCardText>
                  <StyledButton>
                    <StyledLink
                      key={user.id}
                      to={`/profile/${user.id}`}
                    >
                      See user details
                    </StyledLink>
                  </StyledButton>
                </MDBCardBody>
              </MDBCard>
            </Col>
          );
        })}
      </StyledRow>
    </Container>
  );
}

export default UserprofileList;
