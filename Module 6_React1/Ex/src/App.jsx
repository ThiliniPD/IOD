import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './exercises/Greeting'
import BigCats from './exercises/BigCats'
import Emoji from './exercises/Emoji'
import BigCats2 from './exercises/BigCats2'
import AddCatForm from './exercises/AddCatForm'

const defaultCats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/220px-TheCheethcat.jpg" },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', imgUrl: "https://cdn.create.vista.com/api/media/small/48430283/stock-photo-puma" },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', imgUrl: "https://cdn.britannica.com/20/77420-050-26F48228/Jaguar.jpg" },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', imgUrl: "https://cdn.britannica.com/30/136130-050-3370E37A/Leopard.jpg?w=400&h=300&c=crop" },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', imgUrl: "https://t4.ftcdn.net/jpg/01/35/97/83/360_F_135978399_qplk3WPu7JOA63JPCYVy1fb7MI4nefAL.jpg" },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', imgUrl: "https://cdn.britannica.com/52/170952-050-A545E35D/carnivore-Snow-leopard-regions-subcontinent-Asia-Indian.jpg" },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', imgUrl: "https://cdn.britannica.com/83/195983-138-66807699/numbers-tiger-populations.jpg?w=800&h=450&c=crop" },
]

function App() {
  const [count, setCount] = useState(0)

  const[cats, setCats] = useState(defaultCats)
  
  const handleAddCat = (newCat) => {
    newCat.id = cats.length + 1; // unreliable but succinct
    setCats([...cats, newCat])
  }

  const handleDeleteCat = (deleteId) => {
    let newCats = cats.filter(cat => cat.id != deleteId)
    setCats(newCats)
    console.log("deleted the cat " + deleteId)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Greeting name="Thilini"/>
      <Greeting/>
      <Greeting name="Thilini"><div>Have a nice day!</div></Greeting>

      <BigCats list={cats} onDeleteCat={handleDeleteCat}/>

      <Emoji/>

      <BigCats2  list={cats} />
      <AddCatForm onAddCat={handleAddCat} />
    </>
  )
}

export default App
