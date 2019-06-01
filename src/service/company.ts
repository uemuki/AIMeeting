import Room from '../model/room';
import Point from '../model/point';
import { DB } from '../common/db';

/**
 * 添加会议室信息
 * @param room 会议室
 */
export function addRoom(room: Room) {
  let conflict = checkRoomConflict(room);
  if (conflict) {
    return false;
  }

  DB.company.roomList.push(room);
}

/**
 * TODO 完善代码
 * 查询会议室信息
 */
export function queryRoom(): Room[] {
  return [];
}

/**
 * TODO 完善代码
 * 判断房间位置是否冲突
 * @param room 房间
 */
function checkRoomConflict(room: Room): boolean {
  return false;
}
