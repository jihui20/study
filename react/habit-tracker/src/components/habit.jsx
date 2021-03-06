import React, { Component } from 'react';

class Habit extends Component {

    handleIncrement = () => {
        // state 오브젝트 안에 있는 count를 증가시킨 뒤 state를 업데이트 해야 함.
        // setState : state를 업데이트 해야할때 꼭 호출해야하는 함수
       // this.setState({ count: this.state.count + 1});
        this.props.onIncrement(this.props.habit);
    }
    
    handleDecrement = () => {
        // const count = this.state.count - 1;
        // this.setState({ count: count < 0 ? 0 : count});
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }

    render() {
       // console.log(this.props); // 부모 props 불러오는 법
        const { name, count} = this.props.habit; // 한번에 불러오는 법
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>  
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>  
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>  
                </button>
            </li>
        );
    }
}

export default Habit;