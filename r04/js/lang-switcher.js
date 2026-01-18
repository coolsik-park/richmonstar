/* ============================================
   Language Switcher Handler
   ============================================ */

// Get current language from localStorage or default to 'ko'
let currentLanguage = localStorage.getItem('language') || 'ko';

document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const currentLangSpan = document.getElementById('currentLang');
    const langOptions = document.querySelectorAll('.lang-option');

    const mobileLangBtn = document.getElementById('mobileLangBtn');
    const mobileLangDropdown = document.getElementById('mobileLangDropdown');
    const mobileLangText = document.getElementById('mobileLangText');
    const mobileLangOptions = document.querySelectorAll('.mobile-lang-option');

    // Toggle desktop language dropdown
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langDropdown.classList.remove('active');
        });

        // Prevent closing when clicking inside dropdown
        langDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Toggle mobile language dropdown
    if (mobileLangBtn && mobileLangDropdown) {
        mobileLangBtn.addEventListener('click', () => {
            mobileLangDropdown.classList.toggle('active');
        });
    }

    // Handle desktop language selection
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            switchLanguage(lang);
            if (langDropdown) langDropdown.classList.remove('active');

            // Update active state
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    // Handle mobile language selection
    mobileLangOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            switchLanguage(lang);
            if (mobileLangDropdown) mobileLangDropdown.classList.remove('active');

            // Update active state
            mobileLangOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    // Initialize language on page load
    switchLanguage(currentLanguage);
});

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    const langLabels = { ko: 'KO', ja: 'JA', en: 'EN' };
    const langNames = { ko: '한국어', ja: '日本語', en: 'English' };

    const currentLangSpan = document.getElementById('currentLang');
    const mobileLangText = document.getElementById('mobileLangText');

    if (currentLangSpan) currentLangSpan.textContent = langLabels[lang];
    if (mobileLangText) mobileLangText.textContent = langNames[lang];

    applyTranslations(lang);
}

function applyTranslations(lang) {
    // translations 객체는 각 페이지의 translations 파일에서 정의됨
    if (typeof translations === 'undefined') return;

    const t = translations[lang];
    if (!t) return;

    // Update text content
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update HTML content (for <br> tags, etc.)
    document.querySelectorAll('[data-lang-html]').forEach(el => {
        const key = el.getAttribute('data-lang-html');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
}
