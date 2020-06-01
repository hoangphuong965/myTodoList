import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TodoInput from "./components/TodoInput";
hay nhờ kiểu có hồn trong từng câu hát





import "./components/todo.css";

export default class App extends Component {
  state={
    items: [],
    
  }
  render() {
    console.log(isUuid('75442486-0878-440c-9db1-a7006c25a39f'));

    return (
      <div>
        <Navbar />
        <div className="container">
          <TodoInput />
          
        </div>
      </div>
    );
  }
}
