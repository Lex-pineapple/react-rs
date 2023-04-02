import { ChangeEvent, useState } from 'react';
import '../styles/formPage.css';
import CardsContainer from '../components/cardsContainer';
import DropDownInput from '../components/form-components/dropdown';
import CheckboxInput from '../components/form-components/checkboxInput';
import RadioInput from '../components/form-components/radioInput';
import GeneralInput from '../components/form-components/generalInput';
import { ICardProps, IForm, IValidationDetails } from 'types/interfaces';
import InputValidator from '../helpers/inputValidator';
import Modal from '../components/modal';

function FormPage() {
  const [form, setForm] = useState<ICardProps>({
    name: '',
    date: '',
    breed: '',
    tags: [false],
    sex: 'female',
    file: {
      value: '',
      parsedValue: '',
    },
  });
  const [cards, setCard] = useState<IForm[]>([]);
  const inputValidator = new InputValidator();

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // if (e.target.type == 'file') {
    //   const eFile = e.target as HTMLInputElement;
    //   setForm({
    //     ...form,
    //     [e.target.id]: {
    //       value: eFile.value,
    //       parsedValue: URL.createObjectURL(eFile.files![0]),
    //     },
    //   });
    // } else if (e.target.type == 'radio' || e.target.type == 'checkbox') {
    //   const el = e.target as HTMLInputElement;
    //   setForm({
    //     ...form,
    //     [e.target.id]: el.checked,
    //   });
    // }
    //  else {
    //   setForm({
    //     ...form,
    //     [e.target.id]: e.target.value,
    //   });
    // }
  }

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
  }

  function parseForm(form: ICardProps) {
    return {
      file: form.file.parsedValue,
      date: form.date,
      sex: form.sex ? 'Female' : 'Male',
      breed: form.breed,
      author: 'admin',
      name: form.name,
      views: 0,
      likes: 0,
      tags: form.tags ? 'Friendly' : '',
    };
  }

  function parseElement(el: HTMLInputElement | HTMLSelectElement) {
    if (el.type == 'file') {
      const elFile = el as HTMLInputElement;
      return URL.createObjectURL(elFile.files![0]);
    } else if (el.type == 'radio') {
      const elRadio = el as HTMLInputElement;
      return elRadio.checked ? 'Female' : 'Male';
    } else if (el.type == 'checkbox') return el.id;
    else return el.value;
  }

  function createCards(cardData: IForm) {
    setCard([...cards, cardData]);
  }

  // handleSubmit(event: ChangeEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   this.setState({
  //     submit: true,
  //     nameInputTXT: '',
  //     dateInputTXT: '',
  //     checkboxInputTXT: '',
  //     fileInputTXT: '',
  //   });
  //   const dataForValidation = {
  //     nameInput: this.nameInput.current!,
  //     dateInput: this.dateInput.current!,
  //     checkboxInput: [this.checkboxInput.current!],
  //     fileInput: this.fileInput.current!,
  //   };
  //   const validationResult = this.inputValidator.validateSubmit(dataForValidation);
  //   if (validationResult.valid) {
  //     this.showMessage();
  //     const cardInfo = {
  //       file: URL.createObjectURL(this.fileInput.current!.files![0]),
  //       date: this.dateInput.current!.value,
  //       sex: this.radioInput.current!.checked ? 'Girl' : 'Boy',
  //       breed: this.selectInput.current!.value.split('-').join(' '),
  //       author: 'admin',
  //       cardName: this.nameInput.current!.value,
  //       views: 0,
  //       likes: 0,
  //       tags: [this.checkboxInput.current!.id],
  //     };
  //     this.createCard(cardInfo);
  //     this.resetCard();
  //   } else {
  //     this.showValidationError(validationResult.details);
  //   }
  // }

  // resetCard() {
  //   this.nameInput.current!.value = '';
  //   this.dateInput.current!.value = '';
  //   this.selectInput.current!.value = 'Other';
  //   this.checkboxInput.current!.checked = false;
  //   this.radioInput.current!.checked = true;
  //   this.fileInput.current!.value = '';
  // }


  // showMessage() {
  //   this.setState({ modalShow: true });
  // }

  // hideMessage() {
  //   this.setState({ modalShow: false });
  // }

  // showValidationError(validationDetails: IValidationDetails) {
  //   if (!validationDetails.nameInput)
  //     this.setState({ nameInputTXT: 'The name must be longer than 3 symbols' });
  //   if (!validationDetails.dateInput)
  //     this.setState({ dateInputTXT: 'The year must be after 1990' });
  //   if (!validationDetails.checkboxInput)
  //     this.setState({ checkboxInputTXT: 'Check at least one checkbox' });
  //   if (!validationDetails.fileInput)
  //     this.setState({ fileInputTXT: 'Please choose an file file' });
  // }

  return (
    <div className="card-create-form-container">
      <form onSubmit={handleSubmit} className="card-create-form">
        <GeneralInput
          name="name"
          type="text"
          label="Name of the cat:"
          input={form.name}
          onChange={handleChange}
          className="form-input"
          validationName="form-validation form-validation-name"
          // validationData={this.state.nameInputTXT}
        />
        <GeneralInput
          name="date"
          type="date"
          label="Date of birth:"
          input={form.date}
          onChange={handleChange}
          className="form-input"
          validationName="form-validation form-validation-date"
          // validationData={this.state.dateInputTXT}
        />
        <DropDownInput
          name="breed"
          type="select"
          label="Choose breed:"
          input={form.breed}
          onChange={handleChange}
          className="form-input"
        />
        <CheckboxInput
          name="tags"
          label="What are they like?"
          type="checkbox"
          input={form.tags[0]}
          onChange={handleChange}
          className="form-input-checkbox"
          validationName="form-validation form-validation-checkbox"
          // validationData={this.state.checkboxInputTXT}
        />
        <RadioInput
          name="sex"
          type="radio"
          label="Sex:"
          input={form.sex}
          onChange={handleChange}
          className="form-input-radio"
        />
        <GeneralInput
          name="file"
          type="file"
          label="Upload photo:"
          input={form.file.value}
          onChange={handleChange}
          className="form-input-file"
          accept="image/png, image/jpeg"
          validationName="form-validation form-validation-file"
          // validationData={this.state.fileInputTXT}
        />
        <input type="submit" value="Submit" className="form-submit-btn" />
      </form>
      <CardsContainer cards={cards} />
      {/* <CardsContainer cards={this.state.cardData} />
      <Modal show={this.state.modalShow} handleClose={this.hideMessage} /> */}
    </div>
  );
}

export default FormPage;
