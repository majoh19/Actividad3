import React, { useState } from 'react';
import { createRestaurant } from "./restaurantService";
import Swal from 'sweetalert2';

export const New = () => {
    const [formValues, setFormValues] = useState({});
    const { name = '', description = '', location = '', image = '' } = formValues;

    const handleOnChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues);
        try{
            Swal.fire({ allowOutsideClick: false, text: 'Loading...'});
            Swal.showLoading();
            await createRestaurant(formValues);
            Swal.close();
            console.log("Created from New page");
            setFormValues({ name:'', description:'', location:'', image:'' });
        }catch(error){
            Swal.close();
            console.log(error);
        }
    }

    return (
        <div className="container mb-3 mt-3">
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name='name' value={name}
                    className="form-control" onChange={(e) => {handleOnChange(e)}} placeholder="Write the name of your restaurant..."/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" name='description' value={description}
                    className="form-control" onChange={(e) => {handleOnChange(e)}} placeholder="Write about your restaurant..."/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" name='location' value={location} 
                    className="form-control" onChange={(e) => {handleOnChange(e)}} placeholder="Write the address of your restaurant..."/>
                </div>
                <label className="form-label">Image</label>
                <div className="input-group mb-3">
                    <span className="input-group-text">Image URL</span>
                    <input type="text" name='image' value={image} 
                    className="form-control" onChange={(e) => {handleOnChange(e)}} placeholder="Insert URL here..."/>
                </div>
                <button type="submit" className="btn btn-light btn-outline-dark">Save</button>
            </form>
        </div>
    )
}
