import React, { useState, useEffect } from "react";
import axios from "axios";

//Näyttää yhden tuotteen sivustolla
export default function Asiakas({ url, asiakas }) {
  const [asiakastuotteet, setAsiakastuotteet] = useState([]);

  console.log(asiakas);

  /* Asiakkaan tekemän tilauksen tietojen hakeminen tietokannasta */
  useEffect(() => {
    if (asiakas !== null) {
      axios
        .get(url + "yllapito/orderedproducts2.php/" + asiakas?.id)
        .then((response) => {
          const json = response.data;
          setAsiakastuotteet(json);
        })
        .catch((error) => {
          if (error.response === undefined) {
            alert(error);
          } else {
            alert(error.response.data.error);
          }
        });
    }
  }, [asiakas]);

  /* Asiakkaan tekemän tilauksen tietojen näyttäminen */
  return (
    <div id="tuoteryhma" className="container">
      <div className="row">
        <h3>
          {asiakas?.firstname} {asiakas?.lastname}
        </h3>
        {asiakastuotteet.map((asiakastuote) => (
          <div key={asiakastuote.id} className="col-12 col-lg-4 col-xl-3 col">
            <p>{asiakastuote?.name}</p>
            <div>
              <img src={url + "IMG/" + asiakastuote?.image} alt="" />
            </div>
            <p>{asiakastuote?.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}
