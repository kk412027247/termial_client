export const handleDrawer= ()=>({
  type:'HANDLE_DRAWER',
});

export const handleFetch = () =>({
  type: 'HANDLE_FETCH',
});

export const handleInput = (event, newValue) =>({
  type: 'HANDLE_INPUT',
  input: newValue,
});



export const handleDialog = () => ({
  type: 'HANDLE_DIALOG'
});

export const changeSearch = (index)=>({
  type:'CHANGE_SEARCH',
  slideIndex:index,
});


