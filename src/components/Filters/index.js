// @flow
import * as React from 'react';
import Colors from './Colors';
import Shapes from './Shapes';
import { getUniqueFieldNames } from './utility';

type Props = {
  colorFilters: Array<string>,
  shapeFilters: Array<string>,
  setColorFilter: (string) => any,
  setShapeFilter: (string) => any,
  removeShapeFilter: (string) => any,
  removeColorFilter: (string) => any,
};

function Filters(props: Props): React.Node {
  const shapesHeadings = getUniqueFieldNames('shape');
  const colorHeadings = getUniqueFieldNames('color');

  return (
    <div className='d-flex flex-wrap w-100 justify-content-between align-items-center px-3 mt-2 mb-5'>
      <Shapes {...props} shapesHeadings={shapesHeadings} />
      <Colors {...props} colorHeadings={colorHeadings} />
    </div>
  );
}

export default Filters;