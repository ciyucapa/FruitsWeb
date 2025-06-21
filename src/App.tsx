import './App.css'
import ListOfFruitCards from './components/ListOfFruitCards';
import useFetchFruits from './hooks/useFetchFruits';

function App() {
  const {fruits} = useFetchFruits();

  return (
    <div className="container-fluid containerFruits">
      <h1 className='titleCard'>Season Fruits</h1>
      <p className="textCard">
        the most wonderful fruits
      </p>
      <ListOfFruitCards fruits={fruits} />
    </div>
  )
}

export default App
