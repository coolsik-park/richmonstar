/* ============================================
   Contact Modal Handler
   ============================================ */

function openContactModal() {
    document.getElementById('contactModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    // Reset to form view
    document.getElementById('successMessage').classList.remove('active');
    document.getElementById('contactFormDiv').style.display = 'block';
}

function closeContactModal() {
    document.getElementById('contactModal').classList.remove('active');
    document.body.style.overflow = '';
    // Remove hash from URL
    if (window.location.hash === '#success') {
        history.replaceState(null, null, ' ');
    }
}

function showSuccessMessage() {
    document.getElementById('contactFormDiv').style.display = 'none';
    document.getElementById('successMessage').classList.add('active');
}

// Check if form was successfully submitted
window.addEventListener('load', function() {
    if (window.location.hash === '#success') {
        document.getElementById('contactModal').classList.add('active');
        document.body.style.overflow = 'hidden';
        showSuccessMessage();
    }
});

// Close modal on outside click
document.addEventListener('DOMContentLoaded', function() {
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        contactModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeContactModal();
            }
        });
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeContactModal();
    }
});
