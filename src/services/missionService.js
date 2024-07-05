import {BaseError} from '../../config/error.js';
import {status} from '../../config/response.status.js';
import {missionResDTO} from '../dtos/missionDTO.js'
import {addMissionDB} from '../models/missionDao.js';

export const addMission = async (body) => {
  const newMission = await addMissionDB(
      {storeId: body.storeId, body: body.body, points: body.points});

  if (newMission === -1) {
    throw new BaseError(status.MISSION_ALREADY_EXIST);
  }

  return missionResDTO(newMission);
}