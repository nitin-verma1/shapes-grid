import { connect } from 'react-redux';
import Filters from '../components/Filters';
import { setColorFilter, setShapeFilter, removeShapeFilter, removeColorFilter } from '../actions';

import type { State } from '../reducers';

const mapStateToProps: Function = (state: State): State => ({
  ...state
});

const mapDispatchToProps = {
  setColorFilter, setShapeFilter, removeShapeFilter, removeColorFilter
};

export default (connect(mapStateToProps, mapDispatchToProps)(Filters): any);