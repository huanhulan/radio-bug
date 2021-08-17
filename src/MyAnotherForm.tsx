import React, { useState, useCallback } from "react";

export const MyAnotherForm: React.FC<Pick<HTMLFormElement, "name">> = ({
  name,
}) => {
  const [formValue, setValue] = useState({} as Record<string, string>);
  const onChangeCB = useCallback(
    (value) => {
      setValue({
        [name]: `${value}`,
      });
    },
    [name]
  );

  return (
    <form name={name}>
      {new Array(10)
        .fill(1)
        .map((_, idx) => idx)
        .map((v) => (
          <span key={v}>
            <input
              type="radio"
              value={`${v}`}
              name="name"
              id={`${name}${v}`}
              onChange={() => onChangeCB(v)}
              checked={formValue[name] === `${v}`}
            />
            <label htmlFor={`${name}${v}`}>{v}</label>
          </span>
        ))}
    </form>
  );
};
