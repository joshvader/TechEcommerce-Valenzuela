import React from 'react'
import {Link} from 'react-router-dom'
const Item = (props) => {
  return (
    <div className="producto">
    <div className="card">
        <div className="card-body">
            <img  className="three__cards--img" src={props.img} />
            <h1>{props.name}</h1>
            <p>{props.role}</p>
        </div>
        <Link to={`/item/${props.id}`}>
        <buton   className="btn btn-primary aling-bottom-center ">Ver detalle</buton>
        </Link>
        
    </div>


</div>
  )
}

export default Item