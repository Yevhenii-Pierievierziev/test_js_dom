// 1.Сделать два инпута: в один вводить параметр(число), во втором показывать объем шара при заданном параметре.

function volumeSphere() {
	const volume;
	const radius = document.getElementById("numberinput").value;
	radius = Math.abs(radius);
	volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	volume = volume.toFixed(4);
	document.getElementById("volume").value = volume;
	return false;
}

document.getElementById("numberinput").addEventListener("input", (event) => {
	volumeSphere(event.target.value);
});

document.getElementById("volume").addEventListener("input", (event) => {
	console.log(event.target.value);
});

document.getElementById("btn").onclick = (event) => {
	event.target.textContent = "Changed Value";
};

/* 
	2.Дан элемент #elem. Реализуйте 4 функции:
- Добавьте ему класс www.
- Удалите у него класс www.
- Проверьте наличие у него класса www.
- Добавьте ему класс www, если его нет и удалите - если есть.
 */

function elemOperations() {
	const elem = document.getElementById("elem");
	elem.classList.add("www");
	elem.classList.remove("www");
	if (!elem.classList.contains("www")) {
		elem.classList.add("www");
	} else {
		elem.classList.add("www");
	}
}
elemOperations();

const items = [
	{
		id: 1,
		title: "one",
		description: "first element",
	},
	{
		id: 2,
		title: "two",
		description: "second element",
	},
	{
		id: 3,
		title: "three",
		description: "third element",
	},
];

/* 
3. Вставьте элементы массива объектов(id, title, description) в конец ul так, чтобы каждый на каждый объект был свой li. 
Сделайте так, чтобы по нажатию на li - он подсвечивался другим цветом.
Сделайте так, чтобы по нажатию на кнопку внтри li эта li удалялась из разметки.
 */

function addElements(items) {
	const i = 0;
	items.forEach((item) => {
		const ul = document.getElementById("ul");
		const li = document.createElement("li");
		const button = document.createElement("button");
		button.innerHTML = "Remove";
		button.setAttribute("id", "li" + i);
		li.appendChild(button);
		li.appendChild(
			document.createTextNode(`${item.id}, ${item.title}, ${item.description}`)
		);
		li.setAttribute("id", "li" + i);
		ul.appendChild(li);
		i++;
	});
}
addElements(items);

document.getElementById("ul").addEventListener("click", (event) => {
	console.log(event.target.type);
	if (event.target.type === "submit") {
		const li = document.getElementById(event.target.id);
		const ul = document.getElementById("ul");
		ul.removeChild(li);
		return;
	}
	if (!event.target.classList.contains("blue")) {
		event.target.classList.add("blue");
		return;
	}
	event.target.classList.remove("blue");
});


/* 
4. Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции. Класс должен работать следующим образом:
const elem = new Elem('селектор');
elem.html('!'); //запишет в текст элемента '!'
elem.append('!'); //запишет в начало элемента '!'
elem.prepend('!'); //запишет в конец элемента '!'
elem.attr('class', 'www'); //запишет в атрибут class значение www
Должны работать цепочки методов:
elem.html('hello').append('!').prepend('!').attr('class', 'www').attr('title', 'hello');
*/

class Elem {
	constructor(selector) {
		this.elem = document.getElementById(selector);
	}

	html(text) {
		this.elem.innerText = text;
		return this;
	}
	append(text) {
		this.elem.innerText += text;
		return this;
	}
	prepend(text) {
		this.elem.innerText = text + this.elem.innerText;
		return this;
	}
	attr(name, value) {
		this.elem.classList.add(name, value);
		return this;
	}
}

const elem = new Elem("elem");

elem.html("hello").append(" world!").prepend('I want to say ... ').attr('class', 'blue').attr('title', 'hello');


