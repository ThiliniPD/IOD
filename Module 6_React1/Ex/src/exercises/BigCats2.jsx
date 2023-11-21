import { useState } from "react";

function SingleCat({name, latinName, imgUrl}) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={imgUrl} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">{latinName}</h5>
            </div>
        </div>
    )  
}

function tranform(cat, idx, array) { 
    return (
        <SingleCat key={idx} name={cat.name} latinName={cat.latinName} imgUrl={cat.imgUrl} />
    )
}

/* props is an object 
   props = {
        list : [
            {
                name : "Wild Cat" // Name of a cat as a string
                latinName : "bbb" // The latin name of the cat as a string
                imgUrl : "http://nnnn" // Image url of the cat as a string
            }
        ]
    }
 */
function BigCats2(props) {
    const [currentArray, setCurrentArray] = useState(props.list);

    const singleCats = currentArray.map(tranform)

    const handleSortAlphabetical = () => {
        let sortedCats = [...currentArray]
        sortedCats.sort((catA,catB) =>catA.name > catB.name ? 1 : -1)
        setCurrentArray(sortedCats)
    }

    const handleReverseArray = () => {
        let reverseCats = [...currentArray]
        reverseCats.reverse()
        setCurrentArray(reverseCats)
    
    }

    const handlePanthers = () => {
        let filteredCats = currentArray.filter(cat => cat.latinName.startsWith("Panther"))
        setCurrentArray(filteredCats)
    }

    const handleReset = () => {
        setCurrentArray(props.list)
    }

    return (
        <div>
            <div className="List componentBox">{singleCats}</div>
            <button onClick={handleSortAlphabetical}>Sort by Name</button>
            <button onClick={handleReverseArray}>Reverse Array</button>    
            <button onClick={handlePanthers}>Show Panthers</button> 
            <button onClick={handleReset}>Reset List</button> 

        </div>
    )
}

export default BigCats2

