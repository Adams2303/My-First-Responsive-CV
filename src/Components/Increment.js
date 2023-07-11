import { useState } from "react";

function Increment() {
    let [count, setCount] = useState(0);
    let [color, setColor] = useState(' btn-primary')

    function onBtnclicked() {
        setCount(prevState => prevState + 1)
        if (count >= 5) {
            setColor('btn-danger')

        }
        console.log(count)
    }

    return (
        <button onClick={onBtnclicked} className={`btn ${color}`}> {count} </button >
    );
}

export default Increment