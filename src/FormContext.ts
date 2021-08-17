import { createContext } from "react";

export const FormContext = createContext({
  formValue: {} as Record<string, any>,
  setValue: (v: Record<string, any>) => {},
})