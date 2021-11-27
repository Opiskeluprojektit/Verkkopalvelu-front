import React from "react";

//Näyttää yhden tuotteen sivustolla
export default function Tuote({ product, addToCart, url }) {
  return (
    <div>
      {/* yksittäisen tuotteen näyttäminen / AK */}
      <p>{product?.name}</p>
      <div>
        <img src={url + "IMG/" + product?.name + ".png"} alt="" />
      </div>
      {/* Tuotteen lisäys ostoskoriin-painike /AK */}
      <button class="btn-secondary" type="button">
        Lisää <i className="bi bi-cart-fill mx-2"></i>
      </button>
    </div>
  );
}
