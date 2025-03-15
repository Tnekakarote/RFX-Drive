// Initialisation de la scène 3D
laisser scène, caméra, moteur de rendu;

fonction init() {
    //Créer la scène
    scène = nouveau TROIS.Scène();

    //Créer la caméra
    caméra = nouveau TROIS.Caméra Perspective(75, fenêtre.grandur industrie / fenêtre.hauteur interieure, 0,1, 1000);
    caméra.position.z = 5;

    //Créer le rendu
    moteur de rendu = nouveau TROIS.WebGLRendeur();
    moteur de rendu.setSize(fenêtre.grandur interieure, fenêtre.hauteur intérieure);
    document.corps.annexeEnfant(moteur de rendu.domElement);

    //Testeur de coulée Jouter un cube
    const géométrie = nouveau TROIS.BoxGéométrie();
    const matériel = nouveau TROIS.Matériau MeshBasic({ couleur: 0x00ff00 });
    const cube = nouveau TROIS.Maille(géométrie, matériel);
    scène.embaucheur(cube);

    //Fonction d'animation
    fonction animateur() {
        demandeAnimationFrame(animateur);

        // Animation de rotation du cube
        cube.rotation.x += 0,01;
        cube.rotation.y += 0,01;

        moteur de rendu.rendre(scène, caméra);
    }

    animateur();
}

init();

