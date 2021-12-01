import React,{useEffect} from 'react';
import './Tilaus.css';

export default function Tilaus({cart,updateAmount}) {

/*      useEffect(() => {
        console.log(cart);
    }, [])  */

    function changeAmount(e,product) {
        updateAmount(e.target.value,product);
    }

    return (
        <div>
            <h3>Ostoskori</h3>
            <table>
                <tr>
                    <td className="otsikot">Tuote</td>
                    <td className="otsikot">Hinta</td>
                    <td className="otsikot">Määrä</td>
                </tr>
            { cart?.map((product) => {
                return (
                    <tr>
                        <td className="tuotenimi">{product.name}</td>   
                        <td className="tuotehinta">{product.price}</td>   
                        <td className="tuotemäärä">
                            <input 
                            type="number" 
                            step="1"
                            onChange={e => changeAmount(e,product)}
                            value={product.amount}/>
                        </td>                        
                    </tr>
                );
            })}
            </table>
        </div>
    )
}
