import Point from './point';

export default interface Room {
  //房间位置X
  start: Point;

  //房间位置Y
  end: Point;

  //房间限制人数
  limit: number;

  //房间名称
  name: string;
}
