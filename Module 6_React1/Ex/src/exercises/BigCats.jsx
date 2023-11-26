
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
        ],
        onDeleteCat : fn() // This is a calback function
    }
 */
function BigCats(props) {
    console.log(props.list)

    //let handleDeleteCat = props.onDeleteCat
    const catList = props.list.map((cat, idx) => tranform(cat, idx, props.onDeleteCat))

    return (
        <div className="List componentBox">
            {catList}
        </div>
    )
}

export default BigCats


