import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Residents = ({ character }) => {

    const [residents, setResidents] = useState({})

    useEffect( () => {
        axios.get(character)
            .then(res => setResidents(res.data))
    }, [] )

    return (
        <div className='card'>
            <img className='img--card' src={residents.image} alt="" />
            <div>
                <h3> {residents.name} </h3>
                <hr />
                <h4>raza</h4>
                <h3> {residents.species} </h3>
                <h4>origen</h4>
                <h3> {residents.origin?.name} </h3>
                <h4>cantidad de episodios donde aparece</h4>
                <h3> {residents.episode?.length} </h3>
            </div>
        </div>
    );
};

export default Residents;