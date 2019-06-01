import Pointer from './point';

export default interface Room {
  //房间位置X
  start: Pointer;

  //房间位置Y
  end: Pointer;

  //房间限制人数
  limit: number;

  //房间名称
  name: string;
}
