import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../Message/Message'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './MessageBox.scss';

const MessageBox = ({ chat }) => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.authReducer.user);


  const [loading, setLoading] = useState(false);

  return (
    <div onScroll={() => {
    }} id='msg-box'>
      {
        loading
          ? <p className='loader m-0'><FontAwesomeIcon icon='spinner' className='fa-spin'/></p>
          : null
      }
      {
        chat.Messages.map((message, index) => {
          return <Message
            user={user}
            chat={chat}
            message={message}
            index={index}
            key={message.id}
          />;
        })
      }
    </div>
  );
};

export default MessageBox;
