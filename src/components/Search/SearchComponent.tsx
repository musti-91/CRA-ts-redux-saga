import React, { memo } from 'react';

import { Wrap, Title } from './SearchComponent.style';
import InputField from '../InputField';
import Button from '../Button';

interface IProps {
  onSubmit: (value: string) => void;
  onClick: () => void;
  label: string;
}

const SearchComponent: React.FC<IProps> = ({ onSubmit, onClick, label }) => {
  return (
    <Wrap>
      {/* Title */}
      <Title textSize={30}>Search for an artist</Title>
      {/* InputField */}
      <InputField onSubmit={onSubmit} />
      {/* Button */}
      <Button onClick={onClick} label={label} />
    </Wrap>
  );
};

export default memo(SearchComponent);
