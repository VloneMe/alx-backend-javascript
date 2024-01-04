import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const rooms = [];

  for (const size of roomSizes) {
    const room = new ClassRoom(size);
    rooms.push(room);
  }

  return rooms;
}
