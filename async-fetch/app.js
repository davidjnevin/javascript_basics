console.log("hello");

const url = "./api/people.json";

const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
  } catch (err) {
    console.log(err);
  }
});

// btn.addEventListener('click', async () => {
// 	const response = await fetch(url);
// 	const data = await response.json();
// 	displayItems(data);
// });

// btn.addEventListener('click', () => {
// 	fetch(url)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			// console.log(data);
// 			displayItems(data);
// 		})
// 		.catch((err) => {
// 			console.log(err)
// 		});
// });

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join("");
  // console.log(displayData);
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};

// fetch(url)
// 	.then((response) => {
// 		// response object
// 		// useful properties and methods
// 		// console.log(response);
// 		// convert to JSON data
// 		// returns promise
// 		return response.json();
// 	}).then((data) => {
// 		console.log(data);
// 	}).catch((err) => console.log(err));
