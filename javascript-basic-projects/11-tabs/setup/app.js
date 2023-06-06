const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
	tabId = e.target.dataset.id;
	if (tabId) {
		// remove active from other buttons
		btns.forEach(function(btn) {
			btn.classList.remove('active');
			e.target.classList.add('active');
		});
		// hide other articles
		articles.forEach(function(article) {
			article.classList.remove('active');
		});
		// show article
		const element = document.getElementById(tabId);
		element.classList.add('active');
	}
});

