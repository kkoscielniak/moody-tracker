import { useState } from 'react';

type Checkbox = {
  value: string;
};

type CheckboxWithState = {
  id: number;
  selected: boolean;
} & Checkbox;

const useCheckboxes = (buttons: Checkbox[]) => {
  const [checkboxes, setButtonsWithState] = useState<CheckboxWithState[]>(
    buttons.map((button, index) => {
      return {
        ...button,
        id: index,
        selected: false,
      };
    }),
  );

  const toggleCheckbox = (id: number): void => {
    const buttonToBeToggled = checkboxes.find(button => button.id === id);

    if (buttonToBeToggled) {
      setButtonsWithState(
        checkboxes.map(button => {
          if (button.id === id) {
            return { ...button, selected: !button.selected };
          }

          return button;
        }),
      );
    }
  };

  return { checkboxes, toggleCheckbox };
};

export default useCheckboxes;
