import * as Router from 'koa-router';
import Room from '../model/room';
import Result from '../model/result';
import { queryRoom, addRoom } from '../service/company';

let router = new Router();

router.get('/query', async ctx => {
  let roomList: Room[] = queryRoom();

  //TODO  定义 Result 模型，并返回值
  ctx.body = {
    isSuccess: true,
    message: '',
    code: '',
    data: roomList
  };
});

router.post('/addroom', async ctx => {
  let room: Room = ctx.request.body;

  const res: Result = {
    isSuccess: true,
    message: '',
    code: '200',
    data: addRoom(room)
  };

  console.log('addRoom(room)-res:',res.data);
  console.log('addRoom(room)-type:',typeof res.data);

  if (typeof res.data === 'boolean') {
    res.isSuccess = false;
    res.code = '300';
    res.message = '房间位置与已有房间冲突';
  }

  //TODO  定义 Result 模型，并返回值
  ctx.body = res;
});

export default router;
