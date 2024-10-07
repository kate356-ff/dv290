import './Set.css';

import { useState } from "react";
import { Card } from "../card/Card";
export function Set() {
    const cards = require('../../data'); //данные с data.json
    const [step, setStep] =useState(0);

    const HandleNext = () => {
        if (step < cards.length - 1)
        setStep(step+1)
    }

    const handlePrev = () => {
        if (step > 0) {
            setStep(step-1)
        }
        setStep(step-1)
    }





    return(
        <div>
            <h2>Название набора</h2>
            <Card 
            key = { cards[step].id } //для однотипных элементов, это уникальный ключ
            front = { cards[step].front } 
            back = { cards[step].back }
            />
            <div className="control-panel">
                <button className='btn-control'
                disabled = { step === 0 ? true : false}
                onClick = {handlePrev}> 
                    <b>&lt;</b>
                    </button>
                    <p>
                        {step + 1} / {cards.length}
                    </p>
                <button className='btn-control'
                disabled = { step === cards.length - 1 ? true : false}
                onClick={HandleNext}> 
                    <b>&gt;</b>
                    </button>
            </div>
        </div>
    );
}