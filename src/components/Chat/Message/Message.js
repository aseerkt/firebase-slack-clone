import React from 'react';
import './Message.css';

function Message({ message: { message, userImage, user, timestamp } }) {
  return (
    <div className='message'>
      <img src={userImage} alt='userImage' />
      <div className='message__info'>
        <h4>
          <span>{user}</span>{' '}
          <span className='message__timestamp'>
            {timestamp?.toDate().toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
