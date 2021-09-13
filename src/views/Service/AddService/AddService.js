import { useState } from 'react';
import axios from 'axios';
import './AddServices.css'
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Link, useHistory } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TextField } from '@material-ui/core';



function AddService() {
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

    const newService = {service_id,title,price,duration,content,category}

    async function add(event){
        event.preventDefault();

        const config = {
            headers: {
                "content-Type": "application/json"
            }
        };
        
        try {
            await axios.post("http://localhost:8070/service/add", newService, config)
            alert("Added Successfully")          
        }catch (error) {         
            alert("Can't be Added");
        }
    }
    

 
    return (
    <div className="container" >
        <div class="row">
            <div class="col-12">
                <div class="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>Create New</h2>
                </div>
            </div>
        </div>
        <div className="create_service">
            <form onSubmit={add} class="addService">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                        <div className="col-md-8 mb-4">
                                <div className="form-id">
                                    <OutlinedInput
                                    
                                        type="text" id="s_id" placeholder="Service ID" 
                                        required fullWidth
                                        onChange={(e)=>setservice_id(e.target.value)}
                                        inputProps={{style: {padding: 12}}}
                                    />
                                </div>
                            </div>
                            <div className="col-md-8 mb-4">
                                <div className="form-title">
                                    <OutlinedInput
                                        type="text" id="title" placeholder="Service Name" 
                                        required fullWidth
                                        onChange={(e)=>setTitle(e.target.value)}
                                        inputProps={{style: {padding: 12}}}
                                    />
                                </div>
                            </div>
                            <div> 
                                <div className="col-md-8 mb-4">
                                    <div className="form-price">
                                        <OutlinedInput 
                                            type="price" id="price" placeholder="Service Price" required fullWidth
                                            onChange={(e)=>setPrice(e.target.value)}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                            </div> 
                            <div> 
                                <div className="col-md-8 mb-4">
                                    <div className="form-duration">
                                        <OutlinedInput 
                                            type="text" id="duration" placeholder="Service Duration" required fullWidth
                                            onChange={(e)=>setDuration(e.target.value)}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                            </div>   
                                         
                            <div className="col-md-10 mb-4">
                                <div className="form-content">
                                    <TextField
                                        multiline rows={1}
                                        id="content" placeholder="Service Description" 
                                        required fullWidth variant="outlined" 
                                        onChange={(e)=>setContent(e.target.value)}
                                        inputProps={{style: {padding: 12}}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <div className="form-group">
                                 <div>
                                    <label><h6>Category</h6></label> &nbsp;
                                </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                class="form-check-input" type="radio" name="Category" id="Our_Packages" value="Our_Packages" required
                                                onChange={(e)=>setCategory(e.target.value)}
                                            />
                                            <label className="form-check-label" for="Our_Packages">
                                                OTC
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="Category" id="Non-OTC" value="Non-OTC" required
                                                onChange={(e)=>setCategory(e.target.value)}
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
                                <img src={previewSource} alt="preview" className="previewImgservice"/>
                            :
                                <img src="/images/d.jpg" className="previewImgservice" alt="service pic"/>
                            }
                            <div className="form-group">
                                <label htmlFor="serviceimg">
                                    <input
                                        style={{ display: 'none' }}
                                        id="serviceimg"
                                        name="serviceimg"
                                        type="file"
                                        onChange={handleFileInputChange}
                                    />

                                    <Button color="primary" variant="contained" component="span">
                                        <AddAPhotoIcon/> &nbsp; Add Image
                                    </Button>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input className="form-submit-btn" type="submit" value="CREATE" />
                        </div>
                    </div>
                </div>
            </form>             
        </div>                    
    </div>


        
    )
}

export default AddService
