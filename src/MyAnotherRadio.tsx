import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
  ChangeEvent,
} from "react";
import { FormContext } from "./FormContext";

export const MyAnotherRadio: React.FC<
  Pick<HTMLInputElement, "value" | "name" | "id"> & {
    defaultChecked?: boolean;
  }
> = ({ value, name, id, children, defaultChecked }) => {
  const [checked, setChecked] = useState(defaultChecked);
  const { formValue, setValue } = useContext(FormContext);
  const radioRef = useRef<HTMLInputElement>(null);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue({
        [name]: value,
      } as any);
      e.stopPropagation();
    },
    [setValue, name, value]
  );
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
        checked={!!checked}
        ref={radioRef}
        onChange={onChange}
      />
      <label htmlFor={id}>{children}</label>
    </>
  );
};
