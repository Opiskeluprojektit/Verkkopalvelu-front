import React,{useEffect} from 'react';

export default function Tilaus({cart}) {

/*     useEffect(() => {

    }, []) */

    return (
        <div>
            <h3>Ostoskori</h3>
            <table>
            { cart?.map((product) => {
                return (
                    <tr>
                        <td>{product.name}</td>   
                        <td>{product.price}</td>                        
                    </tr>
                );
            })}
            </table>
        </div>
    )
}
