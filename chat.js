$(function () {
  var socket = io();
  var form = document.forms[0];
  var input = document.getElemenetById('m');

  $('form').submit(function() {
    socket.emit('chat message', input.value);
    input.value = '';
    return false;
  });

  socket.on('connect', function() {
    $('.connection-indicator').addClass('connected');
    console.log('connected:', socket.connected);
  });

  socket.on('disconnect', function() {
    $('.connection-indicator').removeClass('connected');
  });

  socket.on('chat message', function(msg) {
    $('#messages').append($('<li>').text(msg));
    console.log('got message', msg);
  });
});
