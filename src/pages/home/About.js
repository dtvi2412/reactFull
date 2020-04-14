import React, { useState, useEffect } from "react";
import Axios from "axios";
import Movie from "./../../components/Movie";

export default function About() {
  const [state, setState] = useState({ listMovie: [] });
  useEffect(() => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    })
      .then((result) => {
        setState({
          listMovie: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderHTML = () => {
    return state.listMovie.map((item) => {
      return <Movie key={item.maPhim} movie={item} />;
    });
  };
  return (
    <div className="container">
      <div className="row">{renderHTML()}</div>
    </div>
  );
}
