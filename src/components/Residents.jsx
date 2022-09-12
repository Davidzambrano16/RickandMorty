import axios from 'axios';
import { Axios } from 'axios';
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
            <div className='text--card'>
                <h3> {residents.name} </h3>
                <hr />
                <br />
                <h4>SPECIES</h4>
                <h3> {residents.species} </h3>
                <br />
                <h4>ORIGIN</h4>
                <h3> {residents.origin?.name} </h3>
                <br />
                <h4>APPARENCE IN EPISODES</h4>
                <h3> {residents.episode?.length} </h3>
                <br />
            </div>
        </div>
    );
};

export default Residents;