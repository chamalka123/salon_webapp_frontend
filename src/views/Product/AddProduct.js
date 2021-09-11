import React,{useState} from "react";
import axios from "axios";
import "./AddProduct.css";



export default function AddProduct(){

  const [product_id, setProduct_id] = useState("");
  const [product_name, setProduct_name] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [category_name, setCategory_name] = useState("");
  const [quantity, setQuantity] = useState("");

  function sendData(e){
    e.preventDefault();

      const newProduct ={

        product_id,
        product_name,
        description,
        price,
        category_id,
        category_name,
        quantity

      }

    axios.post("http://localhost:8070/product/add",newProduct).then(()=>{
      alert("Product Added");

    }).catch((err)=>{
      alert(err)
    })
  }

    return(
     <div className="container"> 
     <h1>Add New Product</h1>
      <form onSubmit={sendData}>

  <div class="col-md-12">
    <label for="product_id">Product ID</label>
    <input type="text" class="form-control" id="product_id" required
    onChange={(e)=>{

      setProduct_id(e.target.value);

    }}/>
  </div>
  
  <div class="col-md-12">
    <label for="product_name">Product Name</label>
    <input type="text" class="form-control" id="product_name" required
    onChange={(e)=>{

      setProduct_name(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="description">Description</label>
    <input type="text" class="form-control" id="description" placeholder="Enter Product Description" required
    onChange={(e)=>{

      setDescription(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="price">Price</label>
    <input type="text" class="form-control" id="price" placeholder="Enter Price" required
    onChange={(e)=>{

      setPrice(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="category_id">Product Category ID</label>
    <input type="text" class="form-control" id="category_id" required
    onChange={(e)=>{

      setCategory_id(e.target.value);

    }}/>
  </div>

  <div class="col-md-12" >
    <label for="catergory_name">Product Category Name</label>
    <input type="text" class="form-control" id="category_name" required
    onChange={(e)=>{

      setCategory_name(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="quantity">Quantity</label>
    <input type="text" class="form-control" id="quantity" required
    onChange={(e)=>{

      setQuantity(e.target.value);

    }}/>
  </div>
<br></br>
  <center>
  <div class="col-md-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  </center>
</form>
</div>  
    )
}