import { useState } from 'react';

type RadioDef = {
  value: number;
  content: string;
  color: string;
};

type RadioWithState = {
  id: number;
  selected: boolean;
} & RadioDef;

const useRadios = (radiosDefinitions: RadioDef[]) => {
  const [radios, setRadios] = useState<RadioWithState[]>(
    radiosDefinitions.map((radioDef, index) => ({
      ...radioDef,
      id: index,
      selected: false,
    })),
  );

  const selectRadio = (id: number) => {
    const radioToSelect = radios.find(radio => radio.id === id);

    if (radioToSelect) {
      setRadios(
        radios.map(radio => ({
          ...radio,
          selected: radio.id === id,
        })),
      );
    }
  };

  const selectedRadio: RadioWithState | undefined = radios.find(
    radio => radio.selected,
  );

  return { radios, selectedRadio, selectRadio };
};

export default useRadios;
