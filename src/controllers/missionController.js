import {response} from '../../config/response.js';
import {status} from '../../config/response.status.js';
import {addMission} from '../services/missionService.js';

export const addStoreMission = async (req, res, next) => {
  console.log('가게 미션 추가 요청');
  console.log('내용: ', req.body);

  const {storeId, missionBody} = req.body;

  if (!storeId || !missionBody) {
    return res.status(400).send(response(
        status.BAD_REQUEST,
        'store Id와 mission 내용은 필수로 작성해야하는 항목입니다.'));
  }

  try {
    const mission = await addMission(storeId, missionBody);
    res.status(201).send(
        response(status.BAD_REQUEST, '가게 미션 추가 성공'), mission);
  } catch (error) {
    console.error(error);
    res.status(500).send(
        response(status.INTERNAL_SERVER_ERROR, '내부 서버 오류'));
  }
}