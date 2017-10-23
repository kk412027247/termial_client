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

