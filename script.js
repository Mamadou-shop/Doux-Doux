// 1. Ta liste de 50 produits avec des prix réalistes
const catalogueDouxDoux = [
    { id: 1, titre: "Écouteurs Bluetooth", prix: "15.000", cat: "High-Tech", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 2, titre: "Montre Quartz", prix: "10.000", cat: "Mode", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600" },
    { id: 3, titre: "Chargeur Rapide Type-C", prix: "5.000", cat: "Accessoires", img: "https://images.unsplash.com/photo-1619130704702-86161947b7b1?w=500" },
    { id: 4, titre: "Clé USB 64Go", prix: "4.500", cat: "Informatique", img: "https://images.unsplash.com/photo-1618410314050-7053356079c5?w=500" },
    { id: 5, titre: "Powerbank 10000mAh", prix: "12.500", cat: "High-Tech", img: "https://images.unsplash.com/photo-1609592424109-dd0371430030?w=500" },
    { id: 6, titre: "Souris Sans Fil", prix: "3.500", cat: "Informatique", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80" },
    { id: 7, titre: "T-shirt Coton", prix: "4.000", cat: "Mode", img: "https://via.placeholder.com/280" },
    { id: 8, titre: "Casquette Sport", prix: "2.500", cat: "Mode", img: "https://via.placeholder.com/280" },
    { id: 9, titre: "Coque iPhone", prix: "3.000", cat: "Accessoires", img: "https://images.unsplash.com/photo-1603313011101-316506a7d847?w=500" },
    { id: 10, titre: "Sac à dos USB", prix: "15.000", cat: "Mode", img: "https://via.placeholder.com/280" },
    { id: 11, titre: "Ring Light Selfie", prix: "8.500", cat: "Photo", img: "https://images.unsplash.com/photo-1596468138838-9e56f59e3821?w=500" },
    { id: 12, titre: "Support Téléphone Auto", prix: "2.000", cat: "Accessoires", img: "https://images.unsplash.com/photo-1586105449897-2242aa01524e?w=500" },
    { id: 13, titre: "Écran de protection", prix: "1.000", cat: "Accessoires", img: "https://images.unsplash.com/photo-1611186871348-b1ec696e520b?w=500" },
    { id: 14, titre: "Enceinte Mini", prix: "7.000", cat: "Audio", img: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500" },
    { id: 15, titre: "Câble HDMI 2m", prix: "3.500", cat: "Informatique", img: "https://images.unsplash.com/photo-1629739603091-665a3628e945?w=500" },
    { id: 16, titre: "Clavier Bureautique", prix: "6.500", cat: "Informatique", img: "https://images.unsplash.com/photo-1587829741301-dc798b83aca2?w=500" },
    { id: 17, titre: "Ventilateur USB", prix: "4.500", cat: "Gadget", img: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=500" },
    { id: 18, titre: "Lunettes de soleil", prix: "5.000", cat: "Mode", img: "" },
    { id: 19, titre: "Trépied Flexible", prix: "4.000", cat: "Photo", img: "" },
    { id: 20, titre: "Ampoule LED Connectée", prix: "9.000", cat: "Maison", img: "https://via.placeholder.com/280" },
    { id: 21, titre: "Parfum Homme 50ml", prix: "12.000", cat: "Beauté", img: "https://via.placeholder.com/280" },
    { id: 22, titre: "Crème Hydratante", prix: "3.500", cat: "Beauté", img: "https://via.placeholder.com/280" },
    { id: 23, titre: "Baskets Urbaines", prix: "18.500", cat: "Mode", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
    { id: 24, titre: "Adaptateur Secteur", prix: "2.500", cat: "Accessoires", img: "https://via.placeholder.com/280" },
    { id: 25, titre: "Gourde Isotherme", prix: "6.000", cat: "Maison", img: "https://via.placeholder.com/280" },
    { id: 26, titre: "Tapis de souris XXL", prix: "5.500", cat: "Informatique", img: "https://via.placeholder.com/280" },
    { id: 27, titre: "Micro Cravate", prix: "4.500", cat: "Audio", img: "https://via.placeholder.com/280" },
    { id: 28, titre: "Manette PC/Android", prix: "11.000", cat: "Gaming", img: "https://via.placeholder.com/280" },
    { id: 29, titre: "Webcam HD", prix: "14.500", cat: "Informatique", img: "https://via.placeholder.com/280" },
    { id: 30, titre: "Répéteur WiFi", prix: "13.000", cat: "High-Tech", img: "https://via.placeholder.com/280" },
    { id: 31, titre: "Livre de poche", prix: "3.000", cat: "Culture", img: "https://via.placeholder.com/280" },
    { id: 32, titre: "Porte-monnaie Cuir", prix: "7.500", cat: "Mode", img: "https://via.placeholder.com/280" },
    { id: 33, titre: "Ceinture Homme", prix: "4.500", cat: "Mode", img: "https://via.placeholder.com/280" },
    { id: 34, titre: "Kit Pinceaux Maquillage", prix: "6.500", cat: "Beauté", img: "https://via.placeholder.com/280" },
    { id: 35, titre: "Miroir LED", prix: "8.000", cat: "Beauté", img: "https://via.placeholder.com/280" },
    { id: 36, titre: "Support PC Ventilé", prix: "10.500", cat: "Informatique", img: "https://via.placeholder.com/280" },
    { id: 37, titre: "Sacoche Ordinateur", prix: "12.000", cat: "Informatique", img: "https://via.placeholder.com/280" },
    { id: 38, titre: "Balance de cuisine", prix: "5.500", cat: "Maison", img: "https://via.placeholder.com/280" },
    { id: 39, titre: "Machine à café Mini", prix: "25.000", cat: "Maison", img: "https://via.placeholder.com/280" },
    { id: 40, titre: "Rasoir Électrique", prix: "14.000", cat: "Beauté", img: "https://via.placeholder.com/280" },
    { id: 41, titre: "Veilleuse Enfant", prix: "4.000", cat: "Maison", img: "https://via.placeholder.com/280" },
    { id: 42, titre: "Hub USB 4 Ports", prix: "3.500", cat: "Informatique", img: "https://via.placeholder.com/280" },
    { id: 43, titre: "Carte Mémoire 32Go", prix: "3.000", cat: "High-Tech", img: "https://via.placeholder.com/280" },
    { id: 44, titre: "Bracelet Sport", prix: "2.000", cat: "Mode", img: "https://via.placeholder.com/280" },
    { id: 45, titre: "Organisateur de câbles", prix: "1.500", cat: "Accessoires", img: "https://via.placeholder.com/280" },
    { id: 46, titre: "Cutter de précision", prix: "1.200", cat: "Gadget", img: "https://via.placeholder.com/280" },
    { id: 47, titre: "Colle forte Tube", prix: "1.000", cat: "Gadget", img: "https://via.placeholder.com/280" },
    { id: 48, titre: "Piles Rechargeables x4", prix: "5.000", cat: "High-Tech", img: "https://via.placeholder.com/280" },
    { id: 49, titre: "Radio Portable", prix: "8.500", cat: "Audio", img: "https://via.placeholder.com/280" },
    { id: 50, titre: "Thermomètre Digital", prix: "2.500", cat: "Santé", img: "https://via.placeholder.com/280" }
];

// 2. Sélection de la grille
const grille = document.getElementById('product-grid');

// 3. Fonction pour générer les cages
function chargerProduits() {
    if(!grille) return;
    grille.innerHTML = ""; 

    catalogueDouxDoux.forEach(p => {
        grille.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${p.img}" alt="${p.titre}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="product-info">
                    <span class="category-tag">${p.cat}</span>
                    <h3 class="product-title">${p.titre}</h3>
                    <p class="product-price">${p.prix} FCFA</p>
                    <button class="btn-pay btn-wave" onclick="alert('Redirection Wave pour ${p.titre}')">Payer avec Wave</button>
                    <button class="btn-pay btn-om" onclick="alert('Redirection Orange Money pour ${p.titre}')">Payer avec Orange Money</button>
                </div>
            </div>
        `;
    });
}

// 4. Gestion du bouton remonter
window.onscroll = function() {
    let btn = document.getElementById("btn-scroll-top");
    if (document.documentElement.scrollTop > 100) { 
        btn.style.display = "block"; 
    } else { 
        btn.style.display = "none"; 
    }
};

document.getElementById("btn-scroll-top").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

// 5. Lancer le chargement
window.onload = chargerProduits;
