import React,{useState} from 'react';

export default function Admin({url}) {
    const [newcategory, setNewcategory] = useState('');
    const [finished, setFinished] = useState(false);


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
<<<<<<< HEAD
/*         .then (
            (res) => {
                //  empty();  
                setFinished(true);
            }, (error) => {
                alert(error)
            }
        ) */
=======
        // .then (
        //     (res) => {
        //         // empty();  
        //         setFinished(true);
        //     }, (error) => {
        //         alert(error)
        //     }
        // )
>>>>>>> 6e40f768067d0cb1947308ed72672643d0569db4
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
            
        </div>
    )

}
