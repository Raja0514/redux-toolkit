
import { useState } from "react";


const Counter = () => {

//usestate

  let [state, setState] = useState({
    count: 0,
  });



  
  //function1

  let Increment = () => {
    setState({
      count: state.count + 1,
    });
  };


//functon2

  let decrement = () => {
    setState({
      count: state.count - 1,
    });
  };

  //function3

  let decrementby = () => {
    setState({
      count: state.count + 5,
    });
  };

//rendering 

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <p className="h3 display-3">{state.count}</p>
                <button onClick={Increment} className="btn btn-primary m-1">
                  Increment
                </button>
                <button onClick={decrement} className="btn btn-danger m-1">
                  Decrement
                </button>
                <button onClick={decrementby} className="btn btn-success m-1">
                  Increment by 5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
