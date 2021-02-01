import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Item from '@components/Item';
import ItemForm from '@components/ItemForm';
import ItemModel from '@models/ItemModel';
import { NextPage } from 'next';
import { useState } from 'react';

interface AddItemButtonProps {
  handleClickOpen: () => void;
}

const AddItemButton: NextPage<AddItemButtonProps> = ({ handleClickOpen }) => {
  return (
    <IconButton color="primary" aria-label="add item" component="span" onClick={handleClickOpen}>
      <AddCircleOutlineRoundedIcon fontSize="large" />
    </IconButton>
  );
};

interface ItemCategoryProps {
  title: string;
  items: ItemModel[];
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

  const handleSubmit = (item: ItemModel): void => {
    setDisplayedItems([...displayedItems, item]);
    setOpen(false);
  };

  return (
    <Card>
      <CardHeader title={title} action={<AddItemButton handleClickOpen={handleClickOpen} />} />
      <CardContent>
        {displayedItems.map((item: ItemModel, index) => (
          <Item key={`${item.title}-${index}`} item={item} />
        ))}
      </CardContent>
      <ItemForm category={title} open={open} handleCancel={handleCancel} handleSubmit={handleSubmit} />
    </Card>
  );
};

export default ItemCategory;
