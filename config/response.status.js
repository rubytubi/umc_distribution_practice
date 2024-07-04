// import {BAD_REQUEST, FORBIDDEN, INTERNAL_SERVER_ERROR, METHOD_NOT_ALLOWED,
// StatusCodes, UNAUTHORIZED} from 'http-status-codes';
import {StatusCodes} from 'http-status-codes';
export const status = {
  // success
  SUCCESS: {
    status: StatusCodes.OK,
    'isSuccess': true,
    'code': 2000,
    'message': 'SUCCESS!'
  },
  //  not found
  NOT_FOUND: {
    status: StatusCodes.OK,
    'isSuccess': true,
    'code': 'COMMON005',
    'message': '400 error'
  },

  // error
  // common err
  INTERNAL_SERVER_ERROR: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    'isSuccess': false,
    'code': 'COMMON000',
    'message': '서버 에러, 관리자에게 문의 바랍니다.'
  },
  BAD_REQUEST: {
    status: StatusCodes.BAD_REQUEST,
    'isSuccess': false,
    'code': 'COMMON001',
    'message': '잘못된 요청입니다.'
  },
  UNAUTHORIZED: {
    status: StatusCodes.UNAUTHORIZED,
    'isSuccess': false,
    'code': 'COMMON002',
    'message': '권한이 잘못되었습니다.'
  },
  METHOD_NOT_ALLOWED: {
    status: StatusCodes.METHOD_NOT_ALLOWED,
    'isSuccess': false,
    'code': 'COMMON3',
    'message': '지원하지 않는 Http Method 입니다.'
  },
  FORBIDDEN: {
    status: StatusCodes.FORBIDDEN,
    'isSuccess': false,
    'code': 'COMMON004',
    'message': '금지된 요청입니다.'
  },

  // member err
  MEMBER_NOT_FOUND: {
    status: StatusCodes.BAD_REQUEST,
    'isSuccess': false,
    'code': 'MEMBER4001',
    'message': '사용자가 없습니다.'
  },
  NICKNAME_NOT_EXIST: {
    status: StatusCodes.BAD_REQUEST,
    'isSuccess': false,
    'code': 'MEMBER4002',
    'message': '닉네임은 필수입니다.'
  },

  // article err
  ARTICLE_NOT_FOUND: {
    status: StatusCodes.NOT_FOUND,
    'isSuccess': false,
    'code': 'ARTICLE4001',
    'message': '게시글이 없습니다.'
  },

  // email already exist
  EMAIL_ALREADY_EXIST: {
    status: StatusCodes.CONFLICT,  // 409 Conflict
    isSuccess: false,
    code: 'EMAIL4001',
    message: 'This email is already in use.'
  }
};