import React from "react";
import todos from "../data/todo-data";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {todos.map((item) => {
        return (
          <div key={item.id} className="main__item">
            <h2 className="main__item-list">{item.id}.</h2>
            <h2
              className="main__item-list"
              onClick={() =>
                navigate("/todo", { state: { title: item.title } })
              }
            >
              {item.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
};
export default Main;
