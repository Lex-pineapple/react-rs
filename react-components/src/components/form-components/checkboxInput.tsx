import { IValidatedRadioInputProps } from '../../types/interfaces';
import SelectorInput from './selectorInput';

function CheckboxInput({ register, name, label, validationDetails }: IValidatedRadioInputProps) {
  return (
    <div className="form-cell">
      <label className="form-label">
        {label}
        <div className="form-input-container">
          <SelectorInput
            register={register}
            name={name}
            className="form-input-checkbox"
            id="friendly"
            value="friendly"
            type="checkbox"
          />
          <SelectorInput
            register={register}
            name={name}
            className="form-input-checkbox"
            id="angry"
            value="angry"
            type="checkbox"
          />
          <SelectorInput
            register={register}
            name={name}
            className="form-input-checkbox"
            id="shy"
            value="shy"
            type="checkbox"
          />
        </div>
      </label>
      <div className={validationDetails.validationName}>{validationDetails.validationData}</div>
    </div>
  );
}

export default CheckboxInput;
