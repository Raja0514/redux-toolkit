import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, incrementby5 } from "../redux/features/counter";

const CounterRedux = () => {
  let dispacth = useDispatch();

  //useselector internally have a function to access global state

  //get data from redux store

  let counterstate = useSelector((state) => {
    return state["counter"];
  });

  let { count } = counterstate;

  let Increment = () => {
    dispacth(increment());
  };

  let sdecrement = () => {
    dispacth(decrement());
  };

  let decrementby = () => {
    dispacth(incrementby5(20));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <p className="h3 display-3">{count}</p>
                <button onClick={Increment} className="btn btn-primary m-1">
                  Increment
                </button>
                <button onClick={sdecrement} className="btn btn-danger m-1">
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

export default CounterRedux;
