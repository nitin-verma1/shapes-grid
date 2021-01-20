// @flow
import * as React from 'react';

type Props = {
  colorHeadings: $ReadOnlyArray<string>,
  colorFilters: Array<string>,
  shapeFilters: Array<string>,
  setColorFilter: (string) => any,
  setShapeFilter: (string) => any,
  removeShapeFilter: (string) => any,
  removeColorFilter: (string) => any,
};

type State = {
  colors: Array<string>
};

class Colors extends React.Component <Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      colors: [],
    }
  }

  handleColorClick: Function = (color: string) => (event: SyntheticEvent<HTMLButtonElement>): void => {
    const alreadyPresent = this.props.colorFilters.includes(color) && this.state.colors.includes(color);
    if (alreadyPresent) {
      const updatedColors = [...this.state.colors.filter(s => s !== color)];
      this.setState({
        ...this.state,
        colors: [...updatedColors]
      });
      this.props.removeColorFilter(color);
    } else {
      this.setState((prevState: State): State => ({
        ...prevState,
        colors: [...prevState.colors, color]
      }));
      this.props.setColorFilter(color);
    }
  }

  render (): React.Node {
    return (
      <div className='d-flex flex-wrap'>
        {this.props.colorHeadings.map((color: string, index: number) => (
          <div 
            onClick={this.handleColorClick(color)} 
            key={`${color}-${index}`} 
            className={`p-3 mx-2 cursor-pointer ${this.state.colors.includes(color) ? 'color-box-border' : 'border border-light'}`} 
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    );
  }
}

export default Colors;