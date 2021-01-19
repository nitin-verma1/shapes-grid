// @flow
import type { ActionCreater } from '../actions';
import { 
  SET_COLOR_FILTER, 
  SET_SHAPE_FILTER, 
  REMOVE_COLOR_FILTER, 
  REMOVE_SHAPE_FILTER 
} from '../actions';

export type State = {
  colorFilters: Array<string>,
  shapeFilters: Array<string>,
};

const initialState: State = {
  colorFilters: [],
  shapeFilters: [],
};

const getUpdatedFilterArray: Function = (array: Array<string>, value: string) => {
  return array.filter(item => item !== value);
};

export function shape_filters_reducer (state: State = initialState, action: ActionCreater): State {
  switch (action.type) {
    case SET_COLOR_FILTER:
      return {
        ...state,
        colorFilters: [...new Set([...state.colorFilters, action.payload])]
      };
    case SET_SHAPE_FILTER:
      return {
        ...state,
        shapeFilters: [...new Set([...state.shapeFilters, action.payload])]
      };
    case REMOVE_SHAPE_FILTER:
      return {
        ...state,
        shapeFilters: getUpdatedFilterArray(state.shapeFilters, action.payload)
      };
    case REMOVE_COLOR_FILTER:
      return {
        ...state,
        colorFilters: getUpdatedFilterArray(state.colorFilters, action.payload)
      };
    
    default:
      return state;
  }
}