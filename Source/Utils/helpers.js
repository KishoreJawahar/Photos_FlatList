export const isValidElement = (data) => {
    return (data !== null && data !== undefined);
};

export const getResult = (currentList, newList, page) => {
    let itemList = [];
    if (page === 0) {
        itemList = newList
    } else if (isValidElement(currentList) && currentList.length > 0) {
        itemList = [...currentList, ...newList];
    }
    return itemList;
};
