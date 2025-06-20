import './App.css'
import ListOfFruitCards from './components/ListOfFruitCards';
import useFetchFruits from './hooks/useFetchFruits';

function App() {
  const {fruits} = useFetchFruits();

  return (
    <>
      <h1>Season Fruits</h1>
      <p className="read-the-docs">
        the most wonderful fruits
      </p>
      <ListOfFruitCards fruits={fruits} />
    </>
  )
}

export default App
