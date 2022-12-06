import { useState } from 'react';

type UseCheckboxButton = {
  id: number;
  value: string;
};

type UseCheckboxButtonWithState = {
  selected: boolean;
} & UseCheckboxButton;

const useCheckboxButtons = (buttons: UseCheckboxButton[]) => {
  const [selectedButtons, setButtonsWithState] = useState<
    UseCheckboxButtonWithState[]
  >(
    buttons.map(button => {
      return {
        ...button,
        selected: false,
      };
    }),
  );

  const selectButton = (id: number) => {
    setButtonsWithState(
      selectedButtons.map(button => {
        if (button.id === id) {
          return { ...button, selected: true };
        }

        return button;
      }),
    );
  };

  const deselectButton = (id: number) => {
    setButtonsWithState(
      selectedButtons.map(button => {
        if (button.id === id) {
          return { ...button, selected: false };
        }

        return button;
      }),
    );
  };

  const toggleButton = (id: number) => {
    const button = selectedButtons.find(b => b.id === id);

    if (button?.selected) {
      deselectButton(id);
    } else {
      selectButton(id);
    }
  };

  return { selectedButtons, toggleButton };
};

export default useCheckboxButtons;
