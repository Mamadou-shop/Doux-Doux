let nombreArticles = 0; // Pour le compteur du panier

// On récupère les éléments de la fenêtre de paiement
const modal = document.getElementById('payment-modal');
const spanClose = document.getElementsByClassName("close")[0];

// Fermer la fenêtre quand on clique sur la petite croix
if(spanClose) {
    spanClose.onclick = function() { modal.style.display = "none"; }
}

const affichagePanier = document.getElementById('cart-count');
// 1. Charger les produits au démarrage de la page
async function chargerProduits() {
    try {
        const reponse = await fetch('products.json');
        const produits = await reponse.json();
        
        const conteneur = document.getElementById('shop-container');
        conteneur.innerHTML = ''; // Vide la zone avant d'ajouter

     
                
              // Mise à jour de la fonction pour inclure Wave et Orange Money
function genererCages() {
    grille.innerHTML = "";

    catalogueDouxDoux.forEach(produit => {
        const cageHTML = `
            <div class="product-card shadow-sm">
                <div class="product-image" style="background: #eee; height: 280px; position: relative;">
                    <img src="${produit.image}" alt="${produit.titre}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                
                <div class="product-info" style="padding: 15px;">
                    <span class="category-tag" style="color: #666; font-size: 0.8rem;">${produit.categorie}</span>
                    <h3 class="product-title" style="margin: 10px 0; font-size: 1.1rem;">${produit.titre}</h3>
                    <p class="product-price" style="font-weight: bold; color: #2ecc71; font-size: 1.2rem;">${produit.prix} FCFA</p>
                    
                    <button class="btn-hero" style="width: 100%; margin-bottom: 10px; background: #333; color: white; border: none; padding: 10px; cursor: pointer;">
                        🛒 Ajouter au panier
                    </button>

                    <div class="mobile-pay" style="display: flex; gap: 5px;">
                        <button onclick="payerWave('${produit.titre}', '${produit.prix}')" style="flex: 1; background: #1da1f2; color: white; border: none; padding: 8px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold;">
                            🌊 Wave
                        </button>
                        <button onclick="payerOM('${produit.titre}', '${produit.prix}')" style="flex: 1; background: #ff7900; color: white; border: none; padding: 8px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold;">
                            🍊 Orange
                        </button>
                    </div>
                </div>
            </div>
        `;
        grille.innerHTML += cageHTML;
    });
}

// Fonctions de simulation de paiement
function payerWave(nom, prix) {
    alert("Redirection vers Wave pour l'achat de : " + nom + "\nMontant : " + prix + " FCFA");
}

function payerOM(nom, prix) {
    alert("Initialisation du paiement Orange Money pour : " + nom + "\nMontant : " + prix + " FCFA");
}


    let mybutton = document.getElementById("btn-scroll-top");

// Quand l'utilisateur scrolle de 20px, on montre le bouton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Quand on clique, on remonte en haut avec un effet fluide
mybutton.onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};
