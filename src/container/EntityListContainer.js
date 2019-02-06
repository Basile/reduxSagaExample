import { connect } from 'react-redux';
import { put } from 'redux-saga/effects'
import * as actionTypes from '../reducer/actionTypes';
import EntityList from '../component/EntityList';

const mapStateToProps = state => ({
  entities: state.entities,
  error: state.error,
  congrats: state.congrats,
});

const mapDispatchToProps = (dispatch) => ({
  loadNewEntity: () => {
  	dispatch({ type: actionTypes.ENTITY_GET });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EntityList);
