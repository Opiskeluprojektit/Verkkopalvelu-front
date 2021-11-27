import React from 'react'


//Näyttää yhden tuotteen sivustolla
export default function Tuote({product, addToCart}) {
    return (
        <div>

            {/* yksittäisen tuotteen näyttäminen / AK */}
            {product?.name} 
            {/* Tuotteen lisäys ostoskoriin-painike /AK */}
            <button class="btn-secondary" type="button">Lisää <i className="bi bi-cart-fill mx-2"></i></button>  

        </div>
    )
}
