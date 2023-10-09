import React from "react";
import "../../styles/app-header.css";

const SettingsHeader = () => {
	return (
		<div className="app-header vscode-header">
			<div className="tab long apple">
				<div className="box">
					<img
						src="../../images/icons/icon_mac.svg"
						alt="The Apple
                        logo."
					/>
				</div>
				<div className="container">
					<div className="enabled">À propos de ce Mac</div>
					<hr />
					<div className="enabled">Réglages du système...</div>
					<div className="enabled">App Store...</div>
					<hr />
					<div className="command enabled">
						<div>Éléments récents</div>
						<img
							className="right-arrow"
							src="../../images/icons/icon_right-arrow.png"
							alt=""
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Forcer à quitter...</div>
						<div className="symbols">&#8997; &#8984; &#9099;</div>
					</div>
					<hr />
					<div className="enabled">Suspendre l'activité</div>
					<div className="enabled">Redémarrer...</div>
					<div className="enabled">Éteindre...</div>
					<hr />
					<div className="command enabled">
						<div>Vérouiller l'écran</div>
						<div className="symbols">&#8963; &#8984; Q</div>
					</div>
					<div className="command enabled">
						<div>Fermer la session Yohann D...</div>
						<div className="symbols">&#8679; &#8984; Q</div>
					</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box title">
					<p className="title app">Code</p>
				</div>
				<div className="container">
					<div className="enabled">À propos de Visual Studio Code</div>
					<div className="enabled">Rechercher les mises à jour...</div>
					<hr />
					<div className="command enabled">
						<div>Réglages...</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Servies</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Masquer Visual Studio Code</div>
						<div className="symbols">&#8984; H</div>
					</div>
					<div className="command enabled">
						<div>Masquer les autres</div>
						<div className="symbols">&#8997; &#8984; H</div>
					</div>
					<div className="grey">Afficher tout</div>
					<hr />
					<div className="command enabled">
						<div>Quitter Visual Studio Code</div>
						<div className="symbols">&#8984; Q</div>
					</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Fichier">
					<p className="title">Fichier</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Nouveau fichier texte</div>
						<div className="symbols">&#8984; N</div>
					</div>
					<div className="command">
						<div className="grey">Nouveau fichier...</div>
						<div className="symbols">&#8963; &#8997; &#8984; N</div>
					</div>
					<div className="command enabled">
						<div>Nouvelle fenêtre</div>
						<div className="symbols">&#8679; &#8984; N</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Ouvrir...</div>
						<div className="symbols">&#8984; O</div>
					</div>
					<div className="enabled">Ouvrir le dossier...</div>
					<div className="enabled">
						Ourir l'espace de travail à partir du fichier...
					</div>
					<div className="command enabled">
						<div>Ouvrir les éléments récents</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div>Ajouter un dossier à l'espace de travail...</div>
					<div>Enregistrer l'espace de travail sous...</div>
					<div>Dupliquer l'espace de travail</div>
					<hr />
					<div className="command">
						<div className="grey">Enregistrer</div>
						<div className="symbols">&#8984; S</div>
					</div>
					<div className="command">
						<div className="grey">Enregistrer sous...</div>
						<div className="symbols">&#8679; &#8984; S</div>
					</div>
					<div className="command">
						<div className="grey">Enregistrer tout</div>
						<div className="symbols">&#8997; &#8984; S</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Partager</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Enregistrement automatique</div>
					</div>
					<hr />
					<div className="grey">Rétablir le fichier</div>
					<div className="command">
						<div className="grey">Fermer l'éditeur</div>
						<div className="symbols">&#8984; W</div>
					</div>
					<div className="command enabled">
						<div>Fermer le dossier</div>
						<div className="symbols">&#8984;K F</div>
					</div>
					<div className="command enabled">
						<div>Fermer la fenêtre</div>
						<div className="symbols">&#8984; W</div>
					</div>
				</div>
			</div>
			<div className="tab extralong">
				<div className="box" id="Edition">
					<p className="title">Édition</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Annuler</div>
						<div className="symbols">&#8984; Z</div>
					</div>
					<div className="command enabled">
						<div>Rétablir</div>
						<div className="symbols">&#8679; &#8984; Z</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Couper</div>
						<div className="symbols">&#8984; X</div>
					</div>
					<div className="command enabled">
						<div>Copier</div>
						<div className="symbols">&#8984; C</div>
					</div>
					<div className="command enabled">
						<div>Coller</div>
						<div className="symbols">&#8984; V</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Rechercher</div>
						<div className="symbols">&#8984; F</div>
					</div>
					<div className="command">
						<div className="grey">Remplacer</div>
						<div className="symbols">&#8997; &#8984; F</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Rechercher dans les fichiers</div>
						<div className="symbols">&#8679; &#8984; F</div>
					</div>
					<div className="command enabled">
						<div>Remplacer dans les fichiers</div>
						<div className="symbols">&#8679; &#8984; H</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Afficher/masquer le commentaire de ligne</div>
						<div className="symbols">&#8984; /</div>
					</div>
					<div className="command enabled">
						<div>Afficher/masquer le commentaire de bloc</div>
						<div className="symbols">&#8997; &#8679; A</div>
					</div>
					<div className="command enabled">
						<div>Emmet : Développer l'abréviation</div>
						<div className="symbols">&#8677;</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Démarrer Dictée</div>
						<div className="symbols">fn D</div>
					</div>
					<div className="command enabled">
						<div>Emoji et symboles</div>
						<div className="symbols">fn</div>
					</div>
				</div>
			</div>
			<div className="tab extralong">
				<div className="box" id="Selection">
					<p className="title">Sélection</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Sélectionner tout</div>
						<div className="symbols">&#8984; A</div>
					</div>
					<div className="command enabled">
						<div>Développer la sélection</div>
						<div className="symbols">&#8963; &#8679; &#8984; &#8594;</div>
					</div>
					<div className="command enabled">
						<div>Réduire la sélection</div>
						<div className="symbols">&#8963; &#8679; &#8984; &#8592;</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Copier la ligne en haut</div>
						<div className="symbols">&#8997; &#8679; &#8593;</div>
					</div>
					<div className="command enabled">
						<div>Copier la ligne en bas</div>
						<div className="symbols">&#8997; &#8679; &#8595;</div>
					</div>
					<div className="command enabled">
						<div>Déplacer la ligne vers le haut</div>
						<div className="symbols">&#8997; &#8593;</div>
					</div>
					<div className="command enabled">
						<div>Déplacer la ligne vers le bas</div>
						<div className="symbols">&#8997; &#8595;</div>
					</div>
					<div className="enabled">Dupliquer la sélection</div>
					<hr />
					<div className="command enabled">
						<div>Ajouter un curseur au-dessus</div>
						<div className="symbols">&#8997; &#8984; &#8593;</div>
					</div>
					<div className="command enabled">
						<div>Ajouter un curseur au-dessous</div>
						<div className="symbols">&#8997; &#8984; &#8595;</div>
					</div>
					<div className="command enabled">
						<div>Ajouter des curseurs à la fin des lignes</div>
						<div className="symbols">&#8997; &#8679; I</div>
					</div>
					<div className="command enabled">
						<div>Ajouter l'occurence suivante</div>
						<div className="symbols">&#8984; D</div>
					</div>
					<div className="enabled">Ajouter l'occurrence précédente</div>
					<div className="command enabled">
						<div>Sélectionner toutes les occurences</div>
						<div className="symbols">&#8679; &#8984; L</div>
					</div>
					<hr />
					<div className="enabled">Utiliser Cmd+Clic pour l'option multicurseur</div>
					<div className="enabled">Mode de sélection de colonne</div>
				</div>
			</div>
			<div className="tab">
				<div className="box" id="Affichage">
					<p className="title">Affichage</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Palette de commandes...</div>
						<div className="symbols">&#8679; &#8984; P</div>
					</div>
					<div className="enabled">Ouvrir la vue...</div>
					<hr />
					<div className="command enabled">
						<div>Apparence</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Disposition de l'éditeur</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Explorateur</div>
						<div className="symbols">&#8679; &#8984; E</div>
					</div>
					<div className="command enabled">
						<div>Rechercher</div>
						<div className="symbols">&#8679; &#8984; F</div>
					</div>
					<div className="command enabled">
						<div>Contrôle de code source</div>
						<div className="symbols">&#8963; &#8679; G</div>
					</div>
					<div className="command enabled">
						<div>Exécuter</div>
						<div className="symbols">&#8679; &#8984; D</div>
					</div>
					<div className="command enabled">
						<div>Extensions</div>
						<div className="symbols">&#8679; &#8984; X</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Problèmes</div>
						<div className="symbols">&#8679; &#8984; M</div>
					</div>
					<div className="command enabled">
						<div>Sortie</div>
						<div className="symbols">&#8679; &#8984; U</div>
					</div>
					<div className="command enabled">
						<div>Console de débogage</div>
						<div className="symbols">&#8679; &#8984; Y</div>
					</div>
					<div className="command enabled">
						<div>Terminal</div>
						<div className="symbols">&#8963; `</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Retour automatique à la ligne</div>
						<div className="symbols">&#8997; Z</div>
					</div>
					<div className="enabled">Défilement épinglé</div>
				</div>
			</div>
			<div className="tab extralong">
				<div className="box" id="Atteindre">
					<p className="title">Atteindre</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Précédent</div>
						<div className="symbols">&#8963; -</div>
					</div>
					<div className="command">
						<div className="grey">Suivant</div>
						<div className="symbols">&#8963; &#8679; -</div>
					</div>
					<div className="command">
						<div className="grey">Emplacement de la dernière modification</div>
						<div className="symbols">&#8984;K &#8984;Q</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Changer d'éditeur</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Changer de groupe</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Atteindre le fichier...</div>
						<div className="symbols">&#8984; P</div>
					</div>
					<div className="command enabled">
						<div>Atteindre le symbole dans l'espace de travail...</div>
						<div className="symbols">&#8984; T</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Atteindre le symbole dans l'éditeur...</div>
						<div className="symbols">&#8679; &#8984; O</div>
					</div>
					<div className="command">
						<div className="grey">Atteindre la définition</div>
						<div className="symbols">F12</div>
					</div>
					<div className="grey">Atteindre la déclaration</div>
					<div className="grey">Accéder à la définition de type</div>
					<div className="command">
						<div className="grey">Atteindre les implémentations</div>
						<div className="symbols">&#8984; F12</div>
					</div>
					<div className="command">
						<div className="grey">Atteindre les références</div>
						<div className="symbols">&#8679; F12</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Atteindre la ligne/colonne...</div>
						<div className="symbols">&#8963; G</div>
					</div>
					<div className="command enabled">
						<div>Accéder au crochet</div>
						<div className="symbols">&#8679; &#8984; \</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Problème suivant</div>
						<div className="symbols">F8</div>
					</div>
					<div className="command enabled">
						<div>Problème précédent</div>
						<div className="symbols">&#8679; F8</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Changement suivant</div>
						<div className="symbols">&#8997; F3</div>
					</div>
					<div className="command enabled">
						<div>Changement précédent</div>
						<div className="symbols">&#8997; &#8679; F3</div>
					</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Executer">
					<p className="title">Exécuter</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Démarrer le débogage</div>
						<div className="symbols">F5</div>
					</div>
					<div className="command enabled">
						<div>Exécuter sans débogage</div>
						<div className="symbols">&#8963; F5</div>
					</div>
					<div className="command">
						<div className="grey">Arrêter le débogage</div>
						<div className="symbols">&#8679; F5</div>
					</div>
					<div className="command">
						<div className="grey">Redémarrer le débogage</div>
						<div className="symbols">&#8679; &#8984; F5</div>
					</div>
					<hr />
					<div className="grey">Ouvrir les configurations</div>
					<div className="enabled">Ajouter une configuration</div>
					<hr />
					<div className="command">
						<div className="grey">Effectuer un paps à pas principal</div>
						<div className="symbols">F10</div>
					</div>
					<div className="command">
						<div className="grey">Effectuer un paps à pas détaillé</div>
						<div className="symbols">F11</div>
					</div>
					<div className="command">
						<div className="grey">Effectuer un paps à pas sortant</div>
						<div className="symbols">&#8679; F11</div>
					</div>
					<div className="command">
						<div className="grey">Continuer</div>
						<div className="symbols">F5</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Activer/désactiver le point d'arrêt</div>
						<div className="symbols">F9</div>
					</div>
					<div className="command enabled">
						<div>Nouveau point d'arrêt</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="enabled">Activer tous les point d'arrêt</div>
					<div className="enabled">Désactiver tous les points d'arrêt</div>
					<div className="enabled">Supprimer tous les points d'arrêt</div>
					<hr />
					<div className="enabled">Installer des débogueurs supplémentaires...</div>
				</div>
			</div>
			<div className="tab extralong">
				<div className="box" id="Terminal">
					<p className="title">Terminal</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Nouveau terminal</div>
						<div className="symbols">&#8963; &#8679; `</div>
					</div>
					<div className="command enabled">
						<div>Terminal divisé</div>
						<div className="symbols">&#8984; \</div>
					</div>
					<hr />
					<div className="enabled">Exécuter la tâche...</div>
					<div className="command enabled">
						<div>Exécuter la tâche build...</div>
						<div className="symbols">&#8679; &#8984; B</div>
					</div>
					<div className="enabled">Exécuter le fichier actif</div>
					<div className="enabled">Exécuter le texte sélectionné</div>
					<hr />
					<div className="grey">Afficher les tâches en cours d'exécution...</div>
					<div className="grey">Redémarrer la tâche en cours d'exécution...</div>
					<div className="grey">Terminer la tâche...</div>
					<hr />
					<div className="enabled">Configurer les tâches...</div>
					<div className="enabled">Configurer la tâche de build par défaut...</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Fenetre">
					<p className="title">Fenêtre</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Rêduire</div>
						<div className="symbols">&#8984; M</div>
					</div>
					<div className="enabled">Zoom</div>
					<div className="enabled">Placer la fenêtre à gauche de l'écran</div>
					<div className="enabled">Placer la fenêtre à droite de l'écran</div>
					<div className="grey">Remplacer la fenêtre en mosaïque</div>
					<hr />
					<div className="grey">Supprimer la fenêtre du groupe</div>
					<hr />
					<div className="enabled">Changer de fenêtre....</div>
					<hr />
					<div className="grey">Tout mettre au premier plan</div>
				</div>
			</div>
			<div className="tab extralong">
				<div className="box" id="Aide">
					<p className="title">Aide</p>
				</div>
				<div className="container">
					<div className="enabled">Démarrage</div>
					<div className="command enabled">
						<div>Afficher toutes les commandes</div>
						<div className="symbols">&#8679; &#8984; P</div>
					</div>
					<div className="enabled">Documentation</div>
					<div className="enabled">Terrain de jeu de l'éditeur</div>
					<div className="enabled">Afficher les notes de publication</div>
					<hr />
					<div className="command enabled">
						<div>Référence des raccourcis clavier</div>
						<div className="symbols">&#8984;K &#8984;R</div>
					</div>
					<div className="enabled">Tutoriels vidéo</div>
					<div className="enabled">Conseils et astuces</div>
					<hr />
					<div className="enabled">Rejoignez-nous sur Twitter</div>
					<div className="enabled">
						Rechercher parmi les requêtes de fonctionnalités
					</div>
					<div className="enabled">Signaler le problème</div>
					<hr />
					<div className="enabled">Afficher la licence</div>
					<div className="enabled">Déclaration de confidentialité</div>
					<hr />
					<div className="command enabled">
						<div>Activer/désactiver les outils de développement</div>
						<div className="symbols">&#8997; &#8984; I</div>
					</div>
					<div className="enabled">Ouvrir l'Explorateur de processus</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsHeader;
