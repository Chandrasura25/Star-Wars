import React from 'react';
import '../style/Dropdown.css'
import Loader from './Loader';

function Dropdown({ movies, loader, getId, error }) {

    return (
        <>
            <div class="box">
                <select name="" id="" onChange={(e) => getId(e.target.value)}>
                    <option value="">Choose a Star War Movie</option>
                    {loader ?
                        <option><Loader err={error} /></option>
                        :
                        movies.map((val, index) => (
                            <option value={index + 1}>{val.title}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}

export default Dropdown