import React, { ChangeEvent } from 'react';
import './formPage.css';
import CardsContainer from '../components/cardsContainer';
import DropDownInput from '../components/form-components/dropdown';
import CheckboxInput from '../components/form-components/checkboxInput';
import RadioInput from '../components/form-components/radioInput';
import GeneralInput from '../components/form-components/generalInput';
import { ICardProps } from 'types/interfaces';

class FormPage extends React.Component {
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  selectInput: React.RefObject<HTMLSelectElement>;
  checkboxInput: React.RefObject<HTMLInputElement>;
  radioInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  state: { submit: boolean };

  constructor(props: never) {
    super(props);
    this.state = { submit: false };
    this.nameInput = React.createRef<HTMLInputElement>();
    this.dateInput = React.createRef<HTMLInputElement>();
    this.selectInput = React.createRef<HTMLSelectElement>();
    this.checkboxInput = React.createRef<HTMLInputElement>();
    this.radioInput = React.createRef<HTMLInputElement>();
    this.fileInput = React.createRef<HTMLInputElement>();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({ submit: true });
    console.log(this.nameInput.current!.value);
    console.log(this.dateInput.current!.value);
    console.log(this.selectInput.current!.value);
    console.log(this.checkboxInput.current!.checked);
    console.log(this.radioInput.current!.checked);
    console.log(this.fileInput.current!.value);
  }

  createCard(cardInfo: ICardProps) {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="card-create-form">
        <GeneralInput label="Name of the cat:" type="text" input={this.nameInput} />
        <GeneralInput label="Date of addition:" type="date" input={this.dateInput} />
        <DropDownInput label="Choose breed:" type="select" input={this.selectInput} />
        <CheckboxInput label="What are they like?" type="checkbox" input={this.checkboxInput} />
        <RadioInput label="Sex:" type="radio" input={this.radioInput} />
        <GeneralInput label="Upload photo: " type="file" input={this.fileInput} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormPage;
