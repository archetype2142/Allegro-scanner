import React from 'react';

const Order = (props) => {
  
    const result = props.result;


    return (
      <div className="flex justify-ceter flex-wrap w-100">  
        <p className="mh5 w-100 mv1">Order:</p>
        <div className="mh5 ba mb2 w-100">
          <p className="tc mv1" id="order">{!result ? 'no results yet' : result}</p>
        </div>
      </div>     
    )
}


export default Order;