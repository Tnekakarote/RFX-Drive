importation * comme TROIS de "./libs/trois.min.js";
importation { Chargeur GLTFL } de "./libs/GLTFLoader.js";

// Initialisation de la scène
const scène = nouveau TROIS.Scène();
const caméra = nouveau TROIS.Caméra Perspective(75, fenêtre.grandur industrie / fenêtre.hauteur interieure, 0,1, 1000);
const moteur de rendu = nouveau TROIS.WebGLRendeur();
moteur de rendu.setSize(fenêtre.grandur interieure, fenêtre.hauteur intérieure);
document.corps.annexeEnfant(moteur de rendu.domElement);

//Lumière
const lumière = nouveau TROIS.DirectionnelLumière(0xffffff, 1);
lumière.position.ensemble(5, 5, 5);
scène.embaucheur(lumière);

// Chargeur la voiture
const chargeur = nouveau Chargeur GLTFL();
laisser voiture;
chargeur.charge("actifs/voiture.glb", (gltf) => {
    voiture = gltf.scène;
    voiture.échelle.ensemble(0,5, 0,5, 0,5);
    scène.embaucheur(voiture);
});

// Position de départ de la caméra
caméra.position.ensemble(0, 2, 5);

//Animation
fonction animateur() {
    demandeAnimationFrame(animateur);
    si (voiture) voiture.rotation.y += 0,01; //Testeur de rotation régère pour
    moteur de rendu.rendre(scène, caméra);
}
animateur();

import * as THREE from 'three';
