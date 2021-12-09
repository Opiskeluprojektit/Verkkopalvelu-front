import React,{useState} from 'react';

export default function Admin({url}) {
    const [newcategory, setNewcategory] = useState('');
    const [finished, setFinished] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category_id, setCategory_id] = useState('');


    function addCategory(e) {
        e.preventDefault();
        fetch(url + 'yllapito/admin.php',{
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newcategory: newcategory,

            })
        })
        .then (res => {
            return res.json();
        })
    }
    function addProduct(e) {
        e.preventDefault();
        fetch(url + 'yllapito/addproduct.php',{
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                price: price,
                image: image,
                category_id: category_id,

            })
        })
        .then (res => {
            return res.json();
        })
    }
    return (
        <div>
            <h3 className="Tilaustiedot">Kategorian lisäys</h3>
                <form onSubmit={addCategory}>
                    <div className="form-group">
                        <label>Kategorian nimi:</label>
                        <input className="form-control" onChange={e => setNewcategory(e.target.value)}/>
                    </div>

                    <div className="buttons">
                        <button className="btn btn-primary">Lisää</button>
                    </div>
                </form>
            <h3 className="Tilaustiedot">Tuotteen lisäys: </h3>
                <form onSubmit={addProduct}>
                        <div className="form-group">
                            <label>Tuotteen nimi:</label>
                            <input className="form-control" onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Tuotteen hinta:</label>
                            <input className="form-control" onChange={e => setPrice(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Tuotteen kuvan nimi kokonaisuudessaan:</label>
                            <input className="form-control" onChange={e => setImage(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Tuotteen kategorianumero:</label>
                            <input className="form-control" onChange={e => setCategory_id(e.target.value)}/>
                        </div>
                        <div className="buttons">
                            <button className="btn btn-primary">Lisää tuote</button>
                        </div>
                    </form>
        </div>
    )

}
