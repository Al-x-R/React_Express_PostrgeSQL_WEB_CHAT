import { useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import {onlineFriends, onlineFriend, offlineFriend} from '../../../store/actions/chat'

function useSocket(user, dispatch) {

  useEffect(() => {

    const socket = socketIOClient.connect('http://localhost:3000');

    socket.emit('join', user);

    socket.on('typing', (user) => {
      console.log('Event', user)
    })

    socket.on('friends', (friends) => {
      console.log("Friends", friends);
      dispatch(onlineFriends(friends))
    })

    socket.on('online', (user) => {
      console.log("Online", user);
      dispatch(onlineFriend(user))
    })

    socket.on('offline', (user) => {
      console.log("Offline", user);
      dispatch(offlineFriend(user))
    })

  }, [dispatch]);
}

export default useSocket;