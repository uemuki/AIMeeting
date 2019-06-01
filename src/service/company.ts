import Room from '../model/room';
import { DB } from '../common/db';

export function addRoom(room: Room) {
  DB.company.roomList.push(room);
}

export function queryRoom() {
  return DB.company.roomList;
}
