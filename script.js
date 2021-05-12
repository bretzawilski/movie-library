const initialize = (() => {
  const modal = document.getElementById('modal');
  const titleInput = document.getElementById('title');
  titleInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      console.log(titleInput.value);
      titleInput.value = '';
      return titleInput.value;
    }
  })
  
  return {
    modal,
  };
});

const start = initialize();