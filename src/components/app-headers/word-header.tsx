import React from "react";
import "../../styles/app-header.css";

const WordHeader = () => {
	return (
		<div className="app-header word-header">
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
			<div className="tab">
				<div className="box" id="Word">
					<p className="title app">Word</p>
				</div>
				<div className="container">
					<div className="enabled">À propos de Microsoft Word</div>
					<hr />
					<div className="command">
						<div>Préférences...</div>
						<div className="symbols">&#8984; ,</div>
					</div>
					<hr />
					<div className="enabled">Se déconnecter...</div>
					<hr />
					<div className="command enabled">
						<div>Services</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Masquer Word</div>
						<div className="symbols">&#8984; H</div>
					</div>
					<div className="command enabled">
						<div>Masquer les autres</div>
						<div className="symbols">&#8997; &#8984; H</div>
					</div>
					<div className="grey">Tout afficher</div>
					<hr />
					<div className="command enabled">
						<div>Quitter Word</div>
						<div className="symbols">&#8984; Q</div>
					</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Fichier">
					<p className="title">Fichier</p>
				</div>
				<div className="container">
					<div className="command">
						<div>Nouveau document</div>
						<div className="symbols">&#8984; N</div>
					</div>
					<div className="command enabled">
						<div>Nouveau à partir d'un modèle...</div>
						<div className="symbols">&#8679; &#8984; P</div>
					</div>
					<div className="command enabled">
						<div>Ouvrir...</div>
						<div className="symbols">&#8984; O</div>
					</div>
					<div className="command enabled">
						<div>Ouvrir récent</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Fermer</div>
						<div className="symbols">&#8984; W</div>
					</div>
					<div className="command enabled">
						<div>Enregistrer</div>
						<div className="symbols">&#8984; S</div>
					</div>
					<div className="command enabled">
						<div>Enregistrer sous...</div>
						<div className="symbols">&#8679; &#8984; S</div>
					</div>
					<div>Enregistrer comme modèle...</div>
					<hr />
					<div className="grey">Parcourir l'historique des versions</div>
					<hr />
					<div className="command enabled">
						<div>Partager</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div>Toujours ouvrir en lecture seule</div>
					<div className="command enabled">
						<div>Restreindre les autorisations</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="enabled">Réduire la taille du fichier...</div>
					<hr />
					<div className="enabled">Mise en page...</div>
					<div className="command eabled">
						<div>Imprimer...</div>
						<div className="symbols">&#8984; P</div>
					</div>
					<hr />
					<div className="enabled">Propriétés...</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Edition">
					<p className="title">Édition</p>
				</div>
				<div className="container">
					<div className="command">
						<div className="grey">Impossible d'annuler</div>
						<div className="symbols">&#8984; Z</div>
					</div>
					<div className="command">
						<div className="grey">Impossible de répéter</div>
						<div className="symbols">&#8984; Y</div>
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
					<hr />
					<div className="command">
						<div className="grey">Coller</div>
						<div className="symbols">&#8984; Z</div>
					</div>
					<div className="command">
						<div className="grey">Collage spécial...</div>
						<div className="symbols">&#8963; &#8984; V</div>
					</div>
					<div className="command">
						<div className="grey">Coller et respecter la mise en forme</div>
						<div className="symbols">&#8997; &#8679; &#8984; V</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Effacer</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Sélectionner tout</div>
						<div className="symbols">&#8984; A</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Rechercher</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="grey">Liaisons...</div>
					<hr />
					<div className="enabled">Démarrer la dictée Word</div>
					<hr />
					<div className="grey">Sélectionner des données...</div>
					<hr />
					<div className="command enabled">
						<div>Activer/Désactiver le dessin</div>
						<div className="symbols">&#8963; &#8984; Z</div>
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
			<div className="tab ticked">
				<div className="box" id="Affichage">
					<p className="title">Affichage</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_tick.png" alt="" className="tick" />
							<div>Mode Page</div>
						</div>
					</div>
					<div className="enabled">Mode Web</div>
					<div className="enabled">Plan</div>
					<div className="enabled">Brouillon</div>
					<hr />
					<div className="command enabled">
						<div>Focus</div>
						<div className="symbols">&#8963; &#8679; &#8984; F</div>
					</div>
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_tick.png" className="tick" />
							<div>Ruban</div>
						</div>
						<div className="symbols">&#8997; &#8984; R</div>
					</div>
					<div className="command enabled">
						<div>Encadré</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="grey">Barre des messages</div>
					<hr />
					<div className="enabled">Règle</div>
					<div className="enabled">En-tête et pied de page</div>
					<div className="grey">Notes de bas de page</div>
					<div className="enabled">Document maître</div>
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_tick.png" alt="" className="tick" />
							<div>Marques</div>
						</div>
					</div>
					<div className="enabled">Révéler la mise en forme</div>
					<div className="command enabled">
						<div>Zoom</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="enabled">Quadrillage</div>
					<div className="command enabled">
						<div>Activer le mode plein écran</div>
						<div className="symbols">fn F</div>
					</div>
				</div>
			</div>
			<div className="tab">
				<div className="box" id="Inserer">
					<p className="title">Insérer</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Images</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Forme</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>SmartArt</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Graphique</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="enabled">Tableau...</div>
					<div className="command enabled">
						<div>Audio</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Vidéo</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="enabled">Icônes...</div>
					<hr />
					<div className="command enabled">
						<div>Modèles 3D</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Compléments</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Lien hypertexte...</div>
						<div className="symbols">&#8984;K</div>
					</div>
					<div className="enabled">Signet...</div>
					<div className="enabled">Renvoi...</div>
					<hr />
					<div className="enabled">Commentaire</div>
					<hr />
					<div className="command enabled">
						<div>Saut</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="enabled">Note...</div>
					<div className="enabled">Légende...</div>
					<div className="enabled">Tables et index...</div>
					<div className="enabled">Filigrane...</div>
					<div className="enabled">Numéro de page...</div>
					<hr />
					<div className="command enabled">
						<div>Zone de texte</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Insertion automatique</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="enabled">Date et heure...</div>
					<div className="enabled">Objet...</div>
					<div className="enabled">Fichier...</div>
					<div className="enabled">Champs...</div>
					<hr />
					<div className="command enabled">
						<div>Équation</div>
						<div className="symbols">&#8963; =</div>
					</div>
					<div className="enabled">Symbole avancé...</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Mise-en-forme">
					<p className="title">Mise en forme</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Police...</div>
						<div className="symbols">&#8984; D</div>
					</div>
					<div className="enabled">Effets de texte...</div>
					<div className="command enabled">
						<div>Paragraphe...</div>
						<div className="symbols">&#8997; &#8984; M</div>
					</div>
					<div className="enabled">Document...</div>
					<hr />
					<div className="enabled">Puces et numéros...</div>
					<div className="enabled">Bordure et trame...</div>
					<hr />
					<div className="enabled">Colonnes...</div>
					<div className="enabled">Tabulations...</div>
					<div className="grey">Lettrine...</div>
					<div className="enabled">Changer la casse...</div>
					<hr />
					<div className="enabled">Style...</div>
					<hr />
					<div className="enabled">Substitution de polices...</div>
					<hr />
					<div className="enabled">Options des équations...</div>
				</div>
			</div>
			<div className="tab extralong">
				<div className="box" id="Outils">
					<p className="title">Outils</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Grammaire et orthographe</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Dictionnaire des synonymes...</div>
						<div className="symbols">&#8963; &#8997; &#8984; R</div>
					</div>
					<div className="enabled">Coupure de mots...</div>
					<div className="command enabled">
						<div>Recherche intelligente...</div>
						<div className="symbols">&#8963; &#8984; L</div>
					</div>
					<div className="enabled">Recherche...</div>
					<div className="command enabled">
						<div>Traduction</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="enabled">Langue...</div>
					<hr />
					<div className="enabled">Statistiques...</div>
					<div className="enabled">Options de correction automatique...</div>
					<hr />
					<div className="enabled">Vérification de l'accessibilité</div>
					<hr />
					<div className="command enabled">
						<div>Suivi des modifications</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="enabled">Combiner des documents...</div>
					<hr />
					<div className="grey">Bloquer des auteurs</div>
					<div className="grey">Débloquer toutes mes zones bloquées</div>
					<div className="enabled">Protéger le document...</div>
					<hr />
					<div className="enabled">Enveloppes...</div>
					<div className="enabled">Étiquettes...</div>
					<hr />
					<div className="command enabled">
						<div>Macro</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="grey">Compléments lents et désactivés...</div>
					<div className="enabled">Modèles et compléments...</div>
					<div className="enabled">Personnaliser le clavier...</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Tableau">
					<p className="title">Tableau</p>
				</div>
				<div className="container">
					<div className="enabled">Dessiner un tableau</div>
					<hr />
					<div className="command enabled">
						<div>Insérer</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Supprimer</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Sélectionner</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="grey">Fusionner les cellules</div>
					<div className="grey">Fractionner les cellules...</div>
					<div className="grey">Fractionner le tableau</div>
					<hr />
					<div className="command enabled">
						<div>Adjustement automatique et distribution</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="grey">Répéter les lignes d'en-tête</div>
					<hr />
					<div className="command enabled">
						<div>Convertir</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="enabled">Trier...</div>
					<div className="enabled">Formule...</div>
					<div className="enabled">Afficher le quadrillage</div>
					<hr />
					<div className="grey">Propriétés du tableau...</div>
				</div>
			</div>
			<div className="tab long ticked">
				<div className="box" id="Fenetre">
					<p className="title">Fenêtre</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Réduire</div>
						<div className="symbols">&#8984;M</div>
					</div>
					<div className="enabled">Zoom</div>
					<hr />
					<div className="enabled">Nouvelle fenêtre</div>
					<div className="enabled">Réorganiser tout</div>
					<div className="enabled">Fractionner</div>
					<hr />
					<div className="grey">Tout ramener au premier plan</div>
					<div className="enabled">Placer la fenêtre à gauche de l'écran</div>
					<div className="enabled">Placer la fenêtre à droite de l'écran</div>
					<div className="grey">Remplacer la fenêtre en mosaïque</div>
					<hr />
					<div className="grey">Supprimer la fenêtre du groupe</div>
					<hr />
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_tick.png" alt="" className="tick" />
							<div>Document Sans Titre</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tab">
				<div className="box" id="aide">
					<p className="title">Aide</p>
				</div>
				<div className="container">
					<input type="text" placeholder="Recherche" />
					<div className="enabled">Aide de Word</div>
					<hr />
					<div className="enabled">Commentaires</div>
				</div>
			</div>
		</div>
	);
};

export default WordHeader;
