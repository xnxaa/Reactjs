import { useState } from "react";
import styles from'./counter.module.scss';
import {joinCss} from "../../helper/join";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    const counter = count + 1;
    if (counter > 999) {
      return;
    }
    setCount(counter);
  };

  const handleDecrement = () => {
    const counter = count - 1;
    if (count < 0) {
      return;
    }
    setCount(counter);
  };

  const parseCounter = (counter) => {
    if (counter < 10) {
      return `00${counter}`;
    }
    if (counter < 100) {
      return `0${counter}`;
    }
    return counter;
  }

  return <div>
    <div className= {styles.container}>
      {
      parseCounter(count).split('').map((digit, index) => {
        return <div style={styles.digitContainer} key={index}>
            <div className={styles.digit}>{digit}</div>
            </div>
      })
      }
      </div>
      <div className={styles.container}>
        <div className={styles.buttonGroup}>
            <div className={styles.buttonGroup}>
                <button
                className={joinCss ([styles.button, styles.buttonIncrement])} 
                onClick={handleIncrement}> + </button>
            </div>
            <div className={styles.buttonGroup}>
                <button 
                    className={joinCss ([styles.button, styles.buttonDecrement])} 
                    onClick={handleDecrement}>- </button>
                </div>
            </div>
        </div>
    </div>
};

export default Counter;
