import SET_ERROR from '../../actions/common/set_error';

function setError(error) {
  return {type: SET_ERROR, payload: error}
}

export default setError;