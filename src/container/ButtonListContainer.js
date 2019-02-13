import { connect } from 'react-redux';
import * as actionTypes from '../reducer/actionTypes';
import ButtonList from '../component/ButtonList';

const mapStateToProps = state => ({
  allButtonsClicked: state.allButtonsClicked,
});

const mapDispatchToProps = (dispatch) => ({
  clickButton1: () => {
    dispatch({ type: actionTypes.BUTTON_1_CLICK });
  },
  clickButton2: () => {
    dispatch({ type: actionTypes.BUTTON_2_CLICK });
  },
  clickButton3: () => {
    dispatch({ type: actionTypes.BUTTON_3_CLICK });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList);
