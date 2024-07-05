import {pool} from '../../config/db.config.js';
import {BaseError} from '../../config/error.js';
import {status} from '../../config/response.status.js';

import {confirmStoreNameQuery, insertReviewQuery, insertStoreQuery} from './storeSQL.js';

export const addStore = async (data) => {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log('연결 성공');

    const [confirm] = await conn.query(confirmStoreNameQuery, [data.name]);
    if (confirm[0].nameExist) {
      console.log('중복된 가게 존재');
      return -1;
    }

    const [ret] = await conn.query(
        insertStoreQuery,
        [data.regionId, data.name, data.address, data.starRating]);
    console.log('가게 추가 성공', ret.insertId);
    return ret.insertId;
  } catch (err) {
    console.error('쿼리문 오류', err);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  } finally {
    if (conn) conn.release();
  }
};

export const addReviewToDB = async (data) => {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log('연결 성공');

    const [ret] = await conn.query(
        insertReviewQuery,
        [data.storeId, data.userId, data.reviewBody, data.starRating]);
    console.log('리뷰 추가 성공', ret.insertId);

    return {
      id: ret.insertId,
      storeId: data.storeId,
      userId: data.userId,
      body: data.reviewBody,
      starRating: data.starRating,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  } catch (err) {
    console.error('쿼리문 오류', err);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  } finally {
    if (conn) conn.release();
  }
};
