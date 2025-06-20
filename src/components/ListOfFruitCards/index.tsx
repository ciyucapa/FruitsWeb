import FruitCard from "../FruitCard";
import type { FruistProps } from '../../utils/interfaces';


const ListOfFruitCards: React.FC<FruistProps> = ({ fruits }) => {
  console.log("datos 1:", fruits);

  return (
    <div className="row">
      <h2>Listado de frutas</h2>
      {fruits.map((fruit) => (
        <div key={fruit.id} className="col-md-3 mb-4">
          <FruitCard fruit={fruit} />
        </div>
      ))}
    </div>
  );
};

export default ListOfFruitCards;
