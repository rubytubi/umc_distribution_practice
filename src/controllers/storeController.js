import {response} from '../../config/response.js';
import {status} from '../../config/response.status.js';
import {addReview, addStoreToDB} from '../services/storeService.js';

export const storeAdd = async (req, res, next) => {
  console.log('가게 추가 요청');
  console.log('body: ', req.body);

  try {
    const ret = await addStoreToDB(req.body);

    console.log('가게 추가 결과: ', ret);
    res.status(status.OK.status).send(response(status.OK, ret));
  } catch (error) {
    console.error('가게 추가 실패: ', error);
    res.status(error.status || status.INTERNAL_SERVER_ERROR.status)
        .send(response(status.INTERNAL_SERVER_ERROR, null));
  }
};

export const addStoreReview = async (req, res, next) => {
  console.log('리뷰 추가 요청');
  console.log('body: ', req.body);

  try {
    const ret = await addReview(req.body);
    res.status(status.OK.status).send(response(status.OK, ret));
  } catch (error) {
    console.error('리뷰 추가 오류', error);
    res.status(error.status || status.BAD_REQUEST.status)
        .send(response(status.PARAMETER_IS_WRONG, null));
  }
};
