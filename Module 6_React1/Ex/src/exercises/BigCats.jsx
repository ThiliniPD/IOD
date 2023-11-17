
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
function BigCats(props) {
    console.log(props.list)

    const catList = props.list.map(tranform)

    return (
        <div className="List componentBox">
            {catList}
        </div>
    )
}

export default BigCats


