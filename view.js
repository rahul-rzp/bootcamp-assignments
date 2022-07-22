const localStorageData = localStorage.getItem('contact_book_data');
const contactBookData = localStorageData ? JSON.parse(localStorageData) : [];
console.log(contactBookData, "data");

const tableElement = document.createElement('table');
const tableHeader = document.createElement('thead');
const tableHeaderName = document.createElement('th');
tableHeaderName.innerHTML = "Name";

const tableHeaderContact = document.createElement('th');
tableHeaderContact.innerHTML = "Contact";
tableElement.appendChild(tableHeader);
tableHeader.appendChild(tableHeaderName);
tableHeader.appendChild(tableHeaderContact);

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

document.querySelector('.content').appendChild(tableElement);
