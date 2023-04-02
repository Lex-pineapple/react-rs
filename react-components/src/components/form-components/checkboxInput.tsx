import { IValidatedRadioInputProps } from 'types/interfaces';

function CheckboxInput({ register, name, label, validationDetails }: IValidatedRadioInputProps) {
  return (
    <div className="form-cell">
      <label className="form-label">
        {label}
        <div className="form-input-container">
          <div className="form-input-checkbox-container">
            <input
              id="friendly"
              value="friendly"
              type="checkbox"
              {...register(name)}
              className="form-input-checkbox"
            />
            <label htmlFor="friendly" className="form-input-checkbox-label">
              Friendly
            </label>
            <input
              id="angry"
              value="angry"
              type="checkbox"
              {...register(name)}
              className="form-input-checkbox"
            />
            <label htmlFor="angry" className="form-input-checkbox-label">
              Angry
            </label>
            <input
              id="shy"
              value="shy"
              type="checkbox"
              {...register(name)}
              className="form-input-checkbox"
            />
            <label htmlFor="shy" className="form-input-checkbox-label">
              Shy
            </label>
          </div>
        </div>
      </label>
      <div className={validationDetails.validationName}>{validationDetails.validationData}</div>
    </div>
  );
}

export default CheckboxInput;
