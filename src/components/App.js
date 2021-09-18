import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "../views/Home/Home";
import Admin from "../views/adminPanel/adminPanel";
import MyAccount from "../views/myAccount/myAccount";
import Expenses from "../views/Expenses/Expenses";
import Payment from "../views/Payment/Payment";
import AddExpenses from "../views/Expenses/AddExpenses";
import AllEmployee from "../views/Employee/AllEmployee";
import AddEmployee from "../views/Employee/AddEmployee";
import EditEmployee from "../views/Employee/EditEmployee";
import Allsalary from "../views/Employee/AllSalary";
import AddEmployeeSalary from "../views/Employee/AddEmployeeSalary";
import EmployeeSalaryCalculator from "../views/Employee/EmployeeSalaryCalculator";
import Service from "../views/Service/Services/Service";
import AddService from "../views/Service/AddService/AddService";
import SingleItem from "../views/Service/SingleItem/SingleItem";
import CustomerView from "../views/Service/CustomerView/CustomerView";
import CustomerSingleItem from "../views/Service/CustomerView/CustomerSingleItem";
import UpdateService from "../views/Service/UpdateService/UpdateService";
import Appointment from "../views/Appointment/Appointment";
import AddAppointment from "../views/Appointment/AddAppointment";
import EditAppointment from "../views/Appointment/EditAppointment";
import AllProduct from "../views/Product/AllProduct";
import AddProduct from "../views/Product/AddProduct";
import EditProduct from "../views/Product/EditProduct";
import EditExpenses from "../views/Expenses/EditExpenses";
import AddPayment from "../views/Payment/AddPayment";
import EditPayment from "../views/Payment/EditPayment";
import ProductPage from "../views/Product/ProductPage";
import SideDrawer from "./Header/SideDrawer";
import AdminLogin from "../views/AdminLogin/AdminLogin";
import BudgetPlans from "../views/BudgetPlans/BudgetPlans";
import Ledgers from "../views/Ledgers/Ledgers";
import Income from "../views/Income/Income";
import Navbar from "./Navbar/Navbar";
import CustomerList from "../views/customer/customerList";
import CustomerLogin from "../views/CustomerLogin/CustomerLogin";

function App() {
  return (
    <div>
      <Router>
        <SideDrawer />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <CustomerLogin />
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
          <Route exact path="/AddPayment"></Route>
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
          <Route exact path="/update/:id" component={EditPayment}></Route>
          <Route exact path="/EditExpense/:id">
            <EditExpenses />
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
          <Route exact path="/CustomerSingleItem">
            <CustomerSingleItem />
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
            <ProductPage />
          </Route>
          <Route exact path="/Employee">
            <AllEmployee />
          </Route>
          <Route exact path="/add">
            <AddEmployee />
          </Route>
          <Route exact path="/EditEmployee/:id">
            <EditEmployee />
          </Route>
          <Route exact path="/AllSalary">
            <Allsalary />
          </Route>
          <Route exact path="/EmployeeSalaryCalculator">
            <EmployeeSalaryCalculator />
          </Route>
          <Route exact path="/AddEmployeeSalary">
            <AddEmployeeSalary />
          </Route>
          <Route exact path="/Client">
            <CustomerList />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
