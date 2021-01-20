// @flow
import * as React from 'react';
import Filters from '../containers/Filters';
import Grids from '../containers/Grids';

function App (props: {}): React.Node {
  const Header: Function = (): React.Node => (
    <div className='h4 text-uppercase font-weight-bold p-4 text-white bg-dark d-flex justify-content-start w-100'>
      Shapes
    </div>
  );

  return (
    <div className='container-fluid'>
      {Header()}
      <Filters />
      <Grids />
    </div>
  );
}

export default App;