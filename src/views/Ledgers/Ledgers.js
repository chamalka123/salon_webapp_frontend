import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Ledgers.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { green, red } from "@material-ui/core/colors";
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Ledgers() {
  //search ledgers using ledger Id
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:8070/ledger/");
      setPosts(response.data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  //fetch all ledgers
  const [ledger, setLedger] = useState([]);
  useEffect(() => {
    function getLedger() {
      axios
        .get("http://localhost:8070/ledger/")
        .then((res) => {
          setLedger(res.data);
          //console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getLedger();
  }, [ledger]);

  //delete
  function deleteLedger(_id) {
    axios
      .delete(`http://localhost:8070/ledger/delete/${_id}`)
      .then((res) => {
        //console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    setLedger(ledger.filter((ledger) => ledger._id !== _id));
  }

  return (
    <div className="ledgerBody">
      <div>
        <Navbar />
        <input
          className="searchLedger"
          type="text"
          placeholder="search..."
          onChange={(e) => setSearchName(e.target.value)}
        />
        <SearchIcon />
      </div>
      <div>
        <table className="table table-striped ledgerTable">
          <thead>
            <tr className="ledgerRaw">
              <th scope="col">Ledger ID</th>
              <th scope="col">Date</th>
              <th scope="col">Small Note</th>
              <th scope="col">Type</th>
              <th scope="col">Payment Method</th>
            </tr>
          </thead>
          {loading ? (
            <button className="btn-btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aris-hidden="true"
              ></span>
              Loading{" "}
            </button>
          ) : (
            posts
              .filter((value) => {
                if (searchName === "") {
                  return value;
                } else if (value.date.includes(searchName)) {
                  return value;
                }
              })
              .map((ledger) => (
                <tr key={ledger._id}>
                  <td className="expenseTableData">{ledger.ledgerId}</td>
                  <td className="expenseTableData">{ledger.date}</td>
                  <td className="expenseTableData">
                    {ledger.note}
                    <button
                      className="btn btn-sm ledgerButton"
                      id="deleteNote"
                      onClick={() => {if (window.confirm('Are you sure you wish to delete this record?'))deleteLedger(ledger._id)}}
                    >
                      <DeleteIcon
                        fontSize="small"
                        style={{ color: red[600] }}
                      />
                    </button>
                    <EditIcon fontSize="small" style={{ color: green[600] }} />
                  </td>
                  <td className="expenseTableData">{ledger.type}</td>
                  <td className="expenseTableData">{ledger.paymentMethod}</td>
                </tr>
              ))
          )}
        </table>
        <Link to={"/add/ledgers"} className="btn btn-warning btn-sm">
        ADD LEDGERS<AddCircleIcon />  
        </Link>
      </div>
     
    </div>
  );
}
export default Ledgers;
