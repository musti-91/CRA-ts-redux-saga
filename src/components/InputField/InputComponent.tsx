import React, { FC, useState } from 'react';
import { Wrapper, Input } from './InputComponent.style';

interface Props {
  onSubmit: (value: string) => void;
}

/**
 * @author
 * @function Loading
 **/
const InputComponent: FC<Props> = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  return (
    <Wrapper width={75}>
      <form
        style={{ width: '100%' }}
        onSubmit={e => {
          e.preventDefault();
          onSubmit(search);
          setSearch('');
        }}
      >
        <Input onChange={e => setSearch(e.target.value)} placeholder="Search..." />
      </form>
    </Wrapper>
  );
};

export default InputComponent;
