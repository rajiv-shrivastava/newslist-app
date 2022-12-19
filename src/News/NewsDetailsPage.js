import React,{useState} from "react";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'
import {Card,Button} from 'react-bootstrap';


function NewsDetailsPage(props) {
    console.log("id is",props)
    const location = useLocation()
    const data = location.state
    const [news,SetNews] =useState(data)

    console.log("from",data)

    return(
    <>
        <div><Link to="/"> <Button variant="primary"> Go to Home Page </Button></Link> </div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={news.fields.thumbnail} />
      <Card.Body>
        <Card.Title>{news.webTitle}</Card.Title>
        <Card.Text>
          {news.webTitle}
        </Card.Text>
        <a target="_blank" href={data.webUrl}> <Button variant="primary">Full Story</Button></a>        
      </Card.Body>
    </Card>
    </>
 )
}
 
  

export default NewsDetailsPage;