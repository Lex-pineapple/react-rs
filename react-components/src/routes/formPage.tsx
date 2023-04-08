import '../styles/formPage.css';
import { FieldValues, useForm } from 'react-hook-form';
import GeneralInput from '../components/form-components/generalInput';
import DropDownInput from '../components/form-components/dropdownInput';
import RadioInput from '../components/form-components/radioInput';
import CheckboxInput from '../components/form-components/checkboxInput';
import CardsContainer from '../components/cardsContainer';
import { useState } from 'react';
import { ICardProps, IForm, IValidationMessage } from 'types/interfaces';
import InputValidator from '../helpers/inputValidator';
import Modal from '../components/modal';
import Card from '../components/card';

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
  const [cards, setCard] = useState<ICardProps[]>([]);
  const [modalShow, setModalShow] = useState(false);
  const [validationMessage, setValidationMessage] = useState<IValidationMessage>({
    nameInput: '',
    dateInput: '',
    checkboxInput: '',
    fileInput: '',
  });
  const inputValidator = new InputValidator();

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
    setCard([...cards, formData]);
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
      {cards.map((item, idx) => {
        return (
          <Card
            id={idx}
            key={idx}
            file={item.file}
            date={item.date}
            sex="Girl"
            breed="Other"
            author="admin"
            name={item.name}
            views={0}
            likes={0}
            tags={item.tags}
            handleClick={showMessage}
          />
        );
      })}
      <Modal show={modalShow} handleClose={hideMessage} />
    </div>
  );
}

export default FormPage;
