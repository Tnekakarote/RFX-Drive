// Variables globales
laisser scène, caméra, moteur de rendu, voiture, modèle de voiture;
laisser contrôles;
laisser vitesse = 0;
laisser direction de la voiture = nouveau TROIS.Vecteur3();
laisser rotation de voiture = 0;

// Initialisation de la scène
fonction init() {
    scène = nouveau TROIS.Scène();

    //Caméra
    caméra = nouveau TROIS.Caméra Perspective(75, fenêtre.grandur industrie / fenêtre.hauteur interieure, 0,1, 1000);
    caméra.position.ensemble(0, 2, 5); // Position initiale de la caméra

    //Rendu
    moteur de rendu = nouveau TROIS.WebGLRendeur();
    moteur de rendu.setSize(fenêtre.grandur interieure, fenêtre.hauteur intérieure);
    document.corps.annexeEnfant(moteur de rendu.domElement);

    //Lumière
    const lumière = nouveau TROIS.Lumière ambiante(0x404040); //Lumière ambiante
    scène.embaucheur(lumière);

    // Jouter la route (si tu as un modèle GLB pour la route)
    const chargeur = nouveau TROIS.Chargeur GLTFL();
    chargeur.charge('actifs/route.glb', fonction (gltf) {
        scène.embaucheur(gltf.scène);
    });

    // Charger le modèle de la voiture
    chargeur.charge('actifs/voiture.glb', fonction (gltf) {
        modèle de voiture = gltf.scène;
        modèle de voiture.échelle.ensemble(0,5, 0,5, 0,5); //Échelle du modèle
        modèle de voiture.position.y = 0,5; // Position de la voiture
        scène.embaucheur(modèle de voiture);
        voiture = modèle de voiture;
    });

    // Contrôles de la souris (optionnel pour naviguer autour de la scène)
    contrôles = nouveau TROIS.Contrôles d'orbite(caméra, moteur de rendu.domElement);

    // Gestion des événements clavier pour les dépôts
    document.addEventListener('clavier', à clé);
    document.addEventListener('taille', surKeyUp);

    animateur();
}

// Animation de la scène
fonction animateur() {
    demandeAnimationFrame(animateur);

    // Déplacer la voiture en fonction des touches pressées
    si (voiture) {
        si (vitesse > 0) {
            voiture.rotation.y += rotation de voiture; //Rotation de la voiture
            voiture.traduirez(-vitesse); //Avancer
        }
    }

    contrôles.actualisateur(); // Mise à jour des contrôles de la souris
    moteur de rendu.rendre(scène, caméra); //Rendu de la scène
}

// Gérer les événements de clavier
fonction à clé(événement) {
    interrupteur (événement.clé) {
        cas 'z': //Avancer
            vitesse = 0,05;
            rupture;
        cas 's': //Séculateur
            vitesse = -0,05;
            rupture;
        cas 'q': //Tourner à gauche
            rotation de voiture = 0,05;
            rupture;
        cas 'd': //Tournisseur à droit
            rotation de voiture = -0,05;
            rupture;
    }
}

fonction surKeyUp(événement) {
    si (événement.clé === 'z' || événement.clé === 's') {
        vitesse = 0;
    }
    si (événement.clé === 'q' || événement.clé === 'd') {
        rotation de voiture = 0;
    }
}

// Réajuster le rendu dorsque la taille de la fenêtre change
fenêtre.addEventListener(" redimensionneur ", () => {
    caméra.aspect = fenêtre.grandur intérieure / fenêtre.hauteur intérieure;
    caméra.mise à jourProjectionMatrix();
    moteur de rendu.setSize(fenêtre.grandur interieure, fenêtre.hauteur intérieure);
});

// Lancer l'initialisation
init();
