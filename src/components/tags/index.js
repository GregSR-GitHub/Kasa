import './tags.css';

function Tags({tagsList}) {
  return (
    <div className='tags'>
                        {tagsList.map((tag) => <span key={tag}  className='tag'>{tag}</span> )}
                </div>
  );
}

export default Tags;