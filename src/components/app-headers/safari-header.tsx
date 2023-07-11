import React from "react";
import "../../styles/app-header.css";

const SafariHeader = () => {
	return (
		<div className="app-header safari-header">
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
				<div className="box title">
					<p className="title app" id="app">
						Safari
					</p>
				</div>
				<div className="container">
					<div className="enabled">À propos de Safari</div>
					<div className="enabled"> Extensions Safari...</div>
					<hr />
					<div className="command enabled">
						<div>Réglages...</div>
						<div className="symbols">&#8984; ,</div>
					</div>
					<div className="enabled">Rapport de confidentialité...</div>
					<div className="grey">Réglages pour ce site web...</div>
					<hr />
					<div className="enabled">Effacer l'historique...</div>
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
						<div>Masquer Safari</div>
						<div className="symbols">&#8984; H</div>
					</div>
					<div className="command enabled">
						<div>Masquer les autres</div>
						<div className="symbols">&#8997; &#8984; H</div>
					</div>
					<div className="grey">Tout afficher</div>
					<hr />
					<div className="command enabled">
						<div>Quitter Safari</div>
						<div className="symbols"> &#8984; Q</div>
					</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Fichier">
					<p className="title">Fichier</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Nouvelle fenêtre</div>
						<div className="symbols">&#8997; &#8984; N</div>
					</div>
					<div className="command enabled">
						<div>Nouvelle fenêtre privée</div>
						<div className="symbols">&#8679; &#8984; N</div>
					</div>
					<div className="command enabled">
						<div>Nouvel onglet</div>
						<div className="symbols">&#8984; T</div>
					</div>
					<div className="command">
						<div className="grey">Nouveau groupe d'onglets vide</div>
						<div className="symbols">&#8963; &#8984; N</div>
					</div>
					<div className="command enabled">
						<div>Ouvrir un fichier...</div>
						<div className="symbols">&#8984; O</div>
					</div>
					<div className="command enabled">
						<div>Ouvrir une adresse...</div>
						<div className="symbols">&#8984; L</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Fermer</div>
						<div className="symbols">&#8679; &#8984; W</div>
					</div>
					<div className="command">
						<div className="grey">Fermer toutes les fenêtres</div>
						<div className="symbols">&#8997; &#8679; &#8984; W</div>
					</div>
					<div className="grey">Fermer l'onglet</div>
					<div className="command">
						<div className="grey">Supprimer le groupe d'onglets</div>
						<div className="symbols">&#8963; &#8984; W</div>
					</div>
					<div className="command">
						<div className="grey">Enregistrer sous...</div>
						<div className="symbols">&#8679; &#8984; S</div>
					</div>
					<hr />
					<div className="enabled">Partager...</div>
					<div className="grey">Exporter au format PDF...</div>
					<hr />
					<div className="command enabled">
						<div>Imporer depuis</div>
						<img
							className="right-arrow"
							src="../../images/icons/icon_right-arrow.png"
						/>
					</div>
					<div className="command enabled">
						<div>Exporter</div>
						<img
							className="right-arrow"
							src="../../images/icons/icon_right-arrow.png"
						/>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Imprimer...</div>
						<div className="symbols">&#8984; P</div>
					</div>
				</div>
			</div>
			<div className="tab extralong">
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
						<div className="symbols">&#8984; X</div>
					</div>
					<div className="command">
						<div className="grey">Copier</div>
						<div className="symbols">&#8984; C</div>
					</div>
					<div className="command enabled">
						<div>Coller</div>
						<div className="symbols">&#8984; V</div>
					</div>
					<div className="command enabled">
						<div>Coller et adapter le style</div>
						<div className="symbols">&#8997; &#8679; &#8984; V</div>
					</div>
					<div className="grey">Supprimer</div>
					<div className="command enabled">
						<div>Tout sélectionner</div>
						<div className="symbols">&#8984; A</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Remplissage automatique de formulaire</div>
						<div className="symbols">&#8679; &#8984; A</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Rechercher</div>
						<img
							className="right-arrow"
							src="../../images/icons/icon_right-arrow.png"
						/>
					</div>
					<div className="command enabled">
						<div>Orthographe et grammaire</div>
						<img
							className="right-arrow"
							src="../../images/icons/icon_right-arrow.png"
						/>
					</div>
					<div className="command enabled">
						<div>Substitutions</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Transformations</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Parole</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Démarrer Dictée</div>
						<div className="symbols">fn D</div>
					</div>
					<div className="command enabled">
						<div>Emoji et symboles</div>
						<div className="symbols">fn</div>
					</div>
				</div>
			</div>
			<div className="tab extralong ticked">
				<div className="box" id="Presentation">
					<p className="title">Présentation</p>
				</div>
				<div className="container">
					<div className="command">
						<div className="left-block">
							<img src="../../images/icons/icon_tick-grey.png" className="tick" />
							<div style={{ color: "rgba(114, 114, 114, 0.5)" }}>
								Toujours afficher la barre d'outils en plein écran
							</div>
						</div>
					</div>
					<div className="enabled">Personnaliser la barre d'outils...</div>
					<div className="grey">Personnaliser la Touch Bar...</div>
					<hr />
					<div className="enabled">Toujours afficher la barre d'onglets</div>
					<div className="command enabled">
						<div>Afficher la barre des Favoris</div>
						<div className="symbols">&#8679; &#8984; B</div>
					</div>
					<div className="command enabled">
						<div>Afficher la barre d'état</div>
						<div className="symbols">&#8984; /</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Afficher la barre latérale</div>
						<div className="symbols">&#8679; &#8984; L</div>
					</div>
					<div className="command enabled">
						<div>Afficher la barre latérale des signets</div>
						<div className="symbols">&#8963; &#8984; 1</div>
					</div>
					<div className="command enabled">
						<div>Afficher la barre latérale de la liste de lecture</div>
						<div className="symbols">&#8963; &#8984; 2</div>
					</div>
					<div className="command enabled">
						<div>Afficher &#171; Partagé avec vous &#187;</div>
						<div className="symbols">&#8963; &#8984; S</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Afficher le lecteur</div>
						<div className="symbols">&#8679; &#8984; R</div>
					</div>
					<div className="command enabled">
						<div>Afficher l'aperçu des onglets</div>
						<div className="symbols">&#8679; &#8984; \</div>
					</div>
					<div className="command">
						<div className="grey">Afficher les téléchargements</div>
						<div className="symbols">&#8997; &#8984; L</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Arrêter</div>
						<div className="symbols">&#8984; .</div>
					</div>
					<div className="command">
						<div className="grey">Recharger la page</div>
						<div className="symbols">&#8984; R</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Traduction</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Taille réelle</div>
						<div className="symbols">&#8984; O</div>
					</div>
					<div className="command">
						<div className="grey">Zoom avant</div>
						<div className="symbols">&#8984; +</div>
					</div>
					<div className="command">
						<div className="grey">Zoom arrière</div>
						<div className="symbols">&#8984; -</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Encodage du texte</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Activer le mode plein écran</div>
						<div className="symbols">fn F</div>
					</div>
				</div>
			</div>
			<div className="tab extralong">
				<div className="box" id="Historique">
					<p className="title">Historique</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Afficher tout l'historique</div>
						<div className="symbols">&#8984; Y</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Page précédente</div>
						<div className="symbols">&#8984; [</div>
					</div>
					<div className="command">
						<div className="grey">Page suivante</div>
						<div className="symbols">&#8984; ]</div>
					</div>
					<div className="command enabled">
						<div>Accueil</div>
						<div className="symbols">&#8679; &#8984; H</div>
					</div>
					<div className="command">
						<div className="grey">SnapBack vers les résultats de recherche</div>
						<div className="symbols">&#8997; &#8984; S</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Récemment fermés</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Rouvrir la dernière fenêtre fermée</div>
						<div className="symbols">&#8679; &#8984; T</div>
					</div>
					<div className="enabled">
						Rouvrir toutes les fenêtres de la dernière session
					</div>
					<div className="enabled">Effacer l'historique</div>
				</div>
			</div>
			<div className="tab extraextralong">
				<div className="box" id="Signets">
					<p className="title">Signets</p>
				</div>
				<div className="container">
					<div className="enabled">Afficher la page de démarrage</div>
					<hr />
					<div className="grey">Afficher les signets</div>
					<div className="command enabled">
						<div>Modifier les signets</div>
						<div className="symbols">&#8997; &#8984; B</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Ajouter un signet...</div>
						<div className="symbols">&#8984; D</div>
					</div>
					<div className="grey">Ajouter des signets pour ces onglets...</div>
					<div className="grey">Ajouter un dossier de signets</div>
					<hr />
					<div className="command">
						<div className="grey">Ajouter à la liste de lecture</div>
						<div className="symbols">&#8679; &#8984; D</div>
					</div>
					<div className="grey">Ajouter ces onglets à la liste de lecture</div>
					<div className="command">
						<div className="grey">
							Sélectionner le précédent élément de la liste de lecture
						</div>
						<div className="symbols">&#8997; &#8984; &#8593;</div>
					</div>
					<div className="command">
						<div className="grey">
							Sélectionner le prochain élément de la liste de lecture
						</div>
						<div className="symbols">&#8997; &#8984; &#8595;</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_star.png" />
							<div>Favoris</div>
						</div>
						<div className="symbols">&#8997; &#8984; L</div>
					</div>
				</div>
			</div>
			<div className="tab extralong">
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
					<hr />
					<div className="command enabled">
						<div>Organiser les onglets par</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command">
						<div className="grey">Afficher l'onglet précédent</div>
						<div className="symbols">&#8963; &#8679; &#8677;</div>
					</div>
					<div className="command">
						<div className="grey">Afficher l'onglet suivant</div>
						<div className="symbols">&#8963; &#8677;</div>
					</div>
					<div className="command">
						<div className="grey">Accéder au groupe d'onglet précédent</div>
						<div className="symbols">&#8679; &#8984; &#8593;</div>
					</div>
					<div className="command">
						<div className="grey">Accéder au groupe d'onglets suivant</div>
						<div className="symbols">&#8679; &#8984; &#8595;</div>
					</div>
					<div className="grey">Épingler l'onglet</div>
					<div className="grey">Dupliquer l'onglet</div>
					<div className="grey">Placer l'onglet dans une nouvelle fenêtre</div>
					<div className="grey">Fusionner toutes les fenêtres</div>
					<hr />
					<div className="grey">Couper le son de cet onglet</div>
					<div className="grey">Couper le son des autres onglets</div>
					<hr />
					<div className="grey">Tout ramener au premier plan</div>
					<hr />
					<div className="enabled">Page de démarrage</div>
				</div>
			</div>
			<div className="tab">
				<div className="box" id="Aide">
					<p className="title">Aide</p>
				</div>
				<div className="container">
					<input type="text" placeholder="Recherche" />
					<div className="enabled">Aide Safari</div>
					<hr />
					<div className="enabled">Remerciements</div>
				</div>
			</div>
		</div>
	);
};

export default SafariHeader;