import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "../views/Home/Home";
import Signup from "../views/customer/signup";
import Admin from "../views/adminPanel/adminPanel";
import MyAccount from "../views/myAccount/myAccount";
import Expenses from "../views/Expenses/Expenses";
import Payment from "../views/Payment/Payment";
import AddExpenses from "../views/Expenses/AddExpenses";
import Feedback from "../views/Feedback/Feedback";
import AddFeedback from "../views/Feedback/AddFeedback";
import EditFeedback from "../views/Feedback/EditFeedback";

import Appointment from "../views/Appointment/Appointment";
import AddAppointment from "../views/Appointment/AddAppointment";
import EditAppointment from "../views/Appointment/EditAppointment";

import AllProduct from "../views/Product/AllProduct";
import AddProduct from "../views/Product/AddProduct";
import EditProduct from "../views/Product/EditProduct";
import EditExpenses from "../views/Expenses/EditExpenses";
import AddPayment from "../views/Payment/AddPayment";
import ProductPage from "../views/Product/ProductPage";
import SideDrawer from "./Header/SideDrawer";
import AdminLogin from "../views/AdminLogin/AdminLogin";
import BudgetPlans from "../views/BudgetPlans/BudgetPlans";
import Ledgers from "../views/Ledgers/Ledgers";
import Income from "../views/Income/Income";
import Navbar from "./Navbar/Navbar";



function App() {
  return (
    <div>
      <Router>
<<<<<<< HEAD
=======
        <SideDrawer />
>>>>>>> parent of 9014e97 (feedback and career portal management updated)
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
<<<<<<< HEAD
          <Route exact path="/">
            <CustomerLogin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
=======
>>>>>>> parent of 9014e97 (feedback and career portal management updated)
          <Route exact path="/admin-login">
            <AdminLogin />
          </Route>
          <Route exact path="/myAccount">
            <MyAccount />
          </Route>
          <Route exact path="/adminPanel">
            <Admin />
          </Route>
          <Route exact path="/Expenses">
            <Navbar />
            <Expenses />
          </Route>
          <Route exact path="/budgetPlans">
            <Navbar />
            <BudgetPlans />
          </Route>
          <Route exact path="/budgetPlans">
            <Income />
          </Route>
          <Route exact path="/ledgers">
            <Ledgers />
          </Route>
          <Route exact path="/Payment">
            <Payment />
          </Route>
          <Route exact path="/AddExpense">
            <AddExpenses />
          </Route>

          <Route exact path="/Feedback">
            <Feedback />
          </Route>
          <Route exact path="/AddFeedback">
            <AddFeedback />
          </Route>
          <Route exact path="/EditFeedback/:id">
            <EditFeedback />
          </Route>


          <Route exact path="/Appointment">
            <Appointment />
          </Route>
          <Route exact path="/AddAppointment">
            <AddAppointment />
          </Route>
          <Route exact path="/EditAppointment/:id">
            <EditAppointment />
          </Route>

          <Route exact path="/AddPayment">
            <AddPayment />
          </Route>
          <Route exact path="/EditExpense/:id">
            <EditExpenses />
          </Route>
<<<<<<< HEAD
          <Route exact path="/ledger/:id">
            <EditLedgerNote />
          </Route>
          <Route exact path="/Service">
            <Service />
          </Route>
          <Route exact path="/AddService">
            <AddService />
          </Route>
          <Route path="/salon/item/:id" exact component={SingleItem} />
          <Route
            path="/salon/item/update/:id"
            exact
            component={UpdateService}
          ></Route>
          <Route exact path="/CustomerView">
            <CustomerView />
          </Route>
          <Route path="/salons/item/:id" exact component={CustomerSingleItem}/>   
          <Route path="/salons/item/:id" exact component={CustomerSingleItem}/>
          <Route exact path="/DetailsPage">
            <DetailsPage />
          </Route>
          <Route exact path="/AddReport">
            <AddReport />
          </Route>
          
=======
>>>>>>> parent of 9014e97 (feedback and career portal management updated)
          <Route exact path="/Product">
            <AllProduct />
          </Route>
          <Route exact path="/AddProduct">
            <AddProduct />
          </Route>
          <Route exact path="/EditProduct/:id">
            <EditProduct />
          </Route>
          <Route exact path="/ProductPage">
          <ProductPage/>
          </Route>


        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
