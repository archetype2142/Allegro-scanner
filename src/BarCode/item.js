import React from 'react';

const Item = (props) => {
  
    const result = props.result;
    
    return (
        <div className="flex justify-ceter flex-wrap w-100">  
          <p className="mh5 w-100 mv1">Item:</p>
          <div className="mh5 mb2 ba w-100">
            <p className="tc mv1" id="item">{!result ? 'no results yet' : result}</p>
          </div>
        </div>     
      )
}


export default Item;