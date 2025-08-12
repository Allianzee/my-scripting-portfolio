document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalProof = document.getElementById("modal-proof");
  const modalDate = document.getElementById("modal-date");
  const modalDesc = document.getElementById("modal-desc");
  const modalVideo = document.getElementById("modal-video");
  const closeModal = document.querySelector(".close");

  // Open modal
  document.querySelectorAll(".view-details").forEach(button => {
    button.addEventListener("click", () => {
      modalTitle.textContent = button.dataset.title;
      modalProof.textContent = button.dataset.proof;
      modalDate.textContent = button.dataset.date;
      modalDesc.textContent = button.dataset.desc;
      modalVideo.href = button.dataset.video;
      modal.style.display = "flex";
    });
  });

  // Close modal
  closeModal.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Scroll animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});
