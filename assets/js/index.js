"use strict";

const database = [
	{
		src:
			"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
		desr: "man",
	},
	{
		src:
			"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
		desr: "man",
	},
	{
		src:
			"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
		desr: "man",
	},
];

const slides = database.map((slide) => {
	// Your code here to create Slides objects.
});

const slider = new Slider(slides);

const img = document.getElementById("image");
const [prevBtn, nextBtn] = document.querySelectorAll(
	"#sliderContainer> div > button"
);

const createButtonHandler = (direction = "next") => {
	return (event) => {
		const newIndex = slider[direction === "next" ? "nextIndex" : "prevIndex"];
		slider.currentIndex = newIndex;
		updateView();
	};
};

nextBtn.addEventListener("click", createButtonHandler("next"));
prevBtn.addEventListener("click", createButtonHandler("prev"));

updateView();

function updateView() {
	const {
		currentSlide: { src, description },
	} = slider;

	img.setAttribute("src", src);
	img.setAttribute("title", description);
}
