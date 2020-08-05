import React, { memo } from 'react';

import { Wrap, Field } from './ButtonComponent.style';

interface IProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit';
}

const ButtonComponent: React.FC<IProps> = ({ label, onClick, type }) => {
  return (
    <Wrap>
      <Field onClick={() => onClick()} type={type ? type : 'button'}>
        {label}
      </Field>
    </Wrap>
  );
};

export default memo(ButtonComponent);
