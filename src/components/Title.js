import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <div className={style.Title}>
            <h1 className='title'>{`Your Todo List`}</h1>
            <p>{`Todo list's length is: ${this.props.listLength}`}</p>
        </div>
        );
    }
}

export default Title;