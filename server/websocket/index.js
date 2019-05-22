const { addUser, removeUserBySocketId, emitToFriendsConnected } = require('./users');

const socketEvents = io => {
  io.on('connection', socket => {
    socket.on('login', user => {
      addUser(socket.id, user);
      emitToFriendsConnected(io, user.friends, 'friendLogged');
    });

    // socket.on('likeUser', user => {
    // emitToFriendsConnected(io, user.friends, 'userLiked');
    // });

    socket.on('logout', removeUserBySocketId(socket.id));
    socket.on('disconnect', removeUserBySocketId(socket.id));
  });
};

module.exports = socketEvents;
