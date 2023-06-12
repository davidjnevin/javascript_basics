// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');

const url = 'https://images.unsplash.com/photo-1685644072593-b0e42d185d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjU4OTc1OA&ixlib=rb-4.0.3&q=80&w=1080';

btn.addEventListener('click', () => {
	addColor(1000, heading1, "red")
		.then(() => addColor(2000, heading2, "green"))
		.then(() => addColor(3000, heading3, "blue"))
		.catch((addColorError) => console.log(addColorError));
	loadImage(url)
		.then((data) => container.append(data))
		.catch((err) => console.log(err));
});

function addColor(time, element, color) {
	return new Promise((resolve, reject) => {
		if (element) {
			setTimeout(() => {
				element.style.color = color;
				resolve();
			}, time)
		}
		else {
			reject(new Error(`There is no such element: ${element}`));
		}
	})
}

function loadImage(url) {
	return new Promise((resolve, reject) => {
		let img = new Image();
		img.addEventListener('load', () => {
			resolve(img);
		})
		img.addEventListener('error', () => {
			reject(new Error(`There was a problem loading the image. ${url}`))
		})
		img.src = url;
	});
}
