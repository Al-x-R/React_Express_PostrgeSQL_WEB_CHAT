import React from 'react';
import { useSelector } from 'react-redux'

import './Messenger.scss';

const Messenger = () => {

  const chat = useSelector(state => state.chatReducer.currentChat)

  const activeChat = () => {
    return Object.keys(chat).length > 0
  }

  return (
    <div id='messenger' className='shadow-light'>
      {
        activeChat()
          ? <div id='messenger-wrap'>
            {/*<ChatHeader chat={chat} />*/}
            <div>header</div>
            <hr />
            <div>message box</div>
            <div>input </div>
            {/*<MessageBox chat={chat} />*/}
            {/*<MessageInput chat={chat} />*/}
          </div>
          : <p>No active chat</p>
      }
    </div>
  );
};

export default Messenger;
