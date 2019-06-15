import Point from './point';

export default interface Room {
  [key: string]: any;
  //房间位置X
  start: Point;
  // start: {[key: string]:Point};
  //房间位置Y
  end: Point;
  // end: {[key: string]:Point};

  //房间限制人数
  limit: number;

  //房间名称
  name: string;

  // 创建时间
  gmt_created?: string;

  // 开始使用时间
  start_time?: string;
  
  // 使用时长
  duration?: number
}
