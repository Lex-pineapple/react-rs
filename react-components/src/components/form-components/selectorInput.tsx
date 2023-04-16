import { ISelectorInput } from 'types/interfaces';

function SelectorInput({ register, name, className, ...props }: ISelectorInput) {
  return (
    <div className={`${className}-container`}>
      <input {...register(name)} className={className} {...props} />
      <label htmlFor={props.id} className={`${className}-label`}>
        {props.id[0].toUpperCase() + props.id.slice(1)}
      </label>
    </div>
  );
}

export default SelectorInput;
