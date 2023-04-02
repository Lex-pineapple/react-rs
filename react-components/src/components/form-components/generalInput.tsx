import { IInputProps } from 'types/interfaces';

function GeneralInput(props: IInputProps<string, HTMLInputElement>) {
  return (
    <div className="form-cell">
      <label className="form-label" htmlFor={props.name}>
        {props.label}
        <input
          id={props.name}
          name={props.name}
          type={props.type}
          value={props.input}
          className={props.className}
          onChange={props.onChange}
          accept={props.accept}
        />
      </label>
      <div className={props.validationName}>{props.validationData}</div>
    </div>
  );
}

export default GeneralInput;
