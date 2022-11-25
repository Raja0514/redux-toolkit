import "./App.css";
import Counter from "./components/Counter";
import Employee from "./components/Employee";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Userlist from "./components/Userlist";
import CounterRedux from "./components/CounterRedux";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/redux" element={<CounterRedux/>}/>
      </Routes>
    </>
  );
}

export default App;
