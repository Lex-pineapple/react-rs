import { IInputProps } from 'types/interfaces';

function DropDownInput(props: IInputProps<string, HTMLSelectElement>) {
  return (
    <label htmlFor={props.name} className="form-label">
      {props.label}
      <select
        id={props.name}
        name={props.name}
        value={props.input}
        onChange={props.onChange}
        className={props.className}
      >
        <option value="Cornish-rex">Cornish Rex</option>
        <option value="Munchkin">Munchkin</option>
        <option value="Other">Other</option>
      </select>
    </label>
  );
}

export default DropDownInput;
