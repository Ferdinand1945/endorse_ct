import React from 'react'
import { Container, ListGroup, ListGroupItem,Row } from 'react-bootstrap'
import styled from 'styled-components'

const StyledRow = styled(Row)`
margin-top: 20px;
margin-bottom: 30px;
`
function Information() {
  return (
    <Container>
    <StyledRow>
      <h1>Info and description  </h1>
      <p>Just a basic react app with fetchs and param retrieve to show users and user information.</p>
      <ListGroup>     
        <ListGroupItem>
        <strong>Fetch:</strong> axios for multiple endpoints fetch</ListGroupItem>
        <ListGroupItem>
        <strong>Responsive framework:</strong> React bootstrap/ MDB react ui kit</ListGroupItem>
        <ListGroupItem>
        <strong>Retrive id:</strong> useParams</ListGroupItem>
        <ListGroupItem>
        <strong>Render functions:</strong> useEffect</ListGroupItem>
        <ListGroupItem>
        <strong>State managment:</strong> useState</ListGroupItem>
        <ListGroupItem>
        <strong>This project use:</strong> Hooks</ListGroupItem>
        <ListGroupItem>
        <strong>Css:</strong> (Css3) Some css is writen from scratch</ListGroupItem>
        <ListGroupItem>
        <strong>Styling:</strong> Styled components</ListGroupItem>
        <ListGroupItem>
        <strong>Icons:</strong> React Icons</ListGroupItem>
        <ListGroupItem>
        <strong>Test:</strong> Jest/ react library testing </ListGroupItem>
        <ListGroupItem>
        <strong>Room for improvements:</strong> 
        <ul>
          <li>Beadcrumbs: function to get uri with react router or useHistory</li>
          <li>Reusable Components: Separate every block in an individual component </li>
          <li>Test: Install Enzyme dependency some serious Jest testing</li>
          <li>Data: Use a separated useFetch hook to avoid repeating unnecesary useEffects</li>
        </ul> </ListGroupItem>
        <ListGroupItem>
        <strong>Total time included npm installs:</strong> Around 4 hs</ListGroupItem>
      </ListGroup>
    </StyledRow>
    </Container>
  )
}

export default Information