import Data from './Data.jsx'
import './Accordeon.css';
import { useState } from 'react';

const Accordeon = () => {
    const [clicked, setClicked] = useState(false);
    const toggle = (index) => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }

    return (
        <div>
            {Data.map((item, index) => {
                return (
                    <>
                        <h2 onClick={() => toggle(index)} key={index} className={`text question ${clicked === index ? 'open' : ''}`} >{item.question}</h2>
                        {clicked === index ? (
                            <p className="text answer">{item.answer}</p>
                        ) : null}

                        <hr />
                    </>
                )
            })}
        </div>
    )
}

export default Accordeon;