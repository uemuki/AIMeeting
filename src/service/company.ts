import Room from '../model/room';
import Point from '../model/point';
import { DB } from '../common/db';

/**
 * 添加会议室信息
 * @param room 会议室
 */
export function addRoom(room: Room) {
  let conflict = checkRoomConflict(room);
  console.log('conflict', conflict);
  if (conflict) {
    return false;
  }

  DB.company.roomList.push(room);
  return DB.company.roomList;
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
  let roomList: Room[] = DB.company.roomList;
  for (let i = 0; i < roomList.length; i++) {
    console.log('in for', i);
    const se = compare(roomList[i].end, room.start) === Direction.LeftTop;
    const es = compare(roomList[i].start, room.end) === Direction.RightBottom;
    console.log('se:', se, 'es:', es);
    if (se && es) {
      return true;
    }
  }
  return false;
}

function compare(original: Point, current: Point) {
  let position: Direction;
  if (original === current) {
    position = Direction.Origin;
  } else if (current.x < original.x && current.y < original.y) {
    position = Direction.LeftTop;
  } else if (current.x > original.x && current.y < original.y) {
    position = Direction.RightTop;
  } else if (current.x < original.x && current.y > original.y) {
    position = Direction.LeftBottom;
  } else if (current.x > original.x && current.y > original.y) {
    position = Direction.RightBottom;
  }
  return position;
}

enum Direction {
  LeftTop,
  RightTop,
  LeftBottom,
  RightBottom,
  Origin
}
