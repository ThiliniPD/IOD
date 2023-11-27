import AddCatForm from "./AddCatForm"
import { useState } from "react"

function SingleCat({name, id, latinName, imgUrl, onDeleteCat}) {
    function onClickDeleteBtn() {
        onDeleteCat(id)
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={imgUrl} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">{latinName}</h5>
                <button onClick={onClickDeleteBtn}>Delete</button>
            </div>
        </div>
    )  
}

function tranform(cat, idx, handleDeleteCat) { 
    return (
        <SingleCat key={idx} name={cat.name} id={cat.id} latinName={cat.latinName} imgUrl={cat.imgUrl} onDeleteCat={handleDeleteCat}/>
    )
}

/* props is an object 
   props = {
        list : [
            {
                id : 1 //....
                name : "Wild Cat" // Name of a cat as a string
                latinName : "bbb" // The latin name of the cat as a string
                imgUrl : "http://nnnn" // Image url of the cat as a string
            }  
        ]
    }
 */
function BigCats(props) {
    console.log(props.list)

    const[cats, setCats] = useState(props.list)

    const handleAddCat = (newCat) => {
        newCat.id = cats.length + 1; // unreliable but succinct
        setCats([...cats, newCat])
    }
    
    const handleDeleteCat = (deleteId) => {
        let newCats = cats.filter(cat => cat.id != deleteId)
        setCats(newCats)
        console.log("deleted the cat " + deleteId)
    }

    //let handleDeleteCat = props.onDeleteCat
    const catList = cats.map((cat, idx) => tranform(cat, idx, handleDeleteCat))

    return (
        <>
        <div className="List componentBox">
            {catList}
        </div>
        <AddCatForm onAddCat={handleAddCat} />
        </>
    )
}

export default BigCats


