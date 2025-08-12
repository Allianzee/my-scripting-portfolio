// Scroll reveal
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
});

// Modal logic
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalProof = document.getElementById('modal-proof');
const modalDate = document.getElementById('modal-date');
const modalDesc = document.getElementById('modal-desc');
const modalVideo = document.getElementById('modal-video');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.view-details').forEach(btn => {
  btn.addEventListener('click', () => {
    modalTitle.textContent = btn.dataset.title;
    modalProof.textContent = btn.dataset.proof;
    modalDate.textContent = btn.dataset.date;
    modalDesc.textContent = btn.dataset.desc;
    modalVideo.href = btn.dataset.video;
    modal.classList.remove('hidden');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});
