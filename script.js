const initialize = (() => {
  const modal = document.getElementById('modal');
  const titleInput = document.getElementById('title');
  titleInput.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
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