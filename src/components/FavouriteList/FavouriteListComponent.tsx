import React, { memo } from 'react';

import { Wrap, Img, ListItem, Title } from './FavouriteListComponent.style';

interface IProps {
  data: any[];
}

const ListComponent: React.FC<IProps> = ({ data }) => {
  return (
    <Wrap>
      <h3>My favourite albums</h3>
      {data &&
        data.map((el: any, index: number) => (
          <ListItem key={el.id + index}>
            <Img src={el.album.images && el.album.images[0].url} alt={`${el.album.name} cover`} />
            <Title>
              <h3>{el.album.name}</h3>
              <a href={el.album.artists[0].uri} target={'_blank'}>
                {el.album.artists[0].name}
              </a>
            </Title>
          </ListItem>
        ))}
    </Wrap>
  );
};

export default memo(ListComponent);
