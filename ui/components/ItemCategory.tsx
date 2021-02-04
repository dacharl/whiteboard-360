import { List, ListItem, ListItemText } from '@material-ui/core';
import { useEffect, useState } from 'react';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import ItemDto from '@models/ItemDto';
import ItemForm from '@components/ItemForm';
import { NextPage } from 'next';

interface AddItemButtonProps {
  handleClickOpen: () => void;
}

const AddItemButton: NextPage<AddItemButtonProps> = ({ handleClickOpen }) => {
  return (
    <IconButton color="primary" aria-label="add item" component="span" onClick={handleClickOpen}>
      <AddCircleOutlineRoundedIcon fontSize="large" color="inherit" />
    </IconButton>
  );
};

interface ItemCategoryProps {
  title: string;
  items: ItemDto[];
}

const ItemCategory: NextPage<ItemCategoryProps> = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(items);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleCancel = (): void => {
    setOpen(false);
  };

  const handleSubmit = (item: ItemDto): void => {
    setDisplayedItems([...displayedItems, item]);
    setOpen(false);
  };

  useEffect(() => {
    setDisplayedItems(items);
  }, [items]);

  return (
    <Card>
      <CardHeader title={title} action={<AddItemButton handleClickOpen={handleClickOpen} />} />
      <CardContent>
        <List>
          {displayedItems &&
            displayedItems.map((item: ItemDto) => (
              <ListItem key={`${item.title}-${item.itemId}`}>
                <ListItemText
                  primary={`${item.date} ${item.title}${item.author ? ' (' + item.author + ')' : ''}`}
                  secondary={item.description ? item.description : null}
                />
              </ListItem>
            ))}
        </List>
      </CardContent>
      <ItemForm category={title} open={open} handleCancel={handleCancel} handleSubmit={handleSubmit} />
    </Card>
  );
};

export default ItemCategory;
