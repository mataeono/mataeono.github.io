const addButton = document.querySelector('#add-button');

addButton.addEventListener('click', () => {
  <script type="text/javascript">
   var returnValue = confirm('안녕하세요?');
   alert(returnValue);
</script>
});

function addToList(text) {
  const list = document.querySelector('#list');

  const newListItem = document.createElement('li');
  newListItem.classList.add('list-item'); 

  newListItem.innerHTML = text;

  list.appendChild(newListItem);
}


