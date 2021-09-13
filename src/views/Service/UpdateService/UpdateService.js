import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import './UpdateService.css'
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { TextField } from '@material-ui/core';



function UpdateService(props){
    const[service_id, setservice_id]=useState("");
    const[title,setTitle]=useState("");
    const [price,setPrice]= useState("");
    const[duration,setDuration]=useState("");
    const[content,setContent]=useState("");
    const[category,setCategory]=useState("");
    const history=useHistory();
    const [previewSource, setPreviewSource] = useState();

     //handling the image uploading
     const handleFileInputChange = (e) => {
        const file = e.target.files[0]
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

    
    useEffect(() => {
     async function getServices() {
 await  axios.get(`http://localhost:8070/service/item/${props.match.params.id}`).then((res)=>{


            setservice_id(res.data.service.service_id);
            setTitle(res.data.service.title);
            setPrice(res.data.service.price);
            setDuration(res.data.service.duration);
            setContent(res.data.service.content);
            setCategory(res.data.service.category);
          })
          .catch((error) => {
            alert("Failed to fetch item data")
          });
      }
      getServices();
    }, [props]);
    
      
  //update data 
async function sendUpdateService(e){
    e.preventDefault();//prevent submit event default behaviour
    const updateService = {
        service_id,
        title,
        price,
        duration,
        content,
        category  
      
    }
    const config = {
        headers: {
          "content-Type": "application/json",
        }
      };
      
  try{
      await axios.put(`http://localhost:8070/service/update/${props.match.params.id}`, updateService, config);
      alert("Updated sucessfully");
    }catch(error){
        alert("Updating Failed")
          console.log(error)
      }
    }
    

    return (
    <div className="container" align="center">
        <div class="row">
            <div class="col-12">
                <div class="pb-2 px-3 d-flex flex-wrap align-items-center justify-content-between">
                    <h2>Update Service</h2>
                </div>
            </div>
        </div>
        <div className="update_product">
            <form onSubmit={sendUpdateService} class="updateService">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-md-8 mb-4">
                                <div className="form-id">
                                    <OutlinedInput
                                        type="text" id="service_id" placeholder="Service ID" 
                                        required fullWidth 
                                        value={service_id}
                                        onChange={(e)=> {setservice_id(e.target.value)}}
                                        inputProps={{style: {padding: 12}}
                                    }disabled
                                    />
                                </div>
                            </div>
                            <div className="col-md-8 mb-4">
                                <div className="form-title">
                                    <OutlinedInput
                                        type="text" id="title" placeholder="Service Name" 
                                        required fullWidth 
                                        value={title}
                                        onChange={(e)=> {setTitle(e.target.value)}}
                                        inputProps={{style: {padding: 12}}}
                                    />
                                </div>
                            </div>
                            <div> 
                                <div className="col-md-8 mb-4">
                                    <div className="form-price">
                                        <OutlinedInput 
                                            type="price" id="price" placeholder="Service Price"
                                            required fullWidth value={price}
                                            onChange={(e)=> {setPrice(e.target.value)}}
                                            inputProps={{style: {padding: 12}}}
                                        />
                                    </div>
                                </div>
                            </div>       
                            <div> 
                                <div className="col-md-8 mb-4">
                                    <div className="form-duration">
                                        <OutlinedInput 
                                            type="text" id="duration" placeholder="Service Duration" 
                                            required fullWidth value={duration}
                                            onChange={(e)=> {setDuration(e.target.value)}}
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
                                        required fullWidth variant="outlined" value={content}
                                        onChange={(e)=> {setContent(e.target.value)}}
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
                                                class="form-check-input" type="radio" name="Category" id="Our_Packages" value={category} required 
                                                onChange={(e)=> {setCategory(e.target.value)}}
                                            />
                                            <label className="form-check-label" for="Our_Packages">
                                                OTC
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" type="radio" name="Category" id="Non-OTC" value={category}
                                                required 
                                                onChange={(e)=> {setCategory(e.target.value)}}
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
                                <img src="/images/d.png" className="updatepreviewImgservice" alt="service pic"/>
                            }
                            <div className="form-group">
                                <label htmlFor="productimg">
                                    <input
                                        style={{ display: 'none' }}
                                        id="serviceimg"
                                        name="serviceimg"
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
                            <input className="form-submit-btn" type="submit" value="Update Service" />
                        </div>
                    </div>
                </div>
            </form>             
        </div>                    
    </div> 
    );
}


export default UpdateService
