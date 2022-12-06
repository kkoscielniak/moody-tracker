import { useState } from 'react';

export type UseRadioButtonsDef = {
  id: number;
  value: string;
  color: string;
};

const useRadioButtons = (buttons: UseRadioButtonsDef[]) => {
  const [selectedButton, setSelectedButton] = useState<UseRadioButtonsDef>();

  const selectButton = (id: number) => {
    setSelectedButton(buttons.find(button => button.id === id));
  };

  const selectedButtonId = selectedButton?.id;

  return { buttons, selectedButton, selectButton, selectedButtonId };
};

export default useRadioButtons;
