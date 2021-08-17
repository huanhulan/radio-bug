import React, { useState, useCallback, ChangeEvent } from "react";

import { FormContext } from "./FormContext";

export const MyForm: React.FC<
  {
    onChange?: (e: ChangeEvent<HTMLFormElement>) => void;
  } & Pick<HTMLFormElement, "name">
> = ({ onChange, children, name }) => {
  const [value, setValue] = useState({});
  const onChangeCB = useCallback(
    (e: ChangeEvent<HTMLFormElement>) => {
      setValue({
        [e.target.name]: e.target.value,
      });
      onChange && onChange(e);
      e.stopPropagation();
    },
    [onChange]
  );

  return (
    <FormContext.Provider
      value={{
        formValue: value,
        setValue,
      }}
    >
      <form onChange={onChangeCB} name={name}>
        {children}
      </form>
    </FormContext.Provider>
  );
};
