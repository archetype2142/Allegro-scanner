import React from 'react';
import Scanner from './scanner';
import Order from './order';
import Item from './item';
// import './App.css';
// import mp3file from './Notify.mp3'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      results: [],
      order: '',
      item: ''
    }
  }
  
  scan = () => {
    this.setState({ scanning: !this.state.scanning });
    console.log(this.state.scanning)
  }

  _onDetected = (result) => {
    const _result = result.codeResult.code;
    this.setState({ results: _result });
    
    if (_result.length === 5) {
      if (_result.split('').every(x => /[0-9]/.test(x))) {
        this.setState({ item: _result })
        document.getElementById("item").style.color = "green";
      }
      else {
        this.setState({ item: _result })
        document.getElementById("item").style.color = "red";
        window.navigator.vibrate(200);
        document.getElementById("warningSnd").play();
      }  
    }
    else if (_result.length === 8) {
      if (_result.split('').every(x => /[0-9]/.test(x) || /[A-Z]/.test(x))) {
        this.setState({ order: _result })
        document.getElementById("order").style.color = "green";
      }
      else {
        this.setState({ order: _result });
        document.getElementById("order").style.color = "red";
        window.navigator.vibrate(200);
        document.getElementById("warningSnd").play();
      }   
    }
    else {
      this.setState({ order: _result });
      document.getElementById("order").style.color = "red";
      window.navigator.vibrate(200);
      document.getElementById("warningSnd").play();
    }  
    
    this.scan();    
  }

  render() {
    return (
      <div>
        {this.state.scanning ? <Scanner onDetected={this._onDetected} /> : null}
        <Order result={this.state.order} />
        <Item result={this.state.item} />
        <div className="flex justify-center pa2">
          <button className="f5 fw6 bg-white pa2 tc" onClick={this.scan}>{!this.state.scanning ? "Start" : "Stop"}</button>
        </div>
        <audio id="warningSnd" src={mp3file} preload="auto" type="audio/mp3"></audio>
      </div>
    )
  }

}

export default Main;