import React, {useState} from 'react';
import classes from './Counter.module.scss'


export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            <h1>{counter}</h1>

            <div className={classes.btn}>
                <button className={classes.inc} onClick={handleIncrement}>+</button>
                <button className={classes.dec} onClick={handleDecrement}>-</button>
            </div>
        </div>
    );
};

