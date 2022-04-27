import React/*, {useState}*/ from 'react';
import "./UpDown.css";

export const UpDown = ({number, setNumber, ...rst}) => {
    //const [value, setNumber] = useState(number);
    return (
        <div className='updown'>
            <button onClick={e => setNumber(number - 1)} disabled={number == 0 ? true : false}>-</button>
            <span>{number}</span>
            <button onClick={e => setNumber(number + 1)}>+</button>
        </div>
    );
}

export const DownUp = props => {
    return <p>Joha</p>
}

export const DownUp2 = props => (
    <p>AhojAhojAhoj</p>
)

export default UpDown