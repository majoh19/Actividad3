import React, { useState } from 'react';
import { listaRestaurantes } from './restaurantdata'

export const Search = () => {
    const [formValues, setFormValues] = useState({});
    const { name = ''} = formValues;
    const [result, setResult] = useState([]);

    const handleOnChange = (e) => {
        console.log(e);
        console.log(e.target.name, e.target.value);
        setFormValues({ ...formValues, [e.target.name]: e.target.value });            
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const filter = listaRestaurantes.filter(r => r.nombre.toUpperCase().includes(name.toUpperCase()));
        console.log(result);
        setResult(filter);
    }

    return (
        <div className="container-fluid mb-3 mt-3">
            <div className='row'>
                <div className='col'>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                <label className="form-label">Searh for a restaurant</label>
                <div className="d-flex" role="search">
                    <input className="form-control me-2" type="search" name='name' value={name} placeholder="Write the name of the restaurant here..."
                        aria-label="Search" onChange={(e) => {handleOnChange(e)}}/>
                    <button className="btn btn-outline-dark btn-light" type="submit">Search</button>
                </div>
            </form>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                <div className='row row-cols-1 row-cols-md-4 gd-2'>
                {
                    result.map(restaurant => {
                        return (
                            <div className='col' key={restaurant.id}>
                                <div className='card border-dark bg-transparent'>
                                    <img src={restaurant.imagen} height='320' className='card-img-top' alt='...' />
                                    <div className='card-body text-dark'>
                                        <h4 className='card-title'>{restaurant.nombre}</h4>
                                        <p className='card-text'>{restaurant.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
                </div>
            </div>
        </div>
    )
}
