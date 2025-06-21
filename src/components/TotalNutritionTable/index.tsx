import type { Nutrition } from '../../utils/interfaces';
import './index.css'

type Props = {
  total: Nutrition;
  count: number;
};

const TotalNutritionTable: React.FC<Props> = ({ total, count }) => (
  <div className="card p-3 shadow-sm text-start">
    <h5 className="mb-3 text-gold-24-2">General Information</h5>
    <div className='d-flex flex-row justify-content-between'>
      <p className='text-gold-16 fw-bold'>No. of Found Products:</p>
      <p className='text-black-16-p'>{count}</p>
    </div>
    <p className='text-gold-16-2'>Nutritional properties of found products</p>
    <>
      <div className='d-flex flex-row justify-content-between'>
        <p className='text-gold-16 fw-bold'>Total calories:</p>
        <p className='text-black-16-p'>{total.calories}</p>
      </div>
      <div className='d-flex flex-row justify-content-between'>
        <p className='text-gold-16 fw-bold'>Total fat:</p>
        <p className='text-black-16-p'>{total.fat}</p>
      </div>
      <div className=' d-flex flex-row justify-content-between'>
        <p className='text-gold-16 fw-bold'>Total sugar:</p>
        <p className='text-black-16-p'>{total.sugar}</p>
      </div>
      <div className=' d-flex flex-row justify-content-between'>
        <p className='text-gold-16 fw-bold'>Total carbohydrates:</p>
        <p className='text-black-16-p'>{total.carbohydrates}</p>
      </div>
      <div className=' d-flex flex-row justify-content-between'>
        <p className='text-gold-16 fw-bold'>Total protein:</p>
        <p className='text-black-16-p'>{total.protein}</p>
      </div>
    </>
  </div>
);

export default TotalNutritionTable;
