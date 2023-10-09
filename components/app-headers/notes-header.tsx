import React from "react";
import "../../styles/app-header.css";

const NotesHeader = () => {
	return (
		<div className="app-header notes-header">
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
				<div className="box" id="App">
					<p className="title app">Notes</p>
				</div>
				<div className="container">
					<div className="enabled">À propos de Notes</div>
					<hr />
					<div className="command enabled">
						<div>Réglages...</div>
						<div className="symbols">&#8984; ,</div>
					</div>
					<div className="enabled">Comptes...</div>
					<hr />
					<div className="grey">Fermer toutes les notes verrouillées</div>
					<hr />
					<div className="command enabled">
						<div>Services</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Masquer Notes</div>
						<div className="symbols">&#8984; H</div>
					</div>
					<div className="command enabled">
						<div>Masquer les autres</div>
						<div className="symbols">&#8997; &#8984; H</div>
					</div>
					<div className="grey">Tout afficher</div>
					<hr />
					<div className="command enabled">
						<div>Quitter Notes</div>
						<div className="symbols">&#8984; Q</div>
					</div>
				</div>
			</div>
			<div className="tab extraextralong">
				<div className="box" id="Fichier">
					<p className="title">Fichier</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Nouvelle note</div>
						<div className="symbols">&#8984; N</div>
					</div>
					<div className="command enabled">
						<div>Nouveau dossier</div>
						<div className="symbols">&#8679; &#8984; N</div>
					</div>
					<div className="enabled">Nouveau dossier intelligent</div>
					<hr />
					<div className="command enabled">
						<div>Partager</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="grey">
						Nouveau dossier intelligent avec sélection de tags
					</div>
					<div className="enabled">Convertir le dossier en dossier intelligent</div>
					<hr />
					<div className="command enabled">
						<div>Fermer</div>
						<div className="symbols">&#8984; W</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Importer depuis l'iPhone</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="enabled">Importer dans Notes...</div>
					<hr />
					<div className="enabled">Exporter au format PDF...</div>
					<hr />
					<div className="enabled">Épingler la Note</div>
					<div className="enabled">Verrouiller la Note</div>
					<div className="command enabled">
						<div>Dupliquer la note</div>
						<div className="symbols">&#8984; D</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Imprimer...</div>
						<div className="symbols">&#8984; P</div>
					</div>
				</div>
			</div>
			<div className="tab long">
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
					<div className="command">
						<div className="grey">Coller</div>
						<div className="symvols">&#8984; V</div>
					</div>
					<div className="command">
						<div className="grey">Coller et adapter le style</div>
						<div className="symbols">&#8997; &#8679; &#8984; V</div>
					</div>
					<div className="grey">Coller et conserer le style</div>
					<div className="command enabled">
						<div>Supprimer la note</div>
						<div className="symbols">&#9003;</div>
					</div>
					<div className="grey">Renommer</div>
					<div className="command enabled">
						<div>Tout sélectionner</div>
						<div className="symbols">&#8984; A</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Joindre un fichier...</div>
						<div className="symbols">&#8679; &#8984; A</div>
					</div>
					<div className="command">
						<div className="grey">Ajouter un lien...</div>
						<div className="symbols">&#8984; K</div>
					</div>
					<div className="grey">Renommer la pièce jointe...</div>
					<hr />
					<div className="command enabled">
						<div>Rechercher</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Orthographe et grammaire</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
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
			<div className="tab">
				<div className="box" id="Format">
					<p className="title">Format</p>
				</div>
				<div className="container">
					<div className="command">
						<div className="grey">Titre</div>
						<div className="symbols">&#8679; &#8984; T</div>
					</div>
					<div className="command">
						<div className="grey">Sous-titre</div>
						<div className="symbols">&#8679; &#8984; H</div>
					</div>
					<div className="command">
						<div className="grey">Titre secondaire</div>
						<div className="symbols">&#8679; &#8984; J</div>
					</div>
					<div className="command">
						<div className="grey">Corps</div>
						<div className="symbols">&#8679; &#8984; B</div>
					</div>
					<div className="command">
						<div className="grey">Monochasse</div>
						<div className="symbols">&#8679; &#8984; M</div>
					</div>
					<div className="command">
						<div className="grey">Liste à puces</div>
						<div className="symbols">&#8679; &#8984; 7</div>
					</div>
					<div className="command">
						<div className="grey">Listes à tirets</div>
						<div className="symbols">&#8679; &#8984; 8</div>
					</div>
					<div className="command">
						<div className="grey">Liste numérotée</div>
						<div className="symbols">&#8679; &#8984; 9</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Liste de pointage</div>
						<div className="symbols">&#8679; &#8984; L</div>
					</div>
					<div className="command">
						<div className="grey">Cocher</div>
						<div className="symbols">&#8679; &#8984; U</div>
					</div>
					<div className="command enabled">
						<div>Plus</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Déplacer l'élément de liste</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command">
						<div className="grey">Tableau</div>
						<div className="symbols">&#8997; &#8984; T</div>
					</div>
					<div className="grey">Convertir en texte</div>
					<hr />
					<div className="command enabled">
						<div>Police</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Texte</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Indentation</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
				</div>
			</div>
			<div className="tab long ticked">
				<div className="box" id="Presentation">
					<p className="title">Présentation</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_tick.png" className="tick" />
							<div>Par liste</div>
						</div>
						<div className="symbols">&#8984; 1</div>
					</div>
					<div className="command enabled">
						<div>Par galerie</div>
						<div className="symbols">&#8984; 2</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Trier par</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Grouper par date</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Masquer les dossiers</div>
						<div className="symbols">&#8997; &#8984; S</div>
					</div>
					<div className="enabled">Masquer le nombre de notes</div>
					<hr />
					<div className="command enabled">
						<div>Afficher le navigateur de pièces jointes</div>
						<div className="symbols">&#8984; 3</div>
					</div>
					<div className="grey">Afficher dans la note</div>
					<hr />
					<div className="command">
						<div className="grey">Afficher les surlignages</div>
						<div className="symbols">&#8963; &#8984; I</div>
					</div>
					<div className="command">
						<div className="grey">Afficher l'activité de la note</div>
						<div className="symbols">&#8963; &#8984; K</div>
					</div>
					<div className="grey">Afficher l'activité du dossier</div>
					<hr />
					<div className="command enabled">
						<div>Agrandir</div>
						<div className="symbols">&#8679; &#8984; .</div>
					</div>
					<div className="command enabled">
						<div>Réduire</div>
						<div className="symbols">&#8679; &#8984; ,</div>
					</div>
					<div className="command enabled">
						<div>Taille réelle</div>
						<div className="symbols">&#8679; &#8984; 0</div>
					</div>
					<hr />
					<div className="enabled">Masquer la barre d'outils</div>
					<div className="enabled">Personnaliser la barre d'outils...</div>
					<div className="grey">Personnaliser la Touch Bar...</div>
					<hr />
					<div className="command enabled">
						<div>Activer le mode plein écran</div>
						<div className="symbols">fn F</div>
					</div>
				</div>
			</div>
			<div className="tab extralong">
				<div className="box" id="Fenetre">
					<p className="title">Fenêtre</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Minimiser</div>
						<div className="symbols">&#8984; M</div>
					</div>
					<div className="command enabled">
						<div>Réduire/agrandir</div>
						<div className="symbols">&#8963; &#8984; Z</div>
					</div>
					<div className="enabled">Placer la fenêtre à gauche de l'écran</div>
					<div className="enabled">Placer la fenêtre à droite de l'écran</div>
					<div className="grey">Remplacer la fenêtre en mosaïque</div>
					<hr />
					<div className="grey">Supprimer la fenêtre du groupe</div>
					<div className="enabled">Ouvrir la note dans une nouvelle fenêtre</div>
					<hr />
					<div className="command enabled">
						<div>Notes</div>
						<div className="symbols">&#8984; 0</div>
					</div>
					<div className="enabled">Navigateur de photos</div>
					<hr />
					<div className="grey">Tout ramener au premier plan</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Aide">
					<p className="title">Aide</p>
				</div>
				<div className="container">
					<input type="text" placeholder="Recherche" />
					<div className="enabled">Aide Notes</div>
					<hr />
					<div className="enabled">Utilisation de tags</div>
					<div className="enabled">Utilisation de dossiers intelligents</div>
				</div>
			</div>
		</div>
	);
};

export default NotesHeader;
