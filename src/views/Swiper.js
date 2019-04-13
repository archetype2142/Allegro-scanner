import React, { Component } from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';

export default class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
      results: []
    };
    this.cookies = new Cookies()
    this.getCards = this.getCards.bind(this)
  }

  componentWillMount() {
    var token = this.cookies.get('Access-Token')
    var client = this.cookies.get('Client')
    var uid = this.cookies.get('Uid')
    var expiry = this.cookies.get('Expiry')

    const requestData = {
      method: "GET",
      headers: { 'Access-Token': token, 'Client': client, 'Uid': uid, 'Expiry': expiry }
    };

    fetch("https://tardis-back.herokuapp.com/barcodes", requestData)
      // fetch("http://localhost:8000/api/movie/")
      .then(res => res.json())
      .then(data => this.fetchData(data.id))

  }

  async fetchData(id) {
    Swal.fire({
      title: "Getting Data",
      showCancelButton: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });

    var token = this.cookies.get('Access-Token')
    var client = this.cookies.get('Client')
    var uid = this.cookies.get('Uid')
    var expiry = this.cookies.get('Expiry')

    const requestData = {
      method: "GET",
      headers: { 'Access-Token': token, 'Client': client, 'Uid': uid, 'Expiry': expiry }
    };
    const request = await fetch(
      "https://tardis-back.herokuapp.com/barcodes/" + id + "/results",
      requestData
    );
    const response = await request.json();
    this.setState({ results: response })
    console.log(response[0]);

    if (response[0].id) {
      Swal.fire({
        title: "Success!",
        type: "success"
      }).then(logout => {
        if (logout.value) {
          this.setState({ render: true })
        }
      });
    } else {
      Swal.fire({
        title: "Failure!",
        type: "error",
        text: "Please try again :("
      });
    }
  }

  getCards() {
    if (this.state.render) {

    }
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
    if (this.state.render) {
      return (
        <div>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
            {/* <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol> */}
            <div class="carousel-inner" >
              {this.state.results.map((val, idx) => {
                console.log(val)
                return (
                  <div class="carousel-item">
                    {/* <img class="d-block w-100" src="https://d-art.ppstatic.pl/kadry/k/r/1/fa/06/5b6d63eb9d14d_o_full.jpg" alt="First slide" style={{ height:"500px" }} /> */}
                    <center>
                      <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={val.image} style={{ height: "500px" }} />
                        <Card.Body>
                          <Card.Title className="text-left">{val.name}</Card.Title>
                          <ListGroup className="list-group-flush">
                            <ListGroupItem className="text-left"><i className="fa fa-star"></i>Cras justo odio</ListGroupItem>
                            <ListGroupItem className="text-left">Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem className="text-left">Some quick example text to build on the card title and make up the bulk of
                                  the card's content.</ListGroupItem>
                          </ListGroup>
                          <Card.Text>

                          </Card.Text>
                          <Button variant="info" disabled>{val.price + " PLN"}</Button>
                        </Card.Body>
                      </Card>
                    </center>
                  </div>
                )
              })}
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
    } else {
      return false;
    }
  }
}


