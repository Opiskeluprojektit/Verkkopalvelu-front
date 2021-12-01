import React from "react";

//Näyttää yhden tuotteen sivustolla
export default function Tuote({ url,product,addToCart }) {
  return (
    <div>
      {/* yksittäisen tuotteen näyttäminen / AK */}
      <h5>{product?.name}</h5>
      <p>{product?.price}</p>
      <div>
        <img src={url + "IMG/" + product?.image} alt="" />
      </div>
      {/* Tuotteen lisäys ostoskoriin-painike /AK */}
      <p>{product?.price} €</p>
      <button class="btn-secondary" type="button" onClick={e => addToCart(product)}>
        Lisää <i className="bi bi-cart-fill mx-2"></i>
      </button>
    </div>
  );
}
