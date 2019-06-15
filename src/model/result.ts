// export default interface Result {
//   isSuccess: boolean,
//   message: string,
//   code: string,
//   data: any
// }

export default class Result {
  isSuccess: boolean;
  message: string;
  code: string;
  data: Object;

  constructor(isSuccess: boolean, message: string, code: string, data: Object) {
    this.isSuccess = isSuccess;
    this.message = message;
    this.code = code;
    this.data = data;
  }

  static success(data: Object) {
    let result = new Result(true, '', '', data);
    return result;
  }

  static error(message: string, code?: string, data?: Object) {
    let result = new Result(false, message, code, data);
    return result;
  }
}
