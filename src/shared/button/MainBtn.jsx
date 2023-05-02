import React from 'react';
import { useState, useEffect } from "react";

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
}
const MainBtn = (props) => {
    const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    props.handleClick();
  };

  return (
    <button
      className={props.className}
      type={props.type}
      disabled={isLoading}
      onClick={() => {handleClick()}}
    >
      {isLoading ? 'Loading…' : props.name}
    </button>
  );
}
 
MainBtn.propTypes = {};
 
export default MainBtn;