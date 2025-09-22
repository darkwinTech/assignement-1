// // Basic starter JS
//
//     var tablinks = document.getElementsByClassName('tab-links');
//     var taccontents = document.getElementsByClassName('tab-contents');
//     function openTab(tabname) {
//     for (tablink of tablinks) {
//     tablink.classList.remove("active-link");
// }
//     for (tabcontent of taccontents) {
//     tabcontent.classList.remove("active-tab");
// }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");
// }

// ===== Mobile drawer =====
const sidebar = document.querySelector('.sidebar');

function showSidebar() {
    sidebar.classList.add('show');
    sidebar.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function hideSidebar() {
    sidebar.classList.remove('show');
    sidebar.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Close on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('show')) hideSidebar();
});

// ===== Smooth scroll with fixed-nav offset =====
const NAV_HEIGHT = 76;
document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});

// ===== Footer year (optional) =====
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// ===== Simple tab logic (fixed your typos) =====
const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');

function openTab(event, tabId) {
    Array.from(tabLinks).forEach((el) => el.classList.remove('active-link'));
    Array.from(tabContents).forEach((el) => el.classList.remove('active-tab'));
    event.currentTarget.classList.add('active-link');
    const target = document.getElementById(tabId);
    if (target) target.classList.add('active-tab');
}

// Expose to inline HTML handler
window.openTab = openTab;
window.showSidebar = showSidebar;
window.hideSidebar = hideSidebar;
