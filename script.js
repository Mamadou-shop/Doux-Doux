// 1. Ta liste de 50 produits avec des prix réalistes
const catalogueDouxDoux = [
    { id: 1, titre: "Écouteurs Bluetooth", prix: "15.000", cat: "High-Tech", img: "https://i.pinimg.com/1200x/f1/43/da/f143da04925eed47c677e31d5c2149d4.jpg" },
    { id: 2, titre: "Montre Quartz", prix: "10.000", cat: "Mode", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600" },
    { id: 3, titre: "Chargeur Rapide Type-C", prix: "5.000", cat: "Accessoires", img: "https://i.pinimg.com/1200x/e5/41/24/e54124d86ab0362870d271ffb78e275b.jpg" },
    { id: 4, titre: "Clé USB 64Go", prix: "4.500", cat: "Informatique", img: "https://i.pinimg.com/736x/79/d6/bd/79d6bd675ec0090fdd54fc65ec9e00db.jpg" },
    { id: 5, titre: "Powerbank 10000mAh", prix: "12.500", cat: "High-Tech", img: "https://i.pinimg.com/736x/48/bb/af/48bbaf4548f7c0d45026b3741bcf3132.jpg" },
    { id: 6, titre: "Souris Sans Fil", prix: "3.500", cat: "Informatique", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80" },
    { id: 7, titre: "T-shirt Coton", prix: "4.000", cat: "Mode", img: "https://i.pinimg.com/736x/27/4c/78/274c78deb9aaec0dbea20f60d6e8133a.jpg" },
    { id: 8, titre: "Casquette Sport", prix: "2.500", cat: "Mode", img: "https://i.pinimg.com/1200x/18/e6/80/18e68041cd04caa5a17268a56cfac252.jpg" },
    { id: 9, titre: "Coque iPhone", prix: "3.000", cat: "Accessoires", img: "https://i.pinimg.com/1200x/27/90/e4/2790e4a0d84d5a72ba8a66ff7a986f99.jpg" },
    { id: 10, titre: "Sac à dos USB", prix: "15.000", cat: "Mode", img: "https://i.pinimg.com/736x/36/18/69/36186951c2ef99813ddf669516540d1a.jpg" },
    { id: 11, titre: "Ring Light Selfie", prix: "8.500", cat: "Photo", img: "https://i.pinimg.com/736x/ac/71/3a/ac713afa1cadb288340af4542a0e1213.jpg" },
    { id: 12, titre: "Support Téléphone Auto", prix: "2.000", cat: "Accessoires", img: "https://i.pinimg.com/1200x/01/c9/ad/01c9ad11758dc615de1b3bc90e15832e.jpg" },
    { id: 13, titre: "Écran de protection", prix: "1.000", cat: "Accessoires", img: "https://i.pinimg.com/1200x/ff/8c/47/ff8c4742aa796f4b51d25de67d579364.jpg" },
    { id: 14, titre: "Enceinte Mini", prix: "7.000", cat: "Audio", img: "https://www.rekfi.com/storage/2024/07/Enceinte-Portable-Bluetooth-Tronsmart-T7-mini-GRIS.jpg" },
    { id: 15, titre: "Câble HDMI 2m", prix: "3.500", cat: "Informatique", img: "https://i.pinimg.com/1200x/f9/fa/e4/f9fae45e903d9fe2c73be22fb91ccc5b.jpg" },
    { id: 16, titre: "Clavier Bureautique", prix: "6.500", cat: "Informatique", img: "https://i.pinimg.com/736x/a2/b2/af/a2b2af4c5cc18b7f134d8b472384626a.jpg" },
    { id: 17, titre: "Ventilateur USB", prix: "4.500", cat: "Gadget", img: "https://i.pinimg.com/736x/69/80/07/698007602bc12b99d2fdb06687f05dd4.jpg" },
    { id: 18, titre: "Lunettes de soleil", prix: "5.000", cat: "Mode", img: "https://i.pinimg.com/1200x/09/f6/89/09f689dac200296080a6f7831af3def4.jpg" },
    { id: 19, titre: "Trépied Flexible", prix: "4.000", cat: "Photo", img: "https://i.pinimg.com/1200x/cd/01/47/cd01476131736bc70ddd2059c9290565.jpg" },
    { id: 20, titre: "Ampoule LED Connectée", prix: "9.000", cat: "Maison", img: "https://i.pinimg.com/736x/6f/f3/6b/6ff36b1029308d3590d52060f21c188f.jpg" },
    { id: 21, titre: "Parfum Homme 50ml", prix: "12.000", cat: "Beauté", img: "https://i.pinimg.com/736x/ac/6e/7c/ac6e7c34bb818963af1d1bce9752a19f.jpg" },
    { id: 22, titre: "Crème Hydratante", prix: "3.500", cat: "Beauté", img: "https://i.pinimg.com/736x/8e/bc/55/8ebc5596743eb7221c2d1878c3d4492b.jpg" },
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
