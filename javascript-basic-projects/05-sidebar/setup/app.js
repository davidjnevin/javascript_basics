const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const sidebarToggle = document.querySelector('.sidebar-toggle');

sidebarToggle.addEventListener('click', toggleSidebar);

closeBtn.addEventListener('click', toggleSidebar);

function toggleSidebar() {
	sidebar.classList.toggle('show-sidebar');
}
