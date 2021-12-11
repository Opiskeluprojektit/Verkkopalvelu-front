import React,{useState} from 'react';

export default function Admin({url}) {
    const [newcategory, setNewcategory] = useState('');
    // const [finished, setFinished] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [files, setFiles] = useState();

    console.log(files)


    const onImageChange = (event) => {
        setFiles(event.target.files[0]);
        setImage(event.target.files[0].name)
    }

    function addCategory(e) {
        e.preventDefault();
        fetch(url + 'yllapito/admin.php',{
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newcategory: newcategory
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
                category_id: category_id

            })
        })
        .then (res => {
            return res.json();
        })
    }

  /*   const addPhoto = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('File', files)
        fetch(url + 'yllapito/addphoto.php',{
            method: 'POST',
            body: formData,
            })
    } */

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
                       {/*  <div className="form-group">
                            <label>Tuotteen kuvan nimi kokonaisuudessaan:</label>
                            <input className="form-control" onChange={e => setImage(e.target.value)}/>
                        </div> */}
                        <div className="form-group">
                            <label>Tuotteen kategorianumero:</label>
                            <input className="form-control" onChange={e => setCategory_id(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                        <label for="formFile" class="form-label">Tuotteen kuvan lisäys:</label>
                        <input class="form-control" onChange={onImageChange} type="file" id="formFile" name="file[]" />
                        </div>
                        <div className="buttons">
                            <button className="btn btn-primary">Lisää tuote</button>
                        </div>
                    </form>



            <h3 className='Tilaustiedot'>Asiakkaan ostamat tuotteet</h3>
            <div>
                        {/* Asiakas, tilaus, tuotteen nimi, määrä, hinta? */}
            </div>




        </div>
    )

}
