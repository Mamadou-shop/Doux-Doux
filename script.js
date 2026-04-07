// 1. Ta liste de produits (ajoute autant que tu veux ici)
const catalogueDouxDoux = [
    { id: 1, titre: "iPhone 15 Pro Max", prix: "850.000", cat: "High-Tech", img: "https://via.placeholder.com/280" },
    { id: 2, titre: "Samsung S24 Ultra", prix: "750.000", cat: "High-Tech", img: "https://via.placeholder.com/280" },
    { id: 3, titre: "AirPods Pro 2", prix: "150.000", cat: "Accessoires", img: "https://via.placeholder.com/280" },
    { id: 4, titre: "MacBook Air M3", prix: "950.000", cat: "Informatique", img: "https://via.placeholder.com/280" },
    { id: 5, titre: "Apple Watch S9", prix: "250.000", cat: "Gadget", img: "https://via.placeholder.com/280" },
    { id: 6, titre: "PlayStation 5", prix: "450.000", cat: "Gaming", img: "https://via.placeholder.com/280" }
];

// 2. Sélection de la grille
const grille = document.getElementById('product-grid');

// 3. Fonction pour générer les cages
function chargerProduits() {
    if(!grille) return;
    grille.innerHTML = ""; // On vide

    catalogueDouxDoux.forEach(p => {
        grille.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${p.img}" alt="${p.titre}" style="width:100%;">
                </div>
                <div class="product-info">
                    <span class="category-tag">${p.cat}</span>
                    <h3 class="product-title">${p.titre}</h3>
                    <p class="product-price">${p.prix} FCFA</p>
                    <button class="btn-pay btn-wave" onclick="alert('Lien Wave envoyé')">Payer avec Wave</button>
                    <button class="btn-pay btn-om" onclick="alert('Lien OM envoyé')">Payer avec Orange Money</button>
                </div>
            </div>
        `;
    });
}

// 4. Gestion du bouton remonter
window.onscroll = function() {
    let btn = document.getElementById("btn-scroll-top");
    if (document.documentElement.scrollTop > 100) { btn.style.display = "block"; } 
    else { btn.style.display = "none"; }
};

document.getElementById("btn-scroll-top").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

// 5. Lancer le chargement
window.onload = chargerProduits;
