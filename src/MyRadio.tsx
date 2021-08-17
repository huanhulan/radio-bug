import React, { useState, useContext, useEffect } from "react";
import { FormContext } from "./FormContext";

export const MyRadio: React.FC<
  Pick<HTMLInputElement, "value" | "name" | "id"> & {
    defaultChecked?: boolean;
  }
> = React.memo(({ value, name, id, children, defaultChecked }) => {
  const [checked, setChecked] = useState(defaultChecked);
  const { formValue } = useContext(FormContext);
  useEffect(() => {
    if (formValue[name] === value) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [formValue, setChecked, value, name]);

  return (
    <>
      <input
        value={value}
        type="radio"
        name={name}
        id={id}
        defaultChecked={!!checked}
      />
      <label htmlFor={id}>{children}</label>
    </>
  );
});
