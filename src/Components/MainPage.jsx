import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getBooksList, getSeriessList } from '../redux/Thunk';
import { Link } from 'react-router-dom';
import "../Styles/Mainpage.css"
import Loader from './Loader';
import { FaStar } from 'react-icons/fa';
import RatingStars from 'react-rating-stars-component';

const MainPage = () => {
  const [pages, Setpages] = useState(1);
  const list = useSelector((e) => e.books)
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    search: "",
    by: "one",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "by" && value === input.by) {
      setInput({
        ...input,
        by: "",
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };
  const Searchbook = (e) => {
    e.preventDefault();
    console.log("Selected radio button:", input.by);
    const value = input.search;
    const type = input.by
    console.log(type)
    if (type === "one") {
      dispatch(getBooksList(value, pages))
    }
    else {
      dispatch(getSeriessList(value))
    }
  };
  return (

    <div className='main-page'>
      <form onSubmit={Searchbook}>
        <div className="search">
          <input
            autoComplete='off'
            type='text'
            name='search'
            value={input.search}
            onChange={handleChange}
          />
          <button type='submit'>Search</button></div>
        <div className="search-type">
          <input
            type='radio'
            name='by'
            value='one'
            checked={input.by === 'one'}
            onChange={handleChange}
          />{" "}
          Name
          <input
            type='radio'
            name='by'
            value='two'
            checked={input.by === 'two'}
            onChange={handleChange}
          />{" "}
          Group
        </div>
      </form>
      <div className="books-data">
        
        {input.search ? <>
          {list.BooksList ? <>
            {
              list.ListLoading ?  <Loader />  : <>
                {list.BooksList.map ? list.BooksList.map((a) => {
                  return (
                    <Link to={`/main-page/${a.best_book.id._text}`}
                      key={a.best_book.id._text} ><div className="single-book-card"
                      >  <img src={a.best_book.image_url._text} alt="Image Book" />
                        <div className="card-data">
                          <p className='card-title'><span>Title:</span> {a.best_book.title._text}</p>
                          <p className='card-author'> <span>Author Name:</span>{a.best_book.author.name._text}</p>
                          <p className='card-rating'>
                            <RatingStars
                              count={5} 
                              value={parseInt(a.average_rating._text)}  
                              size={24} 
                              activeColor="#ffd700" 
                              emptyIcon={<FaStar />} 
                              filledIcon={<FaStar />} 
                              edit={false} 
                            /></p>
                          <p className='card-date'>Date: {a.original_publication_day._text}-{a.original_publication_month._text}-{a.original_publication_year._text}</p></div>
                      </div></Link>
                  )
                }) : <div className="error">
                  * Network Error
                </div>
                }
              </>
            }
          </> : <>
            {list.GroupsList ? <>
              {list.ListLoading ? <><Loader /> </> : <>
                {
                  list.GroupsList.map ?
                    list.GroupsList.map((a) => {
                      return (
                        <Link to={`/main-page/group/${a.id._text}`} key={a.id._text} className="group-link">
                          <p><span>Access:</span> {a.access._text}</p>
                          <p>{a.title._cdata || a.title._text}</p>
                          <p>Last Activity: {a.last_activity_at._cdata}</p>
                          <img src={a.image_url._cdata} alt="image" />
                        </Link>
                      )
                    })
                    : <div className="error">
                      * Network Error
                    </div>
                }
              </>
              }
            </> : <>
              {/* No Data Found */}
            </>
            }
          </>
          }
        </>
          :
          <>

          </>
        }

      </div>
    </div>
  );
};

export default MainPage;
