function handleSubmit(event){
  event.preventDefault();

  const localStorageData = localStorage.getItem('contact_book_data');
  const contactBookData = localStorageData ? JSON.parse(localStorageData) : [];
  const nameElement = document.querySelector('input[name=name]');
  const numberElement = document.querySelector('input[name=number]');

  contactBookData.push({
    name: nameElement.value,
    contact: numberElement.value
  })

  localStorage.setItem('contact_book_data', JSON.stringify(contactBookData));
  alert('Contact added');
  return false;
}