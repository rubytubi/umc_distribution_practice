import {BaseError} from '../../config/error';
import {status} from '../../config/response.status';
import {addReviewDTO, addStoreResDTO} from '../dtos/storeDTO';
import {addNewStore, addReviewToDB} from '../models/storeDao';

// 가게 등록
export const addStoreToDB = async (body) => {
  try {
    const {regionId, name, address, starRating} = body;

    // 새 가게 추가
    const joinNewStoreData =
        await addNewStore({regionId, name, address, starRating});

    if (joinNewStoreData === -1) {
      throw new BaseError(
          status.STORENAME_ALREADY_EXISTS.status,
          status.STORENAME_ALREADY_EXISTS.message);
    }

    console.log('joinNewStoreData: ', joinNewStoreData);

    return addStoreResDTO(
        {id: joinNewStoreData, regionId, name, address, starRating});
  } catch (error) {
    console.error('새 가게 추가 오류: ', error);
    throw new BaseError(
        status.INTERNAL_SERVER_ERROR.status,
        status.INTERNAL_SERVER_ERROR.message);
  }
};

// 리뷰 추가
export const addReview = async (body) => {
  try {
    const {storeId, userId, reviewBody, starRating} = body;

    // 새 리뷰 추가
    const newReviewData =
        await addReviewToDB({storeId, userId, reviewBody, starRating});

    if (newReviewData === -1) {
      throw new BaseError(
          status.PARAMETER_IS_WRONG.status, status.PARAMETER_IS_WRONG.message);
    }

    return addReviewDTO(newReviewData);
  } catch (error) {
    console.error('리뷰 추가 에러: ', error);
    throw new BaseError(
        status.INTERNAL_SERVER_ERROR.status,
        status.INTERNAL_SERVER_ERROR.message);
  }
};
