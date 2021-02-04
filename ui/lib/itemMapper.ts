import ItemDto from '@models/ItemDto';

export const mapItemsToCategories = (items: ItemDto[]): Map<string, ItemDto[]> => {
  const map = new Map();
  items.forEach((item) => {
    if (map.has(item.category)) {
      map.set(item.category, [...map.get(item.category), item]);
    } else {
      map.set(item.category, [item]);
    }
  });
  return map;
};
