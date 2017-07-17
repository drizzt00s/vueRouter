export const addItem = ({dispatch, store}, item) => {
	dispatch('ADD_ITEM', item);
};

export const deleteItem = () => {
	dispatch('DELETE_ITEM');
};