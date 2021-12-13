import React,{useState, useEffect} from "react";
import axios from 'axios';

//Näyttää yhden tuotteen sivustolla
export default function Asiakas({ url,asiakas }) {

    const [asiakastuotteet, setAsiakasTuotteet] = useState();

    {/* Asiakkaan tekemän tilauksen tietojen hakeminen tietokannasta */}
    useEffect(() => {
        if (asiakas !== null) {
            axios.get(url + 'yllapito/orderedproducts2.php/' + asiakastuotteet?.id)
            .then((response) => {
                const json = response.data;
                setAsiakasTuotteet(json);
            }).catch(error => {
                if (error.response === undefined) {
                    alert(error);
                } else {
                    alert(error.response.data.error);
                }
            })
        }
    }, [asiakas])

  {/* Asiakkaan tekemän tilauksen tietojen näyttäminen */}
  return (
    <div className="container justify-content-center">
      <div className="row justify-content-center">
        <div className="col-6">
            {asiakastuotteet.map(asiakastuote => (
                <div key={asiakastuote.id}>

      {/* yksittäisen tuotteen näyttäminen / AK */}
      <h5>{asiakastuote.name}</h5>
      <p>{asiakastuote.firstname}</p>
      <div>
        <img src={url + "IMG/" + asiakastuote.image} alt="" />
      </div>
      </div>
      ))}

        </div>
      </div>
      
    </div>
  )
} 