// Initialisation du compteur
let totalArticles = 0;
const badge = document.getElementById('cart-badge');
const buttons = document.querySelectorAll('.add-to-cart');

// Ecoute du clic sur chaque bouton
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        totalArticles++;
        badge.innerText = Panier (${totalArticles});
        
        // Animation visuelle du bouton
        const originalText = btn.innerText;
        btn.innerText = "Ajouté ! ✅";
        btn.classList.replace('bg-blue-600', 'bg-green-600');

        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.replace('bg-green-600', 'bg-blue-600');
        }, 1000);
    });
});
