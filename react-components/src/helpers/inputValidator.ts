import { IValidationData, IValidationResult } from 'types/interfaces';

class InputValidator {
  validateSubmit(validationData: IValidationData): IValidationResult {
    const nameInput = this.validateName(validationData.nameInput);
    const dateInput = this.validateDate(validationData.dateInput);
    const checkboxInput = this.validateCheckbox(validationData.checkboxInput);
    const fileInput = this.validateFile(validationData.fileInput);
    return {
      valid: nameInput && dateInput && checkboxInput && fileInput,
      details: {
        nameInput,
        dateInput,
        checkboxInput,
        fileInput,
      },
    };
  }

  validateName(nameInput: HTMLInputElement) {
    return nameInput.value.length > 3;
  }

  validateDate(dateInput: HTMLInputElement) {
    const year = dateInput.value.split('-')[0];
    return parseInt(year) > 1990;
  }

  validateCheckbox(checkboxInput: HTMLInputElement[]): boolean {
    const temp = checkboxInput.filter((item) => {
      return item.checked;
    });
    return Boolean(temp.length);
  }

  validateFile(fileInput: HTMLInputElement) {
    return Boolean(fileInput!.files!.length);
  }
}

export default InputValidator;
