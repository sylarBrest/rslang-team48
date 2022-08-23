export const PORT = 3000;

export const HOST = `http://localhost:${PORT}`;

export enum EStatusCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
}

export enum EUrl {
  SIGNIN = '/signin',
  WORDS = '/words',
  USERS = '/users',
  TOKENS = '/tokens',
  AGGREGATED = '/aggregatedWords',
  STATISTICS = '/statistics',
  SETTINGS = '/settings',
}

export enum EHttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
}
