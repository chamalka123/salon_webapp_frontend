import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonAppBar from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../views/Home/Home";
import Admin from "../views/adminPanel/adminPanel";
import MyAccount from "../views/myAccount/myAccount";
import Expenses from "../views/Expenses/Expenses";
import Payment from "../views/Payment/Payment";
import AddExpenses from "../views/Expenses/AddExpenses";

import Service from "../views/Service/Services/Service";
import AddService from "../views/Service/AddService/AddService";
import SingleItem from "../views/Service/SingleItem/SingleItem";
import UpdateService from "../views/Service/UpdateService/UpdateService";

import EditExpenses from "../views/Expenses/EditExpenses";
import AddPayment from "../views/Payment/AddPayment";



function App() {
  return (
    <div>
      <Router>
        <ButtonAppBar />
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
          <Route exact path="/AddExpense">
            <AddExpenses />
            </Route>
            <Route exact path="/AddPayment">
            <AddPayment />
          </Route>
          <Route exact path="/EditExpense/:id">
            <EditExpenses />
          </Route>
          <Route exact path="/Service">
            <Service />
          </Route>
          <Route exact path="/AddService">
            <AddService />
          </Route>
          <Route path="/salon/item/:id" exact component={SingleItem}/>
          <Route path="/salon/item/update/:id" exact component={UpdateService}>
            </Route>
        </Switch>
      </Router>
  
    </div>
  );
}
export default App;
