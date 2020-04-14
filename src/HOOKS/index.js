import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";

export default function HOOKS() {
  const [number, setNumber] = useState(0);
  const handleTangSo = () => {
    setNumber(number + 1);
  };
  useEffect(() => {
    /**
     * Tuong ung componentDitMount , componentDidUpdate , componentWillUnMount ben class Component
     * Neu nhu tham so thu 2 cua useEffect la cai mang rong thi no se tuong duong la component DidMount o  ben class
     * Neu nhu tham so thu 2 cua useEffect  la [number] (nhan vao state thay doi ) => componentDidUpdate
     */
    console.log("useEffect");
  }, [number]);

  useEffect(() => {
    /**
     * Neu nhu return ve 1 arrow funtion =>componentWillUnMOunt ben Class
     */
    let interval = setInterval(() => {
      console.log("hello");
    }, 1000);
    return () => {
      console.log("useEffect-WillUnMount");
      clearInterval(interval);
    };
  }, []);
  const showNumber = () => {
    console.log("number");
  };

  const showNumberCallBack = useCallback(showNumber, []);

  const numberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
  };

  const numberUpUseMemo = useMemo(() => numberUp(), []);

  return (
    <div>
      <h3>HOOKS</h3>
      <h3>Number : {number}</h3>
      <button className="btn btn-success" onClick={handleTangSo}>
        Tăng số
      </button>
      <Child showNumber={showNumberCallBack} />
      <h3>Number Up : {numberUpUseMemo}</h3>
    </div>
  );
}
