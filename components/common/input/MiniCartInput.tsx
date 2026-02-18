import { Input } from '@mantine/core';
import Lens from '@/assets/icons/Lens';
import BaseInput from './BaseInput';

const MiniCartInput = ({ ...props }) => {
  return (
    <BaseInput
      leftSection={<Lens />}
      classNames={{ root: `max-w-[439px]! h-[38px] text-[14px] font-medium ` }}
      placeholder="Search or type command"
    />
  );
};

export default MiniCartInput;
