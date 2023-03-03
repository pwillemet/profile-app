import './style.css'

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
}

const disponibility = new Date("2023-03-28");

const disponibilityElem = document.getElementById("disponibility");
const [disponibilityText, disponibilityClass] = getDisponibility(disponibility);
disponibilityElem.textContent = disponibilityText;
disponibilityElem.classList.add(disponibilityClass);

function getDisponibility(disponibility) {
  const now = new Date();
  const delta = now.getTime() - disponibility?.getTime();
  if (disponibility == null || delta >= 0) return [`Disponible`, "disponibility-disponible"]
  if (delta >= -2629800000) return [`Bientôt disponible - à partir du (${disponibility.toLocaleDateString()})`, "disponibility-soon"]
  return [`En mission`, "disponibility-none"]
}
