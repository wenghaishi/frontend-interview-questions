import "./Item.css";
import { useState } from "react";

const Item = (props) => {
  const [suggestions, setSuggestions] = useState();

  const data = ["java", "python", "react", "javascript"];

  const handleChange = (e) => {
    let currentValue = e.target.value;
    console.log(currentValue)
    if (currentValue === null) {
      setSuggestions(null);
    }
    setSuggestions(search(currentValue));
  };

  const search = (value) => {
    let result = [];
    data.forEach((e) => {
      if (e.includes(value)) {
        result.push(e);
      }
    });
    return result;
  };

  return (
    <div className="item">
      <h1 className="number">{props.num}</h1>
        <input
          placeholder="Add skill"
          className="input"
          onChange={handleChange}
        />
      {suggestions && (
          <ul className="suggestion">
            {suggestions.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        )}
    </div>
  );
};
export default Item;
