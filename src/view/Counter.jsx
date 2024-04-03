import { useState } from "react";
import { Button } from '../styles/buttons.styled.js'

export default function Counter({item,initialValue}) {
  const [count, setCount] = useState(initialValue);

  return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">{item} counter: {count}</h3>
        <Button className="Button" onClick={() => setCount(count + 1)}>
          add {item}
        </Button>
      </div>
  );
}