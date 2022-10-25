import React, { useState } from 'react'
import Spinner from './Spinner'
import "../style/Table.css";
import sortArray from 'sort-array'

const Table = ({ characters, spin }) => {
    var total = 0;
    for (var i in characters) {
        console.log(Number(characters[i].height))
        total += Number(characters[i].height);
    }
    console.log(total * 0.0328)
    const [toggle, settoggle] = useState(false)
    const toggleName = () => {
        const tog = false;
        if (tog === toggle) {
            let ascInfo = sortArray(characters, { by: 'name', order: 'asc' })
            characters = (ascInfo)
            settoggle(true)
        }
        else {
            let descInfo = sortArray(characters, { by: 'name', order: 'desc' })
            characters = (descInfo)
            settoggle(false)
        }
    }
    const toggleGender = () => {
        const tog = false;
        if (tog === toggle) {
            let ascInfo = sortArray(characters, { by: 'gender', order: 'asc' })
            characters = (ascInfo)
            settoggle(true)
        }
        else {
            let descInfo = sortArray(characters, { by: 'gender', order: 'desc' })
            characters = (descInfo)
            settoggle(false)
        }
    }
    const toggleHeight = () => {
        const tog = false;
        if (tog === toggle) {
            let ascInfo = sortArray(characters, { by: 'height', order: 'asc' })
            characters = (ascInfo)
            settoggle(true)
        }
        else {
            let descInfo = sortArray(characters, { by: 'height', order: 'desc' })
            characters = (descInfo)
            settoggle(false)
        }
    }
    const filterCon = document.querySelector('.gallery-filter')
        const galleryItems = document.querySelectorAll('.gallery-item')
        filterCon.addEventListener('click',(event)=>{
            if(event.target.classList.contains('filter-item')){
                filterCon.querySelector('.active').classList.remove('active');
                event.target.classList.add('active');
                const filterValue = event.target.getAttribute('data-filter');
                galleryItems.forEach((item)=>{
                    if (item.classList.contains(filterValue) || filterValue === 'all') {
                        item.classList.add('show')
                        item.classList.remove('hide')
                    }
                    else{
                        item.classList.add('hide')
                        item.classList.remove('show')
            }
                })
            }
        })
    return (
        <>
            {spin ? <Spinner /> : <div className="info">
                {characters.length !== 0 ?
                    <div className="filter">
                        <div class="row">
                            <div class="gallery-filter">
                                <span class="filter-item active" data-filter="all">All</span>
                                <span class="filter-item" data-filter="male">Male</span>
                                <span class="filter-item" data-filter="female">Female</span>
                                <span class="filter-item" data-filter="n/a">N/A</span>
                            </div>
                        </div>
                        <table>
                            <thead>
                                <th onClick={toggleName}>Name</th>
                                <th onClick={toggleGender}>Gender</th>
                                <th onClick={toggleHeight}>Height</th>
                            </thead>
                            <tbody>
                                {characters.map((val, index) => (
                                    <tr key={index}>
                                        <td data-label="Name">{val.name}</td>
                                        <td data-label="Gender" data-filter={val.gender}>{val.gender}</td>
                                        <td data-label="Height">{val.height}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total:{characters.length}</td>
                                    <td colSpan={2}>{total}</td>
                                </tr>
                            </tfoot>
                        </table> </div>
                    : null
                }
            </div>}
        </>
    )
}

export default Table