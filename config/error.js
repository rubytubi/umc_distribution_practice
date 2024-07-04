export class BaseError extends Error {
  constructor(data) {
    super(data.message);
    this.data = data;
    this.status = data.status;

    const EMAIL_ALREADY_EXIST = 'EMAIL_ALREADY_EXISIT';
    const PARAMETER_IS_WRONG = 'PARAMETER_IS_WRONG';

    if (this.status === EMAIL_ALREADY_EXIST) {
      this.code = -1;
    }

    if (this.status === PARAMETER_IS_WRONG) {
      this.code = -1;
    }
  }
}