import { IValidatedInputProps } from 'types/interfaces';

function GeneralInput({
  register,
  name,
  label,
  validationDetails,
  ...props
}: IValidatedInputProps) {
  return (
    <div className="form-cell">
      <label className="form-label">
        {label}
        <input {...register(name)} {...props} />
      </label>
      <div className={validationDetails.validationName}>{validationDetails.validationData}</div>
    </div>
  );
}

export default GeneralInput;
