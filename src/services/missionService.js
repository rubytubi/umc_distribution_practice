import {BaseError} from '../../config/error';
import {status} from '../../config/response.status';
import {missionResDTO} from '../dtos/missionDTO'
import {addMissionDB} from '../models/missionDao';

export const addMission = async (body) => {
  const newMission = await addMissionDB(
      {storeId: body.storeId, body: body.body, points: body.points});

  if (newMission === -1) {
    throw new BaseError(status.MISSION_ALREADY_EXIST);
  }

  return missionResDTO(newMission);
}