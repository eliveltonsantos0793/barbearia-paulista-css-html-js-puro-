/* Barbearia Paulista — JavaScript puro, sem dependências */
"use strict";

const BARBERSHOP = {
  name: "Barbearia"// Paulista ",
  whatsapp: //"5548999985115",
  whatsappDisplay: 999999999999//"(48) 99998-5115",
  services: [
    { id: "corte", name: "Corte masculino", description: "Tesoura ou máquina, finalizado com lavagem e pomada.", price: 55, duration: "40 min" },
    { id: "degrade", name: "Degradê navalhado", description: "Fade preciso com acabamento na navalha.", price: 65, duration: "50 min" },
    { id: "barba", name: "Barba com toalha quente", description: "Ritual completo: toalha quente, óleo, navalha e balm.", price: 45, duration: "30 min" },
    { id: "combo", name: "Corte + Barba", description: "O clássico da casa. Saia pronto para qualquer ocasião.", price: 90, duration: "1h10", featured: true },
    { id: "pezinho", name: "Pezinho e sobrancelha", description: "Manutenção rápida entre um corte e outro.", price: 25, duration: "15 min" },
    { id: "pigmentacao", name: "Pigmentação de barba", description: "Preenche falhas e realça o desenho da barba.", price: 40, duration: "30 min" }
  ]
};

const selectedServices = new Set();
const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function whatsappUrl(message) {
  const defaultMessage = `Olá, ${BARBERSHOP.name}! Gostaria de agendar um horário.`;
  return `https://wa.me/${BARBERSHOP.whatsapp}?text=${encodeURIComponent(message || defaultMessage)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach(link => {
  const message = link.dataset.message;
  link.href = whatsappUrl(message);
  if (!link.target) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});
document.querySelectorAll("[data-whatsapp-display]").forEach(link => {
  link.href = whatsappUrl();
});
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  mobileNav.hidden = isOpen;
  document.body.classList.toggle("menu-open", !isOpen);
});
mobileNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    document.body.classList.remove("menu-open");
  });
});

const grid = document.getElementById("service-grid");
const packageBar = document.getElementById("package-bar");
const packageCount = document.getElementById("package-count");
const packageNames = document.getElementById("package-names");
const packageTotal = document.getElementById("package-total");
const packageWhatsApp = document.getElementById("package-whatsapp");

function renderServices() {
  grid.innerHTML = BARBERSHOP.services.map(service => {
    const selected = selectedServices.has(service.id);
    return `<article class="service-card${service.featured ? " featured" : ""}${selected ? " selected" : ""}">
      ${service.featured ? '<span class="featured-label">Mais pedido</span>' : ""}
      <div class="service-top"><h3>${service.name}</h3><span class="service-price">${money(service.price)}</span></div>
      <p class="service-description">${service.description}</p>
      <p class="service-duration">◷ &nbsp; ${service.duration}</p>
      <div class="service-actions">
        <a class="button button-outline" href="${whatsappUrl(`Olá, ${BARBERSHOP.name}! Gostaria de agendar: ${service.name} (${money(service.price)}).`)}" target="_blank" rel="noopener noreferrer">Agendar</a>
        <button class="select-service" type="button" data-service-id="${service.id}" aria-pressed="${selected}" aria-label="${selected ? "Remover" : "Adicionar"} ${service.name} ${selected ? "do" : "ao"} pacote">${selected ? "✓" : "+"}</button>
      </div>
    </article>`;
  }).join("");

  grid.querySelectorAll("[data-service-id]").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.serviceId;
      if (selectedServices.has(id)) selectedServices.delete(id);
      else selectedServices.add(id);
      renderServices();
      renderPackage();
    });
  });
}

function renderPackage() {
  const picked = BARBERSHOP.services.filter(service => selectedServices.has(service.id));
  const total = picked.reduce((sum, service) => sum + service.price, 0);
  packageBar.hidden = picked.length === 0;
  if (!picked.length) return;

  packageCount.textContent = `${picked.length} ${picked.length === 1 ? "serviço" : "serviços"}`;
  packageNames.textContent = picked.map(service => service.name).join(" + ");
  packageTotal.textContent = money(total);
  const lines = picked.map(service => `• ${service.name} — ${money(service.price)}`).join("\n");
  packageWhatsApp.href = whatsappUrl(`Olá, ${BARBERSHOP.name}! Gostaria de agendar:\n${lines}\nTotal: ${money(total)}`);
}

renderServices();
renderPackage();
