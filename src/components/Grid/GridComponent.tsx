import React, { memo } from 'react';

import { Wrap, Card } from './GridComponent.style';

interface IProps {
  data: any[];
  added?: boolean;
  onAlbumAdd: (id: string) => void;
}

const GridComponent: React.FC<IProps> = ({ data, added, onAlbumAdd }) => {
  return (
    <Wrap>
      {data &&
        data.map((el: any) => (
          <Card
            key={el.id}
            backgroundImage={el.images[0].url}
            heartColor={added ? 'red' : 'white'}
            onClick={() => onAlbumAdd(el.id)}
          />
        ))}
    </Wrap>
  );
};

export default memo(GridComponent);
