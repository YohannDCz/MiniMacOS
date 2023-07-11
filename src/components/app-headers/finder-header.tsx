import React from "react";
import "../../styles/app-header.css";

const FinderHeader = () => {
	return (
		<div className="app-header finder-header">
			<div className="tab long apple">
				<div className="box">
					<img src="../../images/icons/icon_mac.svg" alt="The Apple logo." />
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
			<div className="tab">
				<div className="box" id="Finder">
					<p className="title app">Finder</p>
				</div>
				<div className="container">
					<div className="enabled">À propos du Finder</div>
					<hr />
					<div className="command enabled">
						<div>Réglages</div>
						<div className="symbols">&#8984; ,</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Vider la corbeille</div>
						<div className="symbols">&#8679; &#8984; &#9003;</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Services</div>
						<img
							className="right-arrow"
							src="../../images/icons/icon_right-arrow.png"
						/>
					</div>

					<hr />
					<div className="command enabled">
						<div>Masquer le Finder</div>
						<div className="symbols">&#8984; H</div>
					</div>
					<div className="command enabled">
						<div>Masquer les autres</div>
						<div className="symbols">&#8997; &#8984; H</div>
					</div>

					<div className="grey">Tout afficher</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Fichier">
					<p className="title">Fichier</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Nouvelle fenêtre Finder</div>
						<div className="symbols">&#8997; &#8984; N</div>
					</div>
					<div className="command enabled">
						<div>Nouveau dossier</div>
						<div className="symbols">&#8679; &#8984; N</div>
					</div>
					<div className="command">
						<div className="grey">Nouveau dossier avec selection</div>
						<div className="symbols">&#8963; &#8984; N</div>
					</div>
					<div className="enabled">Nouveau dossier intelligent</div>
					<div className="command enabled">
						<div>Nouvel onglet</div>
						<div className="symbols">&#8984; T</div>
					</div>
					<div className="command">
						<div className="grey">Ouvrir</div>
						<div className="symbols">&#8984; O</div>
					</div>
					<div className="command">
						<div className="grey">Ouvrir avec</div>
						<img
							className="right-arrow"
							src="../../images/icons/icon_right-arrow_grey.png"
						/>
					</div>
					<div className="command">
						<div className="grey">Fermer la fenêtre</div>
						<div className="symbols">&#8984; W</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Lire les informations</div>
						<div className="symbols">&#8984; I</div>
					</div>
					<div className="grey">Renommer</div>
					<div className="grey">Compresser</div>
					<div className="command">
						<div className="grey">Dupliquer</div>
						<div className="symbols">&#8984; D</div>
					</div>
					<div className="command">
						<div className="grey">Créer un alias</div>
						<div className="symbols">&#8963; &#8984; A</div>
					</div>
					<div className="command">
						<div className="grey">Coup d'oeil</div>
						<div className="symbols">&#8984; Y</div>
					</div>
					<div className="command">
						<div className="grey">Imprimer</div>
						<div className="symbols">&#8984; P</div>
					</div>
					<hr />
					<div className="grey"> Partager...</div>
					<hr />
					<div className="command">
						<div className="grey">Afficher l'original</div>
						<div className="symbols">&#8984; R</div>
					</div>
					<div className="command">
						<div className="grey">Ajouter au Dock</div>
						<div className="symbols">&#8963; &#8679; &#8984; T</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Placer dans la corbeille</div>
						<div className="symbols">&#8984; &#9003;</div>
					</div>
					<div className="command">
						<div className="grey">Éjecter</div>
						<div className="symbols">&#8984; E</div>
					</div>
					<hr />
					<div className="colors">
						<div className="color red"></div>
						<div className="color orange"></div>
						<div className="color yellow"></div>
						<div className="color green"></div>
						<div className="color blue"></div>
						<div className="color purple"></div>
						<div className="color grey"></div>
					</div>
					<div className="grey">Tags...</div>
					<hr />
					<div className="command enabled">
						<div>Rechercher</div>
						<div className="symbols">&#8984; F</div>
					</div>
				</div>
			</div>
			<div className="tab">
				<div className="box" id="Edition">
					<p className="title">Édition</p>
				</div>
				<div className="container">
					<div className="command">
						<div className="grey">Annuler</div>
						<div className="symbols">&#8984; Z</div>
					</div>
					<div className="command">
						<div className="grey">Rétablir</div>
						<div className="symbols">&#8679; &#8984; Z</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Couper</div>
						<div className="symbols">&#8984;</div>
					</div>
					<div className="command">
						<div className="grey">Copier</div>
						<div className="symbols">&#8984; C</div>
					</div>
					<div className="command">
						<div className="grey">Coller</div>
						<div className="symbols">&#8984; V</div>
					</div>
					<div className="command enabled">
						<div>Tout sélectionner</div>
						<div className="symbols">&#8984; A</div>
					</div>
					<hr />
					<div className="enabled">Afficher le presse-papiers</div>
					<hr />
					<div className="command enabled">
						<div>Démarrer la Dictée</div>
						<div className="symbols">fn D</div>
					</div>
					<div className="command enabled">
						<div>Emoji et symboles</div>
						<div className="symbols">fn</div>
					</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Presentation">
					<p className="title">Présentation</p>
				</div>
				<div className="container">
					<div className="command">
						<div className="grey">Par icônes</div>
						<div className="symbols">&#8984; 1</div>
					</div>
					<div className="command">
						<div className="grey">Par liste</div>
						<div className="symbols">&#8984; 2</div>
					</div>
					<div className="command">
						<div className="grey">Par colonnes</div>
						<div className="symbols">&#8984; 3</div>
					</div>
					<div className="command">
						<div className="grey">Par galerie d'icônes</div>
						<div className="symbols">&#8984; 4</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Organiser en piles</div>
						<div className="symbols">&#8963; &#8984; 0</div>
					</div>
					<div className="command enabled">
						<div>Trier par</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="enabled">Aligner</div>
					<div className="command enabled">
						<div>Aligner par</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Masquer la barre latérale</div>
						<div className="symbols">&#8963; &#8984; S</div>
					</div>
					<div className="command">
						<div className="grey">Afficher l'aperçu</div>
						<div className="symbols">&#8679; &#8984; P</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Masquer la barre d'outils</div>
						<div className="symbols">&#8997; &#8984; T</div>
					</div>
					<div className="command">
						<div className="grey">Afficher tous les onglets</div>
						<div className="symbols">&#8679; &#8984; \</div>
					</div>
					<div className="command">
						<div className="grey">Afficher la barre d'onglets</div>
						<div className="symbols">&#8679; &#8984; T</div>
					</div>
					<div className="command">
						<div className="grey">Masquer la barre du chemin d'accès</div>
						<div className="symbols">&#8997; &#8984; P</div>
					</div>
					<div className="command">
						<div className="grey">Afficher la barre d'état</div>
						<div className="symbols">&#8984; /</div>
					</div>
					<hr />
					<div className="grey">Personnaliser la barre d'outils...</div>
					<div className="grey">Personnaliser la Touch Bar...</div>
					<hr />
					<div className="command enabled">
						<div>Afficher les options de présentation</div>
						<div>&#8984; J</div>
					</div>
					<div className="grey">Afficher les options d'aperçu</div>
					<hr />
					<div className="command">
						<div className="grey">Activer le mode plein écran</div>
						<div className="symbols">fn F</div>
					</div>
				</div>
			</div>
			<div className="tab">
				<div className="box" id="Aller">
					<p className="title">Aller</p>
				</div>
				<div className="container">
					<div className="command">
						<div className="grey">Précédent</div>
						<div className="symbols">&#8984; [</div>
					</div>
					<div className="command">
						<div className="grey">Suivant</div>
						<div className="symbols">&#8984; ]</div>
					</div>
					<div className="command enabled">
						<div>Dossier parent</div>
						<div className="symbols">&#8984; &#8593;</div>
					</div>
					<hr />
					<div className="command enabled">
						<div className="left-block">
							<img
								src="../../images/icons/icon_recents.png"
								style={{ width: "20px", height: "20px", marginLeft: "-2px" }}
							/>
							<div>Récents</div>
						</div>
						<div className="symbols">&#8679; &#8984; F</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_documents.png" />
							<div>Documents</div>
						</div>
						<div className="symbols">&#8679; &#8984; O</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img
								src="../../images/icons/icon_desktop.png"
								style={{ width: "16x", height: "16px" }}
							/>
							<div>Bureau</div>
						</div>
						<div className="symbols">&#8679; &#8984; D</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img
								src="../../images/icons/icon_downloads.png"
								style={{
									width: "20px",
									height: "20px",
									marginRight: "2px",
									marginLeft: "-2px",
								}}
							/>
							<div>Téléchargements</div>
						</div>
						<div className="symbols">&#8997; &#8984; L</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img
								src="../../images/icons/icon_home.svg"
								style={{
									width: "14px",
									height: "14px",
									marginRight: "6px",
									marginLeft: "0",
								}}
							/>
							<div>Départ</div>
						</div>
						<div className="symbols">&#8679; &#8984; H</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_laptop.png" />
							<div>Ordinateur</div>
						</div>
						<div className="symbols">&#8679; &#8984; C</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img
								src="../../images/icons/icon_airdrop.png"
								style={{
									width: "20px",
									height: "20px",
									marginRight: "2px",
									marginLeft: "-2px",
								}}
							/>
							<div>AirDrop</div>
						</div>
						<div className="symbols">&#8679; &#8984; R</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img
								src="../../images/icons/icon_network.png"
								style={{
									width: "16px",
									height: "16px",
									marginRight: "4px",
									marginLeft: "0",
								}}
							/>
							<div>Réseau</div>
						</div>
						<div className="symbols">&#8679; &#8984; K</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_icloud.png" />
							<div>iCloud Drive</div>
						</div>
						<div className="symbols">&#8679; &#8984; I</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img
								src="../../images/icons/icon_folder.png"
								style={{ width: "16px", height: "16px" }}
							/>
							<div>Partagé</div>
						</div>
						<div className="symbols">&#8679; &#8984; S</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img
								src="../../images/icons/icon_applications.png"
								style={{ width: "16px", height: "16px" }}
							/>
							<div>Applications</div>
						</div>
						<div className="symbols">&#8679; &#8984; A</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img
								src="../../images/icons/icon_utilitaires.png"
								style={{ width: "16px", height: "16px" }}
							/>
							<div>Utilitaires</div>
						</div>
						<div className="symbols">&#8679; &#8984; U</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img
								src="../../images/icons/icon_folder.png"
								style={{ width: "16px", height: "16px" }}
							/>
							<div>Google Drive</div>
						</div>
						<div className="symbols">&#8679; &#8984; F</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Dossiers récents</div>
						<img
							className="right-arrow"
							src="../../images/icons/icon_right-arrow.png"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Aller au dossier...</div>
						<div className="symbols">&#8679; &#8984; G</div>
					</div>
					<div className="command enabled">
						<div>Se connecter au serveur...</div>
						<div className="symbols">&#8984; K</div>
					</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Fenetre">
					<p className="title">Fenêtre</p>
				</div>
				<div className="container">
					<div className="command">
						<div className="grey">Minimiser</div>
						<div className="symbols">&#8984; M</div>
					</div>
					<div className="grey">Réduire/agrandir</div>
					<div className="grey">Déplacer la fenêtre vers la gauche de l'écran</div>
					<div className="grey">Déplacer la fenêtre vers la droite de l'écran</div>
					<div className="grey">Remplacer la fenêtre en mosaïque</div>
					<hr />
					<div className="grey">Supprimer la fenêtre du groupe</div>
					<div className="command">
						<div className="grey">Faire défiler les fenêtres</div>
						<div className="symbols">&#8984; `</div>
					</div>
					<div className="grey">Afficher la fenêtre de progression</div>
					<hr />
					<div className="command">
						<div className="grey">Afficher l'onglet précédent</div>
						<div className="symbols">&#8963; &#8679; &#8677;</div>
					</div>
					<div className="command">
						<div className="grey">Afficher l'onglet suivant</div>
						<div className="symbols">&#8963; &#8677;</div>
					</div>
					<div className="grey">Placer l'onglet dans une nouvelle fenêtre</div>
					<div className="grey">Fusionner toutes les fenêtres</div>
					<hr />
					<div className="enabled">Tout ramener au premier plan</div>
				</div>
			</div>
			<div className="tab">
				<div className="box" id="Aide">
					<p className="title">Aide</p>
				</div>
				<div className="container">
					<input type="text" placeholder="Recherche" />
					<div className="enabled">Astuces pour votre Mac</div>
					<div className="enabled">Aide MacOS</div>
				</div>
			</div>
		</div>
	);
};

export default FinderHeader;
