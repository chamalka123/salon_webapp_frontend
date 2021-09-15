import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import "./AllProduct.css";

export default function AllProduct() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
       function getProducts() {
           axios.get("http://localhost:8070/product/").then((res) =>{
               setProducts(res.data);
           }).catch((err) =>{
               alert(err.message);
           })
       }
       getProducts();
    }, [products]);


    function deleteProduct(_id){
        axios.delete("http://localhost:8070/product/delete/"+_id).then((res)=>{
            console.log(res.data);
            alert("Delete Successfully");

        }).catch((err)=>{
            alert(err)
        });
        setProducts(products.filter((products) => products._id !== _id))

    }


    return (
    <div className="productContainer">
        <h1 className="product">All Products Details</h1>
        <table class="table">
            <thead>
                <tr className="productRow">
                <th clasName="addProductTable" scope="col">Product ID</th>
                <th clasName="addProductTable" scope="col">Product Name</th>
                <th clasName="addProductTable" scope="col">Description</th>
                <th clasName="addProductTable" scope="col">Price</th>
                <th clasName="addProductTable" scope="col">Category ID</th>
                <th clasName="addProductTable" scope="col">Category Name</th>
                <th clasName="addProductTable" scope="col">Quantity</th>
                <th clasName="addProductTable" scope="col"></th>
                </tr>
            </thead>
           
            {products.map((products) => (
        
                <tr className="productRow">
                    <td clasName="addProductTable" >{products.product_id}</td>
                    <td clasName="addProductTable" >{products.product_name}</td>
                    <td clasName="addProductTable" >{products.description}</td>
                    <td clasName="addProductTable" >{products.price}</td>
                    <td clasName="addProductTable" >{products.category_id}</td>
                    <td clasName="addProductTable" >{products.category_name}</td>
                    <td clasName="addProductTable" >{products.quantity}</td>
                    
                    <div class="btn">
                    <Link to={`/EditProduct/${products._id}`} class="btn btn-success btn-sm">
                        Update</Link>
                    &nbsp;
                    <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteProduct(products._id)}>Delete</button>
                    </div>

                </tr> 
               
            ))}

     
        </table>
        <center>
       <Link to={"/AddProduct"} className="btn btn-warning btn-sm">Add New Product</Link>
       </center>

    </div>
    )
}