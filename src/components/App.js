import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "../views/Home/Home";
import Admin from "../views/adminPanel/adminPanel";
import MyAccount from "../views/myAccount/myAccount";
import Expenses from "../views/Expenses/Expenses";
import Payment from "../views/Payment/Payment";
import AddExpenses from "../views/Expenses/AddExpenses";
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
        <SideDrawer />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
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
          <Route exact path="/AddPayment">
            <AddPayment />
          </Route>
          <Route exact path="/EditExpense/:id">
            <EditExpenses />
          </Route>
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
