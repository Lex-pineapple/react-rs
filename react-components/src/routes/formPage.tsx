import '../styles/formPage.css';
import { FieldValues, useForm } from 'react-hook-form';
import GeneralInput from '../components/form-components/generalInput';
import DropDownInput from '../components/form-components/dropdownInput';
import RadioInput from '../components/form-components/radioInput';
import CheckboxInput from '../components/form-components/checkboxInput';
import { useState } from 'react';
import { IForm, IState, IValidationMessage } from 'types/interfaces';
import InputValidator from '../helpers/inputValidator';
import Modal from '../components/modal-components/modal';
import Card from '../components/card-components/card';
import { useDispatch, useSelector } from 'react-redux';

function FormPage() {
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      date: '',
      breed: 'Other',
      sex: 'male',
      tags: [],
    },
  });
  const [modalShow, setModalShow] = useState(false);
  const [validationMessage, setValidationMessage] = useState<IValidationMessage>({
    nameInput: '',
    dateInput: '',
    checkboxInput: '',
    fileInput: '',
  });
  const dispatch = useDispatch();
  const formData = useSelector((state: IState) => state.formData);
  const inputValidator = new InputValidator();

  console.log(
    'In case of any questions: Since there is no requirement for form input fields to retain data when switching before pages, this was not implemented (for reference see QA spreadsheet)'
  );

  function onSubmit(data: FieldValues) {
    const validationResult = inputValidator.validateSubmit(data as IForm);
    if (validationResult.valid) {
      showValidationMessage(validationResult.details);
      createCards(data as IForm);
      reset();
    } else {
      showValidationMessage(validationResult.details);
    }
  }

  function createCards(cardData: IForm) {
    const formData = {
      ...cardData,
      file: URL.createObjectURL(cardData.file[0]),
      author: 'admin',
      views: 0,
      likes: 0,
    };
    showMessage();
    dispatch({ type: 'form/setFormData', payload: formData });
  }

  function showValidationMessage(validationDetails: IValidationMessage) {
    setValidationMessage(validationDetails);
  }

  function showMessage() {
    setModalShow(true);
  }

  function hideMessage() {
    setModalShow(false);
  }

  return (
    <div className="card-create-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="card-create-form">
        <GeneralInput
          name="name"
          label="Name of the cat:"
          validationDetails={{
            validationName: 'form-validation form-validation-name',
            validationData: validationMessage.nameInput,
          }}
          register={register}
          type="text"
          className="form-input"
        />
        <GeneralInput
          name="date"
          label="Date of birth:"
          validationDetails={{
            validationName: 'form-validation form-validation-date',
            validationData: validationMessage.dateInput,
          }}
          register={register}
          type="date"
          className="form-input"
        />
        <DropDownInput
          name="breed"
          label="Choose breed:"
          register={register}
          type="select"
          className="form-input"
        />
        <CheckboxInput
          register={register}
          name="tags"
          label="What are they like?"
          validationDetails={{
            validationName: 'form-validation form-validation-checkbox',
            validationData: validationMessage.checkboxInput,
          }}
        />
        <RadioInput register={register} name="sex" label="Sex:" />
        <GeneralInput
          name="file"
          label="Upload photo:"
          validationDetails={{
            validationName: 'form-validation form-validation-file',
            validationData: validationMessage.fileInput,
          }}
          register={register}
          type="file"
          className="form-input-file"
        />
        <input type="submit" value="Submit" className="form-submit-btn" />
      </form>
      <div className="cards-container">
        {formData.map((item, idx) => {
          return (
            <Card
              key={idx}
              file={item.file}
              date={item.date}
              sex={item.sex}
              breed={item.breed}
              author="admin"
              name={item.name}
              views={item.views}
              likes={item.likes}
              tags={item.tags}
            />
          );
        })}
      </div>
      <Modal show={modalShow} handleClose={hideMessage} />
    </div>
  );
}

export default FormPage;
