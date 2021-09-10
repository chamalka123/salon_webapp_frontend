import { useState } from 'react';
import axios from 'axios';
import './UpdateService.css'
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Link, useHistory } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TextField } from '@material-ui/core';


function AddServices() {
    const[service_id, setservice_id]=useState("");
    const[title,setTitle]=useState("");
    const[file,setFile]=useState(""); 
    const[price,setPrice]=useState("");
    const[duration,setDuration]=useState("");
    const[content,setContent]=useState("");
    const[category,setCategory]=useState("");
    const [previewSource, setPreviewSource] = useState();

    //handling the image uploading
    const handleFileInputChange = (event) => {
        const file = event.target.files[0]
        previewImage(file);
    };

    //display a preview of uploaded image
    const previewImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(reader.result)
        }
    }

    const updateService = {service_id,title,price,duration,content,category}

    async function add(event){
        event.preventDefault();

        const config = {
            headers: {
                "content-Type": "application/json"
            }
        };
        
        try {
            await axios.post("http://localhost:8070/service/update", updateService, config)
            alert("Updated Successfully")          
        }catch (error) {         
            alert("can't be Update");
        }
    }
    

 
    return (
    <div className="container" >
        <div class="row">
            <div class="col-12">
                <div class="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>Update Service</h2>
                </div>
            </div>
        </div>
        <div className="update_service">
            <form onSubmit={add} class="updateService">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-md-8 mb-4">
                                <div className="form-name">
                                    <OutlinedInput
                                        type="text" id="name" placeholder="Product Name" 
                                        required fullWidth
                                        onChange={(e)=>setName(e.target.value)}
                                        inputProps={{style: {padding: 12}}}
                                    />
                                </div>
                            </div>
                            <div> 
                                <div className="col-md-8 mb-4">
                                    <div className="form-price">
                                        <OutlinedInput 
                                            type="price" id="price" placeholder="Product Price" required fullWidth
                                            onChange={(e)=>setPrice(e.target.value)}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                            </div>                       
                            <div className="col-md-10 mb-4">
                                <div className="form-description">
                                    <TextField
                                        multiline rows={3}
                                        id="description" placeholder="Product Description" 
                                        required fullWidth variant="outlined" 
                                        onChange={(e)=>setDescription(e.target.value)}
                                        inputProps={{style: {padding: 12}}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <div className="form-group">
                                 <div>
                                    <label><h6>Type</h6></label> &nbsp;
                                </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                class="form-check-input" type="radio" name="Type" id="OTC" value="OTC" required
                                                onChange={(e)=>setType(e.target.value)}
                                            />
                                            <label className="form-check-label" for="OTC">
                                                OTC
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="Type" id="Non-OTC" value="Non-OTC" required
                                                onChange={(e)=>setType(e.target.value)}
                                            />
                                            <label className="form-check-label" for="Non-OTC">
                                                Non-OTC
                                            </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div>
                            {previewSource ? 
                                <img src={previewSource} alt="preview" className="previewImgproduct"/>
                            :
                                <img src="/images/d.jpg" className="updatepreviewImgproduct" alt="product pic"/>
                            }
                            <div className="form-group">
                                <label htmlFor="productimg">
                                    <input
                                        style={{ display: 'none' }}
                                        id="productimg"
                                        name="productimg"
                                        type="file"
                                        onChange={handleFileInputChange}
                                    />

                                    <Button color="primary" variant="contained" component="span">
                                        <AddAPhotoIcon/> &nbsp; Update Image
                                    </Button>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input className="form-submit-btn" type="submit" value="Update Product" />
                        </div>
                    </div>
                </div>
            </form>             
        </div>                    
    </div>


        
    )
}

export default AddProducts