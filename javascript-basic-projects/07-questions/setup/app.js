//using selectors inside the element
// traversing the dom


// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
// 	btn.addEventListener('click', function(e) {
// 		// Traverse the dom to get to the parent element
// 		const question = e.currentTarget.parentElement.parentElement;
// 		question.classList.toggle('show-text');
// 		console.log(question);
// 	});
// });


// Use selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
	// console.log(question);
	const btn = question.querySelector('.question-btn');
	// console.log(btn);
	btn.addEventListener('click', function() {
		// console.log(question);
		// remove show text from all other questions
		questions.forEach(function(item) {
			if (item !== question) {
				item.classList.remove('show-text');
			}
		});
		question.classList.toggle('show-text');
	});
}
);
