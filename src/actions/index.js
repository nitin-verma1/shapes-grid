// @flow
export type ActionCreater = {
  type: string,
  payload: any,
};
export type Dispatch = (action: ActionCreater) => any;

export const SET_SHAPE_FILTER: string = 'SET_SHAPE_FILTER';
export const SET_COLOR_FILTER: string = 'SET_COLOR_FILTER';
export const REMOVE_SHAPE_FILTER: string = 'REMOVE_SHAPE_FILTER';
export const REMOVE_COLOR_FILTER: string = 'REMOVE_COLOR_FILTER';

export const setColorFilter: Function = (payload: string): ActionCreater => ({ type: SET_COLOR_FILTER, payload });
export const setShapeFilter: Function = (payload: string): ActionCreater => ({ type: SET_SHAPE_FILTER, payload });
export const removeColorFilter: Function = (payload: string): ActionCreater => ({ type: REMOVE_COLOR_FILTER, payload });
export const removeShapeFilter: Function = (payload: string): ActionCreater => ({ type: REMOVE_SHAPE_FILTER, payload });