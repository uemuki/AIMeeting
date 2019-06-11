import Room from '../model/room';
import Point from '../model/point';
import { DB } from '../common/db';
import Result from '../model/result';

/**
 * 添加会议室信息
 * @param room 会议室
 */
export function addRoom(room: Room): Result {
  let conflict = checkRoomConflict(room);
  if (conflict) {
    return Result.error('位置冲突');
  }

  DB.company.roomList.push(room);
  return Result.success(room);
}

/**
 * 查询会议室信息
 */
export function queryRoom() {
  return DB.company.roomList;
}

/**
 * 判断房间位置是否冲突
 * 根据中心点的距离，是否小于边长
 * @param room 房间
 */
function checkRoomConflict(room: Room): boolean {
  DB.company.roomList = DB.company.roomList || [];

  function getCenter(room: Room): Point {
    return {
      x: (room.start.x + room.end.x) / 2,
      y: (room.start.y + room.end.y) / 2
    };
  }

  function getWidth(room: Room): number {
    return room.end.x - room.start.x;
  }

  function getHeight(room: Room): number {
    return room.end.y - room.start.y;
  }

  let roomCenter: Point = getCenter(room);
  let roomWidth = getWidth(room);
  let roomHeight = getHeight(room);
  for (let temp of DB.company.roomList) {
    let tempCenter: Point = getCenter(temp);
    let tempWidth = getWidth(temp);
    let tempHeight = getHeight(temp);

    if (
      Math.abs(roomCenter.x - tempCenter.x) <
        Math.abs(roomWidth + tempWidth) / 2 &&
      Math.abs(roomCenter.y - tempCenter.y) <
        Math.abs(roomHeight + tempHeight) / 2
    ) {
      return true;
    }
  }

  return false;
}
