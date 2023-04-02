import { IInputProps } from 'types/interfaces';

function DropDownInput({ register, name, label, ...props }: IInputProps) {
  return (
    <label className="form-label">
      {label}
      <select {...register(name)} {...props}>
        <option value="Cornish-rex">Cornish Rex</option>
        <option value="Munchkin">Munchkin</option>
        <option value="Other">Other</option>
      </select>
    </label>
  );
}

export default DropDownInput;
