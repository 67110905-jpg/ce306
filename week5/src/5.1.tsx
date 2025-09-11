import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Counter Exercise</h2>
      <div style={{ fontSize: '40px', margin: '20px 0' }}>{count}</div>
      <div>
        <button onClick={handleIncrease} style={{ marginRight: '10px', backgroundColor: 'green', color: 'white' }}>+ เพิ่ม</button>
        <button onClick={handleDecrease} style={{ marginRight: '10px', backgroundColor: 'orange', color: 'white' }}>- ลด</button>
        <button onClick={handleReset} style={{ backgroundColor: 'red', color: 'white' }}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
