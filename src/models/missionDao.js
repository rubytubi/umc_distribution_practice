import {pool} from '../../config/db.config';
import {BaseError} from '../../config/error';
import {status} from '../../config/response.status';

import {addMissionSQL, missionExistSQL} from './missionSQL';

export const addMissionDB = async (data) => {
  let conn;
  try {
    conn = await pool.getConnection();

    const [missionExistResult] =
        await conn.query(missionExistSQL, [data.storeId, data.body]);
    if (missionExistResult[0].MissionExitAlready) {
      throw new BaseError(status.MISSION_ALREADY_EXIST, '이미 존재하는 미션');
    }

    const [ret] =
        await conn.query(addMissionSQL, [data.storeId, data.body, data.points]);
    return {
      id: ret.insertId,
      storeId: data.storeId,
      body: data.body,
      points: data.points,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  } catch (err) {
    if (err instanceof BaseError) {
      throw err;
    } else {
      throw new BaseError(status.DATABASE_ERROR, 'DB 오류 발생');
    }
  } finally {
    if (conn) conn.release();
  }
};
