import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Admin({url, setAsiakas}) {
    const [newcategory, setNewcategory] = useState('');
    // const [finished, setFinished] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [files, setFiles] = useState();
    const [ordered, setOrdered] = useState([]);

    console.log(files)
    console.log(ordered);


    {/* Kuvan lisäys tietokantaan ja IMG-kansioon tuotteen lisäyksen yhteydessä */}
    const onImageChange = (event) => {
        setFiles(event.target.files[0]);
        setImage(event.target.files[0].name)
    } 


    const uploadImage = () => {
        const formData = new FormData();
        formData.append('File', files);

        console.log(files)

        fetch(url + 'yllapito/addphoto.php',{
            method: 'POST',
            body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        }).catch((error) => {
            console.log('Error:', error);
        })
        };


    {/* Uuden tuotekategorian lisäys */}
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

    {/* Uuden tuotteen lisäys */}
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

    {/* Tilauksien haku tietokannasta */}
    useEffect(() => {
        axios.get(url + 'yllapito/orderedproducts.php')
          .then((response) => {
            const json = response.data;
            setOrdered(json);
            setAsiakas(json[0]);
          }).catch (error => {
            if (error.response === undefined) {
              alert(error);
            } else {
              alert(error.response.data.error);
            }
          })
      },[])


    {/* Uusien tuoteryhmän (= kategorian) ja tuotteen lisäyksen ylläpitäjälle näkyvä osuus */}
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
                        <input class="form-control" onChange={onImageChange} type="file" id="formFile" />
                        </div>
                        <div className="buttons">
                            <button onClick={uploadImage} className="btn btn-primary">Lisää tuote</button>
                        </div>
                    </form>


                    {/* Asiakkaan tilaamien tuotteiden näyttäminen tilauksittain */}
                    <div className="row">
                        <h3 className='Tilaustiedot'>Asiakkaan ostamat tuotteet</h3>
                            {ordered.map(asiakas => (
                                <div key={asiakas.id} className="col-12 col-lg-4 col-xl-3 col">
                                        <Link
                                        to={{
                                        pathname: '/Asiakas',
                                        state: {
                                            id: asiakas.id,
                                            name: asiakas.name,
                                            firstname: asiakas.firstname,
                                            lastname: asiakas.lastname,
                                            price: asiakas.price,
                                            image: asiakas.image
                                        }
                                        }}>

                                        <p>{asiakas.firstname} {asiakas.lastname}</p>
                                    </Link>
                                </div>
                            ))}
                    </div>    
        </div>
    )

}
