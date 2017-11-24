import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './antd.css';
import {connect} from 'react-redux';
import { Button } from 'antd';

class AppUI extends Component {
  render() {
    var props = this.props;
    return (
      <div className="App">
        <input type="text" ref="ipt" />
        <Button type="primary" onClick={()=>props.addTodo(this.refs.ipt.value)}>Primary</Button>
        <button onClick={()=>props.addTodo(this.refs.ipt.value)}>add todo</button>
        <ul>
          {props.list.map(function(item, index){
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    )
  }
}
// const AppUI = (props)=>(
//   <div className="App">
//     <input type="text" id="ipt" />
//     <button onClick={props.addTodo}>add todo</button>
//     <ul>
//       {props.list.map(function(item, index){
//         return <li key={index}>{item}</li>;
//       })}
//     </ul>
//   </div>
// )

const mapStateToProps = (state)=>{
  return {
    list: state.list
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addTodo: function(data) {
      console.log("mapDispatchToProps add todo");
      dispatch({
        type: "ADD_TODO",
        payload: data
      })
    }
  }
}
// 生成容器组件
const App = connect(mapStateToProps, mapDispatchToProps)(AppUI);

export default App;
