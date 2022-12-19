import React from 'react';
import {Link} from 'react-router-dom'
import {Row,Col,Card,Button} from 'react-bootstrap';

const HomePage = (props) => {
    
    console.log(props.children)
    return(
      <div className="container-fluid">
         <h1 className="text-center"> Home Page component</h1>
         <hr />
          <Row> 
            <Col md={3}>               
              <Card style={{ height: '12rem',margin: '0px 0px 20px 0px' }} >
                <Card.Body>
                  <Card.Title>UseEffect</Card.Title>
                  <Card.Text>
                    Various variation of UseEffect
                  </Card.Text>
                  <Link to="/useeffecttypes">
                  <Button variant="primary">    
                    View
                  </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>               
             <Card style={{ height: '12rem',margin: '0px 0px 20px 0px' }} >
                <Card.Body>
                  <Card.Title>Axios with debounce</Card.Title>
                  <Card.Text>
                    A simple http call with axios http using input debounce
                  </Card.Text>
                  <Link to="/axiosdebounce"><Button variant="danger">View</Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>               
             <Card style={{ height: '12rem',margin: '0px 0px 20px 0px' }} >
                <Card.Body>
                  <Card.Title>React Higher Order Component</Card.Title>
                  <Card.Text>
                    A simple example of HOC where some additional custom props are added via HOC
                  </Card.Text>
                  <Link to="/higherordercomponent">
                     <Button variant="warning">View</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
      
            <Col md={3}>               
             <Card style={{ height: '12rem',margin: '0px 0px 20px 0px' }} >
                <Card.Body>
                  <Card.Title>React Router Private Route Demo</Card.Title>
                  <Card.Text>
                    A simple NoAuthPage component to demstrate private route
                  </Card.Text>
                  <Link to="/noauthpage"> 
                  <Button variant="success">View</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>               
             <Card style={{ height: '12rem',margin: '0px 0px 20px 0px' }} >
                <Card.Body>
                  <Card.Title>React Jest</Card.Title>
                  <Card.Text>
                   A simple Login Page component where all test cases are written via Jest
                  </Card.Text>
                  <Link to="/login"><Button variant="secondary">View</Button></Link>
                </Card.Body>
              </Card>                 
            </Col>
            <Col md={3}>               
             <Card style={{ height: '12rem',margin: '0px 0px 20px 0px' }} >
                <Card.Body>
                  <Card.Title>useMemo</Card.Title>
                  <Card.Text>
                   A component where data array is passed as an prop to show Memoization via useMemo
                  </Card.Text>
                  <Link to="/usememoeg"><Button variant="info">View</Button></Link>
                </Card.Body>
              </Card>                 
            </Col>
          </Row>
        </div>
    )
}

export default HomePage