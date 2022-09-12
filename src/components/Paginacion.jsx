import React, { useState } from 'react';

const Paginacion = ({ pagina, setPagina, max }) => {
    const [input, setInput] = useState(1)

    const nextPage = () => {
        if (pagina => max) {
            alert("error..")
        } else {
            setInput(input + 1)
            setPagina(pagina + 1)
        }
    }

    const previousPage = () => {
        if (pagina <= max) {
            alert("error..")
        } else {
            setInput(input + 1)
            setPagina(pagina + 1)
        }
    }

    const onKeyDown = e => {
        if (e.keyCode == 13) {
            console.log(e.target.value)
            setPagina(parseInt(e.target.value))

            if (e.target.value < 1 ||
                e.target.value > max ||
                isNaN(e.target.value)
            ) {
                setPagina(1);
                setInput(1);
                alert("error.. wrong number")
            } else {
                setPagina(parseInt(e.target.value))
            }
        }
    }

    const onChange = e => {
        setInput(e.target.value)
    }

    return (
        <div className='listPage'>

            <button
                className='buttonPreviousPage'
                onClick={previousPage}>
                <i className="fa-solid fa-backward"></i>
            </button>
            <input
                type="text"
                className='inputPage'
                value={input}
                onChange={(e) => onChange(e)}
                onKeyDown={(e) => onKeyDown(e)}
            />
            <p className='textPage'>de {max} </p>
            <button
                className='buttonNextPage'
                onClick={nextPage}>
                <i className="fa-solid fa-forward"></i>
            </button>

        </div>
    );
};

export default Paginacion;