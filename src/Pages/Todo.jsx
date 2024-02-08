import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  return (
    <div className="todo__container">
      <h5 className="todo__title">{location.state.title}</h5>
      <button onClick={() => navigate("/")} className="todo__btn">
        Return
      </button>
    </div>
  );
};
export default Todo;
