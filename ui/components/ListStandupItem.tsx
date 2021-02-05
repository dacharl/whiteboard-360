import React, { useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ItemDto from '@models/ItemDto';
import ItemForm from './ItemForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { NextPage } from 'next';

interface ListStandupItemProps {
  item: ItemDto;
  title: string;
  displayedItems: ItemDto[];
  setDisplayedItems: (item: ItemDto[]) => void;
}

export const ListStandupItem: NextPage<ListStandupItemProps> = ({ item, title, displayedItems, setDisplayedItems }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleClickOpenEdit = (): void => {
    setIsEditModalOpen(true);
  };

  const handleCancelEdit = (): void => {
    setIsEditModalOpen(false);
  };

  const handleSubmitEdit = (item: ItemDto, incomingItem: ItemDto): void => {
    setDisplayedItems(
      displayedItems.map((displayedItem) => {
        return displayedItem == incomingItem ? item : displayedItem;
      })
    );

    setIsEditModalOpen(false);
  };

  const handleDelete = (item: ItemDto): void => {
    setDisplayedItems(displayedItems.filter((displayItem) => displayItem !== item));
  };

  return (
    <ListItem key={`${item.title}-${item.itemId}`}>
      <ListItemText
        primary={`${item.date} ${item.title}${item.author ? ' (' + item.author + ')' : ''}`}
        secondary={item.description ? item.description : null}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="edit item" onClick={handleClickOpenEdit}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete item" onClick={() => handleDelete(item)}>
          <DeleteForeverIcon />
        </IconButton>
      </ListItemSecondaryAction>
      <ItemForm category={title} open={isEditModalOpen} handleCancel={handleCancelEdit} handleSubmit={handleSubmitEdit} incomingItem={item} />
    </ListItem>
  );
};
