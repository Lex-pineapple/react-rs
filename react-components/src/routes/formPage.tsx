import React, { ChangeEvent } from 'react';
import '../styles/formPage.css';
import CardsContainer from '../components/cardsContainer';
import DropDownInput from '../components/form-components/dropdown';
import CheckboxInput from '../components/form-components/checkboxInput';
import RadioInput from '../components/form-components/radioInput';
import GeneralInput from '../components/form-components/generalInput';
import { ICardProps, IValidationDetails } from 'types/interfaces';
import FileInput from '../components/form-components/fileInput';
import InputValidator from '../helpers/inputValidator';
import Modal from '../components/modal';

class FormPage extends React.Component {
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  selectInput: React.RefObject<HTMLSelectElement>;
  checkboxInput: React.RefObject<HTMLInputElement>;
  radioInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  state: {
    submit: boolean;
    nameInputTXT: string;
    dateInputTXT: string;
    checkboxInputTXT: string;
    fileInputTXT: string;
    cardData: ICardProps[];
    modalShow: boolean;
  };
  inputValidator: InputValidator;

  constructor(props: never) {
    super(props);
    this.inputValidator = new InputValidator();
    this.state = {
      submit: false,
      nameInputTXT: '',
      dateInputTXT: '',
      checkboxInputTXT: '',
      fileInputTXT: '',
      cardData: [],
      modalShow: false,
    };
    this.nameInput = React.createRef<HTMLInputElement>();
    this.dateInput = React.createRef<HTMLInputElement>();
    this.selectInput = React.createRef<HTMLSelectElement>();
    this.checkboxInput = React.createRef<HTMLInputElement>();
    this.radioInput = React.createRef<HTMLInputElement>();
    this.fileInput = React.createRef<HTMLInputElement>();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideMessage = this.hideMessage.bind(this);
  }

  handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      submit: true,
      nameInputTXT: '',
      dateInputTXT: '',
      checkboxInputTXT: '',
      fileInputTXT: '',
    });
    const dataForValidation = {
      nameInput: this.nameInput.current!,
      dateInput: this.dateInput.current!,
      checkboxInput: [this.checkboxInput.current!],
      fileInput: this.fileInput.current!,
    };
    const validationResult = this.inputValidator.validateSubmit(dataForValidation);
    if (validationResult.valid) {
      this.showMessage();
      const cardInfo = {
        image: URL.createObjectURL(this.fileInput.current!.files![0]),
        date: this.dateInput.current!.value,
        sex: this.radioInput.current!.checked ? 'Girl' : 'Boy',
        breed: this.selectInput.current!.value.split('-').join(' '),
        author: 'admin',
        cardName: this.nameInput.current!.value,
        views: 0,
        likes: 0,
        tags: [this.checkboxInput.current!.id],
      };
      this.createCard(cardInfo);
      this.resetCard();
    } else {
      this.showValidationError(validationResult.details);
    }
  }

  resetCard() {
    this.nameInput.current!.value = '';
    this.dateInput.current!.value = '';
    this.selectInput.current!.value = 'Other';
    this.checkboxInput.current!.checked = false;
    this.radioInput.current!.checked = true;
    this.fileInput.current!.value = '';
  }

  createCard(cardInfo: ICardProps) {
    this.setState({ cardData: [...this.state.cardData, cardInfo] });
  }

  showMessage() {
    this.setState({ modalShow: true });
  }

  hideMessage() {
    this.setState({ modalShow: false });
  }

  showValidationError(validationDetails: IValidationDetails) {
    if (!validationDetails.nameInput)
      this.setState({ nameInputTXT: 'The name must be longer than 3 symbols' });
    if (!validationDetails.dateInput)
      this.setState({ dateInputTXT: 'The year must be after 1990' });
    if (!validationDetails.checkboxInput)
      this.setState({ checkboxInputTXT: 'Check at least one checkbox' });
    if (!validationDetails.fileInput)
      this.setState({ fileInputTXT: 'Please choose an image file' });
  }

  render() {
    return (
      <div className="card-create-form-container">
        <form onSubmit={this.handleSubmit} className="card-create-form">
          <GeneralInput
            label="Name of the cat:"
            labelFor="name-input"
            type="text"
            input={this.nameInput}
            validationName="form-validation form-validation-name"
            validationData={this.state.nameInputTXT}
          />
          <GeneralInput
            label="Date of birth:"
            labelFor="date-input"
            type="date"
            input={this.dateInput}
            validationName="form-validation form-validation-date"
            validationData={this.state.dateInputTXT}
          />
          <DropDownInput label="Choose breed:" type="select" input={this.selectInput} />
          <CheckboxInput
            label="What are they like?"
            labelFor="checkbox-input"
            type="checkbox"
            input={this.checkboxInput}
            validationName="form-validation form-validation-checkbox"
            validationData={this.state.checkboxInputTXT}
          />
          <RadioInput label="Sex:" type="radio" input={this.radioInput} labelFor="radio-input" />
          <FileInput
            label="Upload photo:"
            labelFor="file-input"
            type="file"
            input={this.fileInput}
            accept="image/png, image/jpeg"
            validationName="form-validation form-validation-file"
            validationData={this.state.fileInputTXT}
          />
          <input type="submit" value="Submit" className="form-submit-btn" />
        </form>
        <CardsContainer cards={this.state.cardData} />
        <Modal show={this.state.modalShow} handleClose={this.hideMessage} />
      </div>
    );
  }
}

export default FormPage;
