import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleBook } from '../redux/Thunk';
import Loader from './Loader';
import { FaStar } from 'react-icons/fa';
import RatingStars from 'react-rating-stars-component';
const SingleBook = () => {
  const data =useSelector((d)=>d.books.SingleBook)
    const {id}=useParams();
    const dispatch=useDispatch()
    console.log(data)
   useEffect(()=>{
        dispatch(getSingleBook(id))
      },[])

  return (
    <>
    {data? <>
      <div class="book-container">
  <p class="book-title">{data.title._text || data.title._cdata}</p>
  <img src={data.image_url._text} alt="profile" />
  
  <p class="publication-date">{data.publication_day._text}-{data.publication_month._text}-{data.publication_year._text}</p>
       <RatingStars
        count={5} 
        value={data.average_rating._text}  
        size={24} 
        activeColor="#ffd700" 
        emptyIcon={<FaStar />} 
        filledIcon={<FaStar />} 
        edit={false}
       />
  <p class="publisher">Publisher: {data.publisher._text}</p>
  {/* <p class="url">Url: {data.url._cdata}</p> */}
  <div class="similar-books">
    <p>Similar Books:</p>
    <div class="similar-book-list">
      {data.similar_books.book.map((s) => {
        return (
          <div class="similar-book">
            <p class="similar-book-title">{s.title._cdata || s.title._text}</p>
            <img src={s.image_url._cdata} alt="similar book image" />
          </div>
        );
      })}
    </div>
  </div>
</div>

    </>:<><Loader/></>
    }
    </>
  )
}

export default SingleBook