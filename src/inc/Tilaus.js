import React,{useEffect, useState} from 'react';
import uuid from 'react-uuid';
import './Tilaus.css';

export default function Tilaus({cart,updateAmount,empty,url}) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [finished, setFinished] = useState(false);

    function changeAmount(e,product) {
        updateAmount(e.target.value,product);
    }

    function order(e) {
        e.preventDefault();
        fetch(url + 'tilaus/add.php',{
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                address: address,
                zip: zip,
                city: city,
                cart: cart,
            })
        })
        .then (res => {
            return res.json();
        })
        .then (
            (res) => {
                empty();
                setFinished(true);
            }, (error) => {
                alert(error)
            }
        )
    }

    let sum = 0;

    if (finished === false) {
        return (
            <div>
                <h3>Ostoskori</h3>
                <table>
                    <tbody>
                        <tr>
                            <td className="otsikot">Tuote</td>
                            <td className="otsikot">Hinta</td>
                            <td className="otsikot">Määrä</td>
                        </tr>
                        { cart?.map((product) => {
                            sum+=parseFloat(product.price);
                            return (
                                <tr key={uuid()}>
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
                        <tr key={uuid()}>
                            <td className="sumrow"></td>
                            <td className="sumrow">{sum.toFixed(2)} €</td>
                            <td className="sumrow"><a href="#" onClick={e => empty()}>Empty</a></td>
                        </tr>
                    </tbody>
                </table>
                {cart.length > 0 && 
                <>

                <h3 className="Tilaustiedot">Tilaustiedot</h3>
                <form onSubmit={order}>
                    <div className="form-group">
                        <label>Etunimi:</label>
                        <input className="form-control" onChange={e => setFirstname(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Suku:</label>
                        <input className="form-control" onChange={e => setLastname(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Osoite:</label>
                        <input className="form-control" onChange={e => setAddress(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Postinumero:</label>
                        <input className="form-control" onChange={e => setZip(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Postitoimipaikka:</label>
                        <input className="form-control" onChange={e => setCity(e.target.value)}/>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-primary">Tilaa</button>
                    </div>
                </form>
                </>
            }
            </div>
        )
    }
    else {
        return (<h3 style={{'padding-top': '100px'}}>Kiitos, kun tilasit!</h3>);
    }
}
