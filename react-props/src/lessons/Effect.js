import React,{useState, useEffect} from 'react'

function Effect() {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log('State güncellendi');
    });
    
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Yükselt</button>
        </div>
    )
}

export default Effect
