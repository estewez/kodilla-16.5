import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    return (
        <ul className={style.TodoList}>
            {props.data.map(listValue => {
                return <li className={style.TodoItem} key={listValue.id} onClick={() => props.remove(listValue.id)}>{listValue.text}</li>;
            })}
        </ul>
    );
}

export default TodoList;