import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";


function EditProduct(){

  const [product_id, setProduct_id] = useState("");
  const [product_name, setProduct_name] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [category_name, setCategory_name] = useState("");
  const [quantity, setQuantity] = useState("");

  const {id} = useParams();
  useEffect(() => {
    function getProducts() {
      axios.get(`http://localhost:8070/product/get/${id}`)
      .then((res) => {

        console.log(res.data);
        setProduct_id(res.data.product.product_id);
        setProduct_name(res.data.product.product_name);
        setDescription(res.data.product.description);
        setPrice(res.data.product.price);
        setCategory_id(res.data.product.category_id);
        setCategory_name(res.data.product.category_name);
        setQuantity(res.data.product.quantity);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    getProducts();
  }, []);



  function sendUpdateProduct(e){
    e.preventDefault();

      const updateproduct = {

        product_id,
        product_name,
        description,
        price,
        category_id,
        category_name,
        quantity

      }

    axios.put(`http://localhost:8070/product/update/${id}`, updateproduct).then(()=>{
      alert("Product Updated");

    }).catch((err)=>{
      alert(err);
    })
  }

    return(
     <div className="container"> 
     <h1>Edit Product</h1>
      <form onSubmit={sendUpdateProduct}>

  <div class="col-md-12">
    <label for="product_id">Product ID</label>
    <input type="text" class="form-control" id="product_id" 
    value={product_id}
    onChange={(e)=>{

      setProduct_id(e.target.value);

    }}/>
  </div>
  
  <div class="col-md-12">
    <label for="product_name">Product Name</label>
    <input type="text" class="form-control" id="product_name" 
    value={product_name}
    onChange={(e)=>{

      setProduct_name(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="description">Description</label>
    <input type="text" class="form-control" id="description" placeholder="Enter Product Description" 
    value={description}
    onChange={(e)=>{

      setDescription(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="price">Price</label>
    <input type="text" class="form-control" id="price" placeholder="Enter Price" 
    value={price}
    onChange={(e)=>{

      setPrice(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="category_id">Product Category ID</label>
    <input type="text" class="form-control" id="category_id"  
    value={category_id}
    onChange={(e)=>{

      setCategory_id(e.target.value);

    }}/>
  </div>

  <div class="col-md-12" >
    <label for="catergory_name">Product Category Name</label>
    <input type="text" class="form-control" id="category_name" 
    value={category_name}
    onChange={(e)=>{

      setCategory_name(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="quantity">Quantity</label>
    <input type="text" class="form-control" id="quantity" 
    value={quantity}
    onChange={(e)=>{

      setQuantity(e.target.value);

    }}/>
  </div>
<br></br>
  <center>
  <div class="col-md-12">
    <button type="submit" class="btn btn-success btn-sm">Update</button>
  </div>
  </center>
</form>
</div>  
    );
}
export default EditProduct;