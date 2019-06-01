import * as Router from 'koa-router';
import Room from '../model/room';
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
  addRoom(room);

  //TODO  定义 Result 模型，并返回值
});

export default router;
