import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {getSingleGroupData} from "../redux/Thunk"
import Loader from './Loader';
const GroupData = () => {
  const v=useSelector((s)=>s.books.groupData)
    const dispatch=useDispatch();
    const {group}=useParams();
    useEffect(()=>{
     dispatch(getSingleGroupData(group))
    },[])
     return (
      <div class="group-container">
      <h1>Group</h1>
      <div class="group-details">
        {v ? (
        <>
          <p class="access">Access: {v.access._text}</p>
          <p class="title">{v.title._text}</p>
          <p class="location">{v.location._cdata}</p>
          <p class="last-activity">Last Activity: {v.last_activity_at._text}</p>
          <img className='im' src={v.image_url._cdata} alt="group image" />
          <h1 class="users-heading">Users:</h1>
          <div class="users-list">
            {v.members.group_user.map((s) => {
              return (
                <div class="user">
                  <p>{s.user.first_name._text} {s.user.last_name._text}</p>
                  <img src={s.user.p2_image_url._text} alt="user image" />
                </div>
              );
            })}
          </div>
        </>
        ) : <Loader/>}
      </div>
    </div>
    
  )
}

export default GroupData