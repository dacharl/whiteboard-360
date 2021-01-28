interface ItemDto {
  itemId: string;
  standupId: string;
  category: string;
  title: string;
  author?: string;
  date: string;
  description?: string;
}

export default ItemDto;
