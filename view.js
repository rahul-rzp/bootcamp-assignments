const localStorageData = localStorage.getItem('contact_book_data');
const contactBookData = localStorageData ? JSON.parse(localStorageData) : [];
console.log(contactBookData, "data");

const tableElement = document.createElement('table');

contactBookData.forEach(item => {
  const trElement = tableElement.insertRow();
  const nameElement = document.createElement('td');
  nameElement.innerHTML = item.name;
  trElement.appendChild(nameElement);

  const contactElement = document.createElement('td');
  contactElement.innerHTML = item.contact;
  trElement.appendChild(contactElement);

  tableElement.appendChild(trElement);
});

document.body.appendChild(tableElement);
