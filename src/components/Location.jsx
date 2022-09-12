import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Paginacion from './Paginacion';
import Residents from './Residents';

const Location = () => {

    const [location, setLocation] = useState({})
    const [textId, setTextId] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const [pagina, setPagina] = useState(1)
    const [porPagina, setPorPagina] = useState(8)

    useEffect(() => {
        const random = Math.floor(Math.random() * 125) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => {
                setLocation(res.data)
                setIsLoading(false)
            });
    }, [])

    const max = Math.ceil(location.residents?.length / porPagina)

    console.log(max)

    console.log(location)

    const typeChange = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${textId}`)
            .then(res => setLocation(res.data));
    }

    return (
        <div className='container'>
            {
                isLoading ? (
                    <div className='loading'>
                        <h1>is loading...</h1>
                    </div>
                ) : (
                    <div className='location'>
                        <header className='header'>
                            <img className='img--header' src="https://s3-alpha-sig.figma.com/img/ffe4/45d7/9211983155574e727fd7ed818177d19d?Expires=1663545600&Signature=eKyi~rsa8EN6QerBJJnZCC5Hts6aduqxSsl907QJm~yVK90e1HmWO3k-EQQm-i-9h37enM0jZICAn52Lbh-YSwdTUEhuhUk9xTkON~TJzkqL1M9RKDvMPn-t5xCRWAJgUbA4T8Pxu~tIFOeRCLiqkJ5JIjZfcGk-J8~CEDKK~-pQCvUG69P2QyiU~JHkvY~YAljHEtXMimwajD3WyNXxm4uBtM9beL-WB3n9Ej266cIto4-itRnWksMsPngSwmfsuXVc6yoD0LvmJt8u4EhMVWbnGrDtw9yi~iLRG~OsBncmPrBjlT3UjB2HP-ASFTj8OIaPM73BVpD5QQ7Tkou8oQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                            <div className='nav--header'>
                                <input
                                    className='input--header'
                                    placeholder='type a location id 1-126'
                                    type="text"
                                    value={textId}
                                    onChange={e => setTextId(e.target.value)}
                                />
                                <button
                                    className='button--header'
                                    onClick={typeChange}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </header>

                        <section className='infoCard'>
                            <h2>name:</h2>
                            <h2>type:</h2>
                            <h2>dimension: </h2>
                            <h2>populations:</h2>
                            <h3>{location.name}</h3>
                            <h3>{location.type} </h3>
                            <h3>{location.dimension} </h3>
                            <h3>{location.residents?.length} </h3>
                        </section>

                        <ul className='main'>
                            {
                                location.residents.length === 0 ?
                                    ( <div className='notResidents'>
                                        <h2>no hay habitantes en esta localizacion</h2>
                                        <img className='notResidents--img' src='https://media.giphy.com/media/tJqyalvo9ahykfykAj/giphy.gif' alt="" />
                                    </div> 
                                    ) : (
                                        location.residents?.slice(
                                            (pagina - 1) * porPagina,
                                            (pagina - 1) * porPagina + porPagina
                                        ).map(character => (
                                            <Residents character={character} key={character} />
                                        ))
                                    )
                            }
                        </ul>

                        <Paginacion pagina={pagina} setPagina={setPagina} max={max} />
                        <footer className='footer'></footer>
                    </div>
                )
            };
        </div>
    );
};

export default Location;