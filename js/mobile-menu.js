/* ============================================
   Mobile Menu Handler
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMobileMenuBtn = document.getElementById('closeMobileMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    function toggleMobileMenu() {
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        if (isOpen) {
            closeMobileMenuFunc();
        } else {
            openMobileMenu();
        }
    }

    function openMobileMenu() {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
        if (mobileMenuBtn) {
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            mobileMenuBtn.setAttribute('aria-label', '메뉴 닫기');
        }
    }

    function closeMobileMenuFunc() {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
        if (mobileMenuBtn) {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.setAttribute('aria-label', '메뉴 열기');
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    if (closeMobileMenuBtn) {
        closeMobileMenuBtn.addEventListener('click', closeMobileMenuFunc);
    }

    // Close mobile menu when clicking on a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenuFunc);
    });

    // Close mobile menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
            closeMobileMenuFunc();
        }
    });
});
