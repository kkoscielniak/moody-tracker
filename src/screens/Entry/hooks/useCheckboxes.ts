import { useState } from 'react';
import { Feeling } from '../../../types/MoodEntry';

type CheckboxDef = {
  value: Feeling;
  content: string;
};

type CheckboxWithState = {
  id: number;
  selected: boolean;
} & CheckboxDef;

const useCheckboxes = (checkboxesDefinitions: CheckboxDef[]) => {
  const [checkboxes, setCheckboxes] = useState<CheckboxWithState[]>(
    checkboxesDefinitions.map((checkbox, index) => {
      return {
        ...checkbox,
        id: index,
        selected: false,
      };
    }),
  );

  const selectedCheckboxes: CheckboxWithState[] | undefined = checkboxes.filter(
    checkbox => checkbox.selected,
  );

  const toggleCheckbox = (id: number): void => {
    const checkboxToToggle = checkboxes.find(checkbox => checkbox.id === id);

    if (checkboxToToggle) {
      setCheckboxes(
        checkboxes.map(checkbox => {
          if (checkbox.id === id) {
            return { ...checkbox, selected: !checkbox.selected };
          }

          return checkbox;
        }),
      );
    }
  };

  return { checkboxes, selectedCheckboxes, toggleCheckbox };
};

export default useCheckboxes;
