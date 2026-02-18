import { FC, JSX } from 'react';
import { TextInput, TextInputProps } from '@mantine/core';

const BaseInput: FC<TextInputProps> = ({ classNames, ...props }): JSX.Element => {
  const inputClass = typeof classNames === 'object' && classNames?.input ? classNames.input : '';
  return (
    <TextInput
      {...props}
      size="md"
      classNames={{
        ...((typeof classNames === 'object' && classNames) || {}),
        input:
          `${inputClass} border border-(--border-color)! focus:border-[#5D5D5D]! rounded-[8px]!`.trim(),
      }}
    />
  );
};

export default BaseInput;
