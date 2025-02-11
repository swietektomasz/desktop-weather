import { Request } from "express";

export interface TypedRequestBody<T> extends Request {
  body: T;
}

export type LocationSearchRequest = {
  name: string;
};
