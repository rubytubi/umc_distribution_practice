import {BAD_REQUEST} from 'http-status-codes';

import {BaseError} from '../../config/error.js';
import {status} from '../../config/response.status.js';
import {flagResponseDTO, tempResponseDTO} from '../dtos/tempResponseDTO.js';

export const getTempData =
    () => {
      return tempResponseDTO('This is TEST! >.0');
    }

export function CheckFlag(flag) {
  if (flag == 1)
    throw new BaseError(status.BAD_REQUEST);
  else {
    return flagResponseDTO(flag);
  }
}
