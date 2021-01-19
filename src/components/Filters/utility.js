// @flow
import shapes from '../../utility/shapes.json';

export const getUniqueFieldNames = (field: string): Array<string> => {
  const uniqueShapes: Array<string> = [...new Set(shapes.map(i => i[field]))];
  return uniqueShapes;
};
