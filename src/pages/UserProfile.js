import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { fetchData } from "../utils/helpers";

const StyledList = styled.ul`
  padding-left: 0;
  > li {
    list-style: none;
  }
`;
const CompanyInfo = styled(MDBCardText)`
  margin-bottom: 10px !important;
`;
const StyledCard = styled(Card)`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const StyledAvatarImage = styled(MDBCardImage)`
width: 140px; 
`
const StyledCardImage = styled(MDBCardImage)`
width: 90px; 
`
function UserProfile() {
  const { id } = useParams();
  const [users, setUsers] = useState({});
  const [photos, setPhotos] = useState({});

  useEffect(() => {
    const fetchAll = async () => {
      const userData = await fetchData(`/users/${id}`);
      setUsers(userData);
      const photosData = await fetchData(`/photos/${id}`);
      setPhotos(photosData);
    };
    fetchAll();
  }, [id]);

  return (
    <div>
      <section>
        <Container className="py-5">
          <Row>
            <Col lg="4">
              <Card>
                <MDBCardBody className="text-center">
                  <div className="mt-3 mb-4">
                    <StyledAvatarImage
                      src={photos.thumbnailUrl}
                      alt="avatar"
                      className="rounded-circle"
                      fluid
                    />
                  </div>
                  <MDBTypography tag="h4">@{users.username}</MDBTypography>
                  <MDBCardText className="text-muted mb-4">
                    {photos.title}
                  </MDBCardText>
                  <MDBCardText>Company: {users?.company?.name}</MDBCardText>
                  <MDBCardText>City: {users?.address?.city}</MDBCardText>
                </MDBCardBody>
              </Card>

              <StyledCard>
                <Card.Body>
                  <Col>
                    <CompanyInfo>Company information</CompanyInfo>
                  </Col>
                  <Col>
                    <div className="text-muted">
                      <StyledList>
                        <li>
                          <strong>Name: </strong> {users?.company?.name}
                        </li>
                        <li>
                          <strong>Bussiness: </strong> {users?.company?.bs}
                        </li>
                        <li>
                          <strong>Catch phrase: </strong>{" "}
                          {users?.company?.catchPhrase}
                        </li>
                      </StyledList>
                    </div>
                  </Col>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <Row>
                    <Col sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </Col>
                    <Col sm="9">
                      <MDBCardText className="text-muted">
                        {users.name}
                      </MDBCardText>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm="3">
                      <MDBCardText>UserName</MDBCardText>
                    </Col>
                    <Col sm="9">
                      <MDBCardText className="text-muted">
                        {users.username}
                      </MDBCardText>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </Col>
                    <Col sm="9">
                      <MDBCardText className="text-muted">
                        {users.email}
                      </MDBCardText>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </Col>
                    <Col sm="9">
                      <MDBCardText className="text-muted">
                        {users.phone}
                      </MDBCardText>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm="3">
                      <MDBCardText>Website</MDBCardText>
                    </Col>
                    <Col sm="9">
                      <Link to={users.website}>{users.website}</Link>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </Col>
                    <Col sm="9">
                      <MDBCardText className="text-muted">
                        <StyledList>
                          <li>
                            {users?.address?.street}, {users?.address?.suite}
                          </li>
                          <li>
                            {users?.address?.zipcode}, {users?.address?.city}
                          </li>
                        </StyledList>
                      </MDBCardText>
                    </Col>
                  </Row>
                  <hr />
                  <StyledCardImage
                    src={photos.url}
                    alt="avatar"
                    fluid
                  />
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default UserProfile;
