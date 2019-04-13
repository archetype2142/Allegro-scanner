import React from 'react';
import Quagga from 'quagga';


class Scanner extends React.Component {
    
    Detect = (result) => {
        this.props.onDetected(result);     
    };


    componentDidMount() {
        
        Quagga.init({
            inputStream: {
                type : "LiveStream",
                constraints: {
                    width: 320,
                    height: 240,
                    facingMode: "environment" // or user
                },
                area: { // defines rectangle of the detection/localization area
                    top: "40%",    // top offset
                    right: "5%",  // right offset
                    left: "5%",   // left offset
                    bottom: "40%"  // bottom offset
                }
            },
            numOfWorkers: 0,
            locate: false,
            decoder: {
                readers : [ "code_128_reader" ],
                multiple: false }}, (err) => {
                    if (err) {
                    return console.log(err);
                }
                Quagga.start();
                console.log("Initialization finished. Ready to start");
            }
        );
        Quagga.onDetected(this.Detect);
    }

    componentWillUnmount() {
        Quagga.offDetected(this.Detect);
        Quagga.stop();
    }
    
    render() {
        return (
            <div className="flex justify-center w-100">
                <div id="interactive" className="viewport">
                    <div id="box" />
                    <div id="line" />
                </div>
            </div>    
        )
    } 
}

export default Scanner;