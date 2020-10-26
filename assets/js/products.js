function selectProduct(titleElement) {
  const title = titleElement.dataset.title.substring(8);
  
  if (!titleElement.classList.contains('selected')) {
    document.querySelector('.selector .titles .selected').classList.remove('selected');
    titleElement.classList.add('selected');

    document.querySelector('.selector .contents .selected').style.display = 'none';
    document.querySelector('.selector .contents .selected').classList.remove('selected');
    
    document.querySelector('.selector .contents .' + title).style.display = 'initial';
    document.querySelector('.selector .contents .' + title).classList.add('selected');

  }
}