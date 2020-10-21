import { connect } from 'react-redux';
import { fetchGifs } from '../actions/gifActions';
import App from './App';

const mapStateToProps = state => {
  return {
    // TODO: Pass `gifs` prop
    gifs: state.gifs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // TODO: Pass `fetchGifs` prop
    fetchGifs: (searchQuery) => fetchGifs(searchQuery),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
