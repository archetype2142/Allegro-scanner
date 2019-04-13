import React, { Component } from 'react'
import { Card,Button,ListGroup,ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

export default class Swiper extends Component {
 constructor(props){
   super(props);
   this.state={
    posts: []
   };
 }

 componentWillMount(){
  fetch("https://jsonplaceholder.typicode.com/posts")
  // fetch("http://localhost:8000/api/movie/")
    .then(res => res.json())
    .then(data => this.setState({posts:data}))
  
 }

//  async componentDidMount() {
//   const question = (await axios.get(`http://localhost:8000/api/movie/`)).data;
//   console.log(question)
//   this.setState({
//     question,
//   });
// }

  render() {
    // const {question} = this.state;

    // if (question === null) return <p>Loading ...</p>;
    // const postitem = this.state.posts.map(post =>(
    //   <div key = {post.id}>
    //   <h3 className="bg-success">{post.Title}</h3>
    //   <p>{post.body}</p>
    // </div>
    // ))

    return (
      <div>



       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
          {/* <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol> */}
        <div class="carousel-inner" >
            <div class="carousel-item active text-center">
              {/* <img class="d-block w-100" src="https://d-art.ppstatic.pl/kadry/k/r/1/fa/06/5b6d63eb9d14d_o_full.jpg" alt="First slide" style={{ height:"500px" }} /> */}
              <center>
              <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="https://d-art.ppstatic.pl/kadry/k/r/1/fa/06/5b6d63eb9d14d_o_full.jpg" style={{ height: "180px"}} />
                <Card.Body>
                  <Card.Title className="text-left">Card Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-left"><i className="fa fa-star"></i>Cras justo odio</ListGroupItem>
                    <ListGroupItem className="text-left">Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem className="text-left">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</ListGroupItem>
                  </ListGroup>
                  <Card.Text>
                    
                  </Card.Text>
                  <Button variant="info" >Go To Shop</Button>
                </Card.Body>
            </Card>
              </center>
            </div>
            <div class="carousel-item">
              {/* <img class="d-block w-100" src="http://udostepniane.pl/wp-content/uploads/2018/08/Jak-Ci-siem-podobam-Janusz1.jpg" alt="Second slide" style={{ height:"500px" }} /> */}
              <center>
              <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="http://udostepniane.pl/wp-content/uploads/2018/08/Jak-Ci-siem-podobam-Janusz1.jpg" style={{ height: "180px"}} />
                <Card.Body>
                  <Card.Title className="text-left">Card Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Some quick example text to build on the card title and make up the bulk of
                    the card's content.</ListGroupItem>
                  </ListGroup>
                  <Card.Text>
                    
                  </Card.Text>
                  <Button variant="info" >Go To Shop</Button>
                </Card.Body>
            </Card>
            </center>

            </div>
            <div class="carousel-item">
              {/* <img class="d-block w-100" src="http://paczaizm.pl/content/wp-content/uploads/gdy-start-kolejnej-rakiety-sprawia-ze-zapominasz-o-calej-zawisci-i-zazdrosci-wobec-sasiadow-typowy-polak-nosacz.jpg" alt="Third slide" style={{ height:"500px" }} /> */}
              <center>
              <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="http://paczaizm.pl/content/wp-content/uploads/gdy-start-kolejnej-rakiety-sprawia-ze-zapominasz-o-calej-zawisci-i-zazdrosci-wobec-sasiadow-typowy-polak-nosacz.jpg" style={{ height: "180px"}} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="info" >Go To Shop</Button>
                </Card.Body>
            </Card>
            </center>
            </div>
        </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>
      </div>
  

      {/* {this.state.posts.map( post =>
        <div key = {post.id}>
          <h3 className="text-success">.{post.title}</h3>
          <p>{post.body}</p>
      </div> 
)} */}

  </div>
    )
  }
}


