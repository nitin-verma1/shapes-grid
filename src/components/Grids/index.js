// @flow
import * as React from 'react';
import ShapeContainer from './ShapesContainer';
import shapes from '../../utility/shapes.json';
import type { Shapes } from '../../types/shape_type';
import type { State as PropsState } from '../../reducers';
import { getUniqueFieldNames } from '../Filters/utility';

type Props = {
  ...PropsState
};

type State = {
  gridTitle: string
};

class Grids extends React.Component <Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      gridTitle: 'All items'
    };
  }

  componentDidUpdate (prevProps: Props, prevState: State) {
    if ((prevProps.colorFilters !== this.props.colorFilters) || (prevProps.shapeFilters !== this.props.shapeFilters)) {
      this.setGridTitle();
    }
  }

  setGridTitle: Function = (): void => {
    const { colorFilters, shapeFilters } = this.props;
    const totalShapeCount = getUniqueFieldNames('shape').length;
    const totalColorCount = getUniqueFieldNames('color').length;
    const cFilterLen = colorFilters.length;
    const sFilterLen = shapeFilters.length;
    let gridTitle = 'All items';
    if (
      (totalShapeCount === sFilterLen) && 
      (cFilterLen > 1 && cFilterLen < totalColorCount)
    ) {
      gridTitle = 'Multiple items';
    } else if (
      (totalColorCount === cFilterLen) && 
      (sFilterLen > 1 && sFilterLen < totalShapeCount)
    ) {
      gridTitle = 'Multiple items';
    } else if (totalShapeCount === sFilterLen && cFilterLen === 1) {
      gridTitle = `All ${colorFilters[0]} items`;
    } else if (totalColorCount === cFilterLen && sFilterLen === 1) {
      gridTitle = `All ${shapeFilters[0]} items`
    } else if (cFilterLen > 1 && cFilterLen < totalColorCount && sFilterLen === 1 ) {
      gridTitle = `Multiple ${shapeFilters[0]} items`;
    } else if (sFilterLen > 1 && cFilterLen < totalShapeCount && cFilterLen === 1) {
      gridTitle = `Multiple ${colorFilters[0]} items`;
    } else if (sFilterLen === 1 && cFilterLen === 1){
      gridTitle = `${shapeFilters[0]} ${colorFilters[0]} items`;
    } else if (sFilterLen === cFilterLen) {
      gridTitle = 'Multiple items';
    }

    this.setState({
      gridTitle
    });
  }

  getUpdatedData: Function = (shapes: Array<Shapes>): Array<Shapes> => {
    const colorFilters = this.props.colorFilters;
    const shapeFilters = this.props.shapeFilters;
    // eslint-disable-next-line array-callback-return
    let updatedArray = shapes.filter((item: Shapes): any => {
      if (shapeFilters.includes(item.shape) && colorFilters.length === 0) {
        return item;
      }
      if (colorFilters.includes(item.color) && shapeFilters.length === 0) {
        return item;
      }
      if (colorFilters.includes(item.color) && shapeFilters.includes(item.shape)) {
        return item;
      }
    });
    if (updatedArray.length > 0) {
      return updatedArray;
    }
    return shapes;
  };

  render (): React.Node {
    const updatedShapesAndColorsData = this.getUpdatedData(shapes);

    return (
      <>
        <div className='px-4 font-italic text-uppercase font-weight-bold text-dark h3 my-3'>
          {this.state.gridTitle}:
        </div>
        <div className='w-100 d-flex flex-wrap justify-content-start px-2'>
          {updatedShapesAndColorsData.map((shape: Shapes, index: number) => (
            <div key={shape.color + shape.id + index} className='p-4 border border-gray m-3 rounded-sm'>
              <ShapeContainer
                type={shape.shape}
                color={shape.color}
                width="200"
                height="120"
                innerWidth="200"
                innerHeight="120"
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Grids;