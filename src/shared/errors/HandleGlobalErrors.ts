import { Request, Response, NextFunction } from 'express';

import { AppError } from './AppError';

function handleGlobalErrors(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Response {
  console.log(error);

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'internal server error',
  });
}

export { handleGlobalErrors };
