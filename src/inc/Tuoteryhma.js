import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Tuoteryhma({url, category}) {
    const [tuotteet, setTuotteet] = useState([]);

    useEffect(() => {
        if (category !== null) {
            axios.get(url + 'tuote/getproducts.php/' + category?.tuotenro)
            .then((response) => {
                const json = response.data;
                setTuotteet(json);
            }).catch(error => {
                if (error.response === undefined) {
                    alert(error);
                } else {
                    alert(error.response.data.error);
                }
            })
        }
    }, [category])
    
    return (
        <div>
            <h3>Products for {category?.name}</h3>
            {tuotteet.map(tuote => (
                <div key={tuote.tuotenro}>
                    <p>{tuote.tuotenimi}</p>
                    <div>
                        <img src={url + 'IMG/' + tuote.tuotenimi} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}
