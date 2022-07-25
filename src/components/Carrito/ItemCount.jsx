import React,{useState} from 'react'

export const ItemCount = () => {
    
    const [cuenta, setCuenta] = useState(0);
    

    const increment = (evento)=>{
        evento.preventDefault();
        setCuenta (cuenta + 1);
        console.log(cuenta);

    }


    const disminuir = (evento)=>{
        evento.preventDefault();
        setCuenta (cuenta - 1);
        if(cuenta <= 0){
            setCuenta (cuenta + 0);
        }
        
        console.log(cuenta);
        
    }
   /* const show1= menu ? "carritos show": "carritos";
    const show2= menu ? "carrito show" : "carrito"; 
   */

    return (
        <div className="carritos show">
            <div className="carrito show">
                <div className="carrito_close"></div>
                <box-icon name="x"></box-icon>

                <h2>Su carrito</h2>

                <div className="carrito_center">
                    <div className="carrito_item">
                        {/*<img src="http://placehold.it/" />*/}


                        <h3>Producto</h3>
                        <p className="price">$345</p>
                        <div>
                             
                            <box-icon onClick={increment} name="up-arrow" type="solid"></box-icon>
                            
                            <p className="cantidad">{cuenta}</p>
                            
                            <box-icon  onClick={disminuir} name="down-arrow" type="solid"></box-icon>
                            
                            <div className="remove_item">
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>
                    </div>
                    <div className="carrito_footer">
                        <h3>Total: $2334</h3>
                        <button className="btn">Payment</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

