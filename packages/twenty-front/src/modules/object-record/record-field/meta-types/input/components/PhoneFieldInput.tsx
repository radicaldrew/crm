import { E164Number } from 'libphonenumber-js';

import { PhoneInput } from '@/ui/field/input/components/PhoneInput';

import { FieldInputOverlay } from '../../../../../ui/field/input/components/FieldInputOverlay';
import { usePhoneField } from '../../hooks/usePhoneField';

import { FieldInputEvent } from './DateTimeFieldInput';

export type PhoneFieldInputProps = {
  onClickOutside?: FieldInputEvent;
  onEnter?: FieldInputEvent;
  onEscape?: FieldInputEvent;
  onTab?: FieldInputEvent;
  onShiftTab?: FieldInputEvent;
};

export const PhoneFieldInput = ({
  onEnter,
  onEscape,
  onClickOutside,
  onTab,
  onShiftTab,
}: PhoneFieldInputProps) => {
  const {
    fieldDefinition,
    draftValue,
    setDraftValue,
    hotkeyScope,
    persistPhoneField,
  } = usePhoneField();

  const handleEnter = (newText: E164Number | string) => {
    onEnter?.(() => persistPhoneField(newText));
  };

  const handleEscape = (newText: E164Number | string) => {
    onEscape?.(() => persistPhoneField(newText));
  };

  const handleClickOutside = (
    event: MouseEvent | TouchEvent,
    newText: E164Number | string,
  ) => {
    onClickOutside?.(() => persistPhoneField(newText));
  };

  const handleTab = (newText: E164Number | string) => {
    onTab?.(() => persistPhoneField(newText));
  };

  const handleShiftTab = (newText: E164Number | string) => {
    onShiftTab?.(() => persistPhoneField(newText));
  };

  const handleChange = (newText: E164Number | string) => {
    setDraftValue(newText);
  };

  return (
    <FieldInputOverlay>
      <PhoneInput
        placeholder={fieldDefinition.metadata.placeHolder}
        autoFocus
        value={draftValue ?? ''}
        onClickOutside={handleClickOutside}
        onEnter={handleEnter}
        onEscape={handleEscape}
        onShiftTab={handleShiftTab}
        onTab={handleTab}
        hotkeyScope={hotkeyScope}
        onChange={handleChange}
      />
    </FieldInputOverlay>
  );
};
