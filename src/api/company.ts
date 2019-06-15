import * as Router from 'koa-router';
import Room from '../model/room';
import Result from '../model/result';
import { queryRoom, addRoom } from '../service/company';

let router = new Router();

router.get('/query', async ctx => {
  let roomList: Room[] = queryRoom();
  ctx.body = Result.success(roomList);
});

router.post('/addroom', async ctx => {
  let room: Room = ctx.request.body;
  ctx.body = addRoom(room);
});

export default router;
