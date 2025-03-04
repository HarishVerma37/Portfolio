import { useState, useEffect, useRef } from 'react';

export default function ShowRanges({ textId, percentage }) {
  const [currentValue, setCurrentValue] = useState(percentage);
  const inputRef = useRef(null);

  useEffect(() => {
    if (currentValue === percentage) return;

    const increment = percentage > currentValue ? 1 : -1;
    const interval = setInterval(() => {
      setCurrentValue((prevValue) => {
        if (prevValue === percentage) {
          clearInterval(interval);
          return prevValue;
        }
        return prevValue + increment;
      });
    }, 5); 
    return () => clearInterval(interval); 
  }, [percentage, currentValue]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = currentValue; 
      inputRef.current.style.setProperty("--progress", currentValue);
    }
  }, [currentValue]);

  const styles = {
    background: `linear-gradient(to right, #2196f3 ${currentValue}%, #ddd ${currentValue}%)`,
  };

  return (
    <div className='rangetype'>
      <input
        type="range"
        id={textId}
        min="0"
        max="100"
        value={currentValue}
        style={styles}
        ref={inputRef}
        readOnly 
      />
      <span id={`show+${textId}`}>{currentValue}</span>
    </div>
  );
}
