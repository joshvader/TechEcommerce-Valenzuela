import React from 'react'

const ItemList = (props) => {
    return (
        <div className="producto">
            <div className="card">
                <div className="card-body">
                    <img  className="three__cards--img" src={props.img} />
                    <h1>{props.name}</h1>
                    <p>{props.role}</p>
                </div>
                <buton className="btn btn-primary aling-bottom-center ">Ver detalle</buton>
            </div>


        </div>
    )
}

export default ItemList