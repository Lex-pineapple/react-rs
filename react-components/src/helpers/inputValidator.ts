import { IForm, IValidationResult } from 'types/interfaces';

class InputValidator {
  validateSubmit(validationData: IForm): IValidationResult {
    const nameInput = this.validateName(validationData.name);
    const dateInput = this.validateDate(validationData.date);
    const checkboxInput = this.validateCheckbox(validationData.tags);
    const fileInput = this.validateFile(validationData.file);
    return {
      valid: nameInput && dateInput && checkboxInput && fileInput,
      details: {
        nameInput: nameInput ? '' : 'The name must be longer than 3 symbols',
        dateInput: dateInput ? '' : 'The year must be after 1990',
        checkboxInput: checkboxInput ? '' : 'Check at least one checkbox',
        fileInput: fileInput ? '' : 'Please choose an image file',
      },
    };
  }

  validateName(name: string) {
    return name.length > 3;
  }

  validateDate(date: string) {
    const year = date.split('-')[0];
    return parseInt(year) > 1990;
  }

  validateCheckbox(checkbox: string[]): boolean {
    return Boolean(checkbox.length);
  }

  validateFile(file: FileList) {
    return Boolean(file.length);
  }
}

export default InputValidator;
