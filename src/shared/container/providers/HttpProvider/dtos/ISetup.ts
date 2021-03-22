/* eslint-disable @typescript-eslint/no-explicit-any */
import { IHeaders } from './IHeaders';

interface IHttpSetup extends IHeaders {
  baseURL: string;
  params?: any;
}

export { IHttpSetup };
