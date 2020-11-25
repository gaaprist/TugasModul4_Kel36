import React, { useMemo, useState } from 'react';

function Index() {
    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0);

    const incrementNumber = () => setNumber(prev => prev + 1)
    const incrementCount = () => setCount(prev => prev + 1)

    const isNumberEven = useMemo(() => {
        let i = 0;
        while (i < 99999) i++
        return number % 2 === 0
    }, [number])

    return (
        <div className="Main">
            <p className="Text">Ganjil Genap dengan useMemo</p>
            <p>Kelompok 36</p>
            <div className="App">
                <button className="Button" onClick={incrementNumber}>Number : {number}</button>
                <div>{isNumberEven ? "Genap" : "Ganjil"}</div>
                <button className="Button" onClick={incrementCount}>Count: {count}</button>
            </div>
        </div>
    )
}

export default Index;