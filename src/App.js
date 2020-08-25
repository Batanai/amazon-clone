import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Checkout from "./checkout/Checkout";
import Login from "./login/Login";
import { useStateValue } from "./state/StateProvider";
import { auth } from "./login/firebase/firebase";

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }else{
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {
      //any clean up
      unsubscribe();
    }

  }, []);

  console.log(user)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Navbar/>
            <Checkout/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/'>
            <Navbar/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
