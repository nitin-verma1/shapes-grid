import { connect } from 'react-redux';

import Grids from '../components/Grids';

import type { State } from '../reducers';

const mapStateToProps: Function = (state): State => ({
  ...state
});

export default (connect(mapStateToProps)(Grids): any);