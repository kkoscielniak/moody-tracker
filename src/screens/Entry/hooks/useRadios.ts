import { useState } from 'react';
import mapMoodLevelToColor from '../../../utils/mapMoodLevelToColor';

type RadioDef = {
  value: number;
};

type RadioWithState = {
  id: number;
  selected: boolean;
  color: string;
} & RadioDef;

const useRadios = (radiosDefinitions: RadioDef[]) => {
  const [radios, setRadios] = useState<RadioWithState[]>(
    radiosDefinitions.map((radioDef, index) => ({
      ...radioDef,
      id: index,
      selected: false,
      color: mapMoodLevelToColor(radioDef.value),
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
