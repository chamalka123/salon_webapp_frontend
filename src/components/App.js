import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../views/Home/Home";
import Admin from "../views/adminPanel/adminPanel";
import MyAccount from "../views/myAccount/myAccount";
import Expenses from "../views/Expenses/Expenses";
import Payment from "../views/Payment/Payment";

function App(){
    return(
        <div>
            <Router>
                < Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />   
                        </Route>
                        <Route exact path="/myAccount">
                            <MyAccount />
                        </Route>
                        <Route exact path="/adminPanel">
                            <Admin />
                        </Route>
                        <Route exact path="/Expenses">
                            <Expenses />
                        </Route>
                        <Route exact path="/Payment">
                            <Payment />
                        </Route>
                    </Switch>
            </Router>
            < Footer />  
        </div>);
}
export default App;