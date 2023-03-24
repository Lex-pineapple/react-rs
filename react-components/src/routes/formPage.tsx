import TextInput from '../components/form-components/textInput';
import React, { ChangeEvent } from 'react';
import './formPage.css';
import DateInput from '../components/form-components/dateInput';
import DropDownInput from '../components/form-components/dropdown';
import CheckboxInput from '../components/form-components/checkboxInput';
import RadioInput from '../components/form-components/radioInput';
import FileInput from '../components/form-components/fileInput';

class FormPage extends React.Component {

  constructor(props: never) {
    super(props);
  }

  handleSubmit(event: ChangeEvent<HTMLFormElement>) {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput label="Name of the cat:" />
        <DateInput label="Date of addition:" />
        <DropDownInput label="Choose breed:" />
        <CheckboxInput label="What are they like?" />
        <RadioInput label="Sex:" />
        <FileInput label="Upload photo: " />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormPage;
