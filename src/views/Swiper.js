import React, { Component } from 'react'
import { Card, Button, ListGroup, ListGroupItem, Carousel } from 'react-bootstrap';
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
    console.log(response);
    if (response[0]) {
      if (response[0].id) {
        Swal.fire({
          title: "Success!",
          type: "success",
          showConfirmButton: false,
          timer: 100
        }).then(logout => {
          if (logout.value) {
            this.setState({ render: true })
          }
        });
      } else {
        Swal.fire({
          title: "No Item",
          type: "error",
          text: "Please scan again!"
        }).then(a => { window.location.href = "/" })
      }
    } else {
      Swal.fire({
        title: "No Item",
        type: "error",
        text: "Please scan again!"
      }).then(a => { window.location.href = "/" })
    }
  }

  getCards() {
    if (this.state.render) {

    }
  }

  getValue(val) {
    if (val == 0) {
      return (Math.floor(Math.random() * 545))
    } else {
      return (val)
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
    if (this.state.render) {
      return (
        <Carousel>
          {this.state.results.map((val, idx) => {
            console.log(val)
            return (
              <Carousel.Item>
                <center>
                  <Card style={{ width: '25rem' }}>
                    <Card.Img class="img-thumbnail" variant="top" src={val.image} />
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
                      <Button variant="info" disabled>{this.getValue(val.price) + " PLN"}</Button>
                    </Card.Body>
                  </Card>
                </center>
              </Carousel.Item>
            )
          })}
        </Carousel>
      )
    } else {
      return false;
    }
  }
}


