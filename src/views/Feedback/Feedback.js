import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Feedback() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        const loadPosts =async () =>{
            setLoading(true);
            const response =await axios.get("http://localhost:8070/feedback/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();
    }, []);

    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
       function getFeedbacks() {
           axios.get("http://localhost:8070/feedback/").then((res) =>{
               setFeedbacks(res.data);
           }).catch((err) =>{
               alert(err.message);
           })
       }
       getFeedbacks();
    }, [feedbacks]);

    function deleteFeedback(_id) {
        axios.delete("http://localhost:8070/feedback/delete/"+_id).then((res) =>{
            console.log(res.data);
            alert("Delete Successfully");

    }).catch((err)=>{
        alert(err)
    });
    setFeedbacks(feedbacks.filter((feedbacks) => feedbacks._id !==_id))
}

    return (
<><div>
            <input className="search1"
            style={{ width:"15%" ,height:"25px"}}
            type="text"
            placeholder="search..."
            onChange={(e) => setSearchName(e.target.value)}/></div>

    <div className="container">
        <h1>All Feedback Details</h1>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Feedback ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Service Type</th>
                <th scope="col">Rating</th>
                <th scope="col">Feedback Description</th>
                </tr>
            </thead>

            {loading ? (
                    <button class="btn-btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aris-hidden="true"></span>
                        Loading </button>
                ) : (
                    posts
                        .filter((value) => {
                            if (searchName === "") {
                                return value;
                            } else if (
                                value.feedback_id.includes(searchName.toLowerCase())
                            ){
                                return value;
                            }




               }).map((feedbacks) => 

                    <tr key={feedbacks._id}>
           
            
                    <td>{feedbacks.feedback_id}</td>
                    <td>{feedbacks.customer_name}</td>
                    <td>{feedbacks.service_type}</td>
                    <td>{feedbacks.rating}</td>
                    <td>{feedbacks.feedback_description}</td>
                    

                    <Link to={`/EditFeedback/${feedbacks._id}`} class="btn btn-success btn-sm">Update</Link>
                    &nbsp;
                    <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteFeedback(feedbacks._id)}>Delete</button>

                
                </tr> 
               
            ))}

     
        </table>
       <Link to={"/AddFeedback"} className="btn btn-success btn-sm">Add New Feedback</Link>

    </div>
    </>
    )
}