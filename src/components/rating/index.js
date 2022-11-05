import './rating.css';
import ratingOrange from '../../assets/rating_orange.png';
import ratingGrey from '../../assets/rating_grey.png';

function Rating({rating}) {
  const range = [1, 2, 3, 4, 5]
  return (
    <div  className='rating'>
    {range.map((rangeElem) =>
rating >= rangeElem ? <img src={ratingOrange} alt={rating}  key={rangeElem.toString()}  className='star'/> : <img src={ratingGrey} alt={rating}  key={rangeElem.toString()}  className='star'/>)}
</div>
  );
}

export default Rating;