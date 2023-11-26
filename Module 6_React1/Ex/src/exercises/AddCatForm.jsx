import { useState } from "react";

function AddCatForm({ onAddCat, onDeleteCat }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ id, name, latinName, imgUrl:image });
  };

/*   handleSubmit = (e) => {
    e.preventDefault();
    onDeleteCat({ id, name, latinName, imgUrl:image });
  };

*/
/*
  const handleSubmitUncontrolled = (e) => {
    e.preventDefault();
    // Creates key-value pair object with form input names/values
    const data = new FormData(e.target);
    console.log(data)
    console.log(Object.fromEntries(data))
    onAddMovie(Object.fromEntries(data));
  }  
*/


  return (
    <div className="AddCatForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Cat name:
          <input
            name="name"
            value={name} // needed for controlled components but NOT uncontrolled
            //defaultValue="" // - needed for uncontrolled components but NOT controlled
            onChange={(e) => setName(e.target.value)} // needed for controlled components but NOT uncontrolled
          />
        </label>
        <label>
          Latin name:
          <input
            name="latinName"
            type="text"
            value={latinName} // needed for controlled components but NOT uncontrolled
            //defaultValue="" // - needed for uncontrolled components but NOT controlled
            onChange={(e) => setLatinName(e.target.value)} // needed for controlled components but NOT uncontrolled
          />
        </label>
        <label>
          Image:
          <input
            name="image"
            type="text"
            value={image}// needed for controlled components but NOT uncontrolled
            //defaultValue="" // - needed for uncontrolled components but NOT controlled
            onChange={(e) => setImage(e.target.value)} // needed for controlled components but NOT uncontrolled
          />
        </label>        
        <button >Add Cat</button>
        
      </form>
    </div>
  );
}

export default AddCatForm