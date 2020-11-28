//1) Вывод содержимого инпута через алерт или лог.

document.getElementById("inputLog").addEventListener("input", (event) => {
	console.log(event.target.value);
});

//2) По нажатию на кнопку изменить текст самой  кнопки

document.getElementById("btn-color-change").addEventListener("click", (event) => {
	if (!event.target.classList.contains("blue")) {
		event.target.classList.add("blue");
		return;
	}
	event.target.classList.remove("blue");
});

//3) Отобразить картинку. Сделать так, что бы при появлении страницы отображалсь одна картинка, а при наведении мышью на неё отображалась другая. 

document.getElementById("img").addEventListener("mouseenter", createImageHandler("logo2.png"));
function createImageHandler(src) {
	return function (event) {
		event.target.src = src;
	};
}

