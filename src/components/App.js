import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../views/Home/Home";
import Admin from "../views/adminPanel/adminPanel";

function App(){
    return(
        <div>
            <Router>
                < Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />   
                        </Route>
                        <Route exact path="/adminPanel">
                            <Admin />
                        </Route>
                    </Switch>
            </Router>
            < Footer />  
        </div>);
}
export default App;