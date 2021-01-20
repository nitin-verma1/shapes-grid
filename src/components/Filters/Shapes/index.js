// @flow
import * as React from 'react';

type Props = {
  shapesHeadings: $ReadOnlyArray<string>,
  colorFilters: Array<string>,
  shapeFilters: Array<string>,
  setColorFilter: (string) => any,
  setShapeFilter: (string) => any,
  removeShapeFilter: (string) => any,
  removeColorFilter: (string) => any,
};

type State = {
  shapes: Array<string>
};

class Shapes extends React.Component <Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      shapes: [],
    }
  }

  handleShapeClick: Function = (shape: string) => (event: SyntheticEvent<HTMLButtonElement>): void => {
    const alreadyPresent = this.props.shapeFilters.includes(shape) && this.state.shapes.includes(shape);
    if (alreadyPresent) {
      const updatedShapes = [...this.state.shapes.filter(s => s !== shape)];
      this.setState({
        ...this.state,
        shapes: [...updatedShapes]
      });
      this.props.removeShapeFilter(shape);
    } else {
      this.setState((prevState: State): State => ({
        ...prevState,
        shapes: [...prevState.shapes, shape]
      }));
      this.props.setShapeFilter(shape);
    }
  }

  render(): React.Node {
    return (
      <div className='d-flex flex-wrap'>
        {this.props.shapesHeadings.map((shape: string, index: number) => (
          <div 
            onClick={this.handleShapeClick(shape)} 
            key={`${shape}-${index}`} 
            className={`${this.state.shapes.includes(shape) ? 'text-dark' : 'text-secondary'} cursor-pointer text-uppercase font-italic mx-2 font-weight-bold`}
          >
            {shape}
          </div>
        ))}
      </div>
    );
  }
}

export default Shapes;