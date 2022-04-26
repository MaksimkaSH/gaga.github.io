let popupBg = document.querySelector('.popup_bg');
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.open-popup');
let closePopupButton = document.querySelector('.close-popup');


openPopupButton.addEventListener('click', (e) => { 
		e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
});

closePopupButton.addEventListener('click', () => { 
        popupBg.classList.remove('active'); 
        popup.classList.remove('active'); 
});

document.addEventListener('click', (e) => {
	if(e.target === popupBg){
		popupBg.classList.remove('active'); 
        popup.classList.remove('active'); 
	}
});	

/*function showAlert() {
	const someField = document.getElementById('some-field');
	const someC = document.getElementById('some-c');
	if (someField && someC) {
		const newEl = document.createElement('p');
		newEl.classList.add('test-class');
		newEl.innerHTML = someField.value;
		someC.appendChild(newEl);
	}
}*/


/*function clearA() {
	const someC = document.getElementById('some-c');
	if (someC) {
		someC.innerHTML = '';
	}
}
*/
var i = 0;

function addElement() {
	let product = { "name":null, "price":null, "img":null};
	const parentC = document.getElementById('parent');
	product.name = document.getElementById('name').value;
	product.price = document.getElementById('price').value;
	product.img = document.getElementById('img').value;
	
	if (parentC && product.name && product.price) {
		const newEl1 = document.createElement('li');
		newEl1.classList.add('product', 'new_products');
		newEl1.innerHTML = '';
		parentC.appendChild(newEl1);
		newEl1.id = 'newId' + i;
		const new_id = document.getElementById('newId'+i);
		const newEl2 = document.createElement('img');
		newEl2.src = product.img;
		newEl2.classList.add('imgs');
		new_id.appendChild(newEl2);
		const newEl3 = document.createElement('h3');
		newEl3.innerHTML = product.name;
		new_id.appendChild(newEl3);
		
		const newEl4 = document.createElement('h4');
		newEl4.innerHTML = '$' + product.price;
		new_id.appendChild(newEl4);
	}
	i++;
	
	
}