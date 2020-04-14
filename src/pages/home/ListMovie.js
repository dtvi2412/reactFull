import React, { Component } from "react";

import Movie from "./../../components/Movie";
import { connect } from "react-redux";
import * as action from "./../../redux/action";

class ListMovie extends Component {
  componentDidMount() {
    this.props.getListMovie();
  }
  componentWillUnmount() {
    console.log("willUnmout");
  }
  renderHTML = () => {
    return this.props.listMovie.map((items) => {
      return <Movie key={items.maPhim} movie={items} />;
    });
  };
  render() {
    return (
      <div className="container">
        <h3>List Movie</h3>
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listMovie: state.movieReducer.listMovie,
  };
};
//gui du lieu state len store
const mapDistpathToProps = (dispatch) => {
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI());
    },
  };
};
export default connect(mapStateToProps, mapDistpathToProps)(ListMovie);
