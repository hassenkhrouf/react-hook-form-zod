import type { UseFormRegisterReturn } from "react-hook-form";

interface propsType {
  type: string;
  labelName: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
}
export default function Inputs({
  type,
  labelName,
  id,
  placeholder,
  register,
}: propsType) {
  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
    </>
  );
}
