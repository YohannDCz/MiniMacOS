import React from "react";
import "../../styles/app-header.css";

const MailHeader = () => {
	return (
		<div className="app-header mail-header">
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
			<div className="tab">
				<div className="box" id="Mail">
					<p className="title app">Mail</p>
				</div>
				<div className="container">
					<div className="enabled">À propos de Mail</div>
					<hr />
					<div className="command enabled">
						<div>Réglages...</div>
						<div className="symbols">&#8984; ,</div>
					</div>
					<div className="enabled">Comptes...</div>
					<hr />
					<div className="enabled">Ajouter un compte...</div>
					<hr />
					<div className="command enabled">
						<div>Service</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Masquer Mail</div>
						<div className="symbols">&#8984; H</div>
					</div>
					<div className="command enabled">
						<div>Masquer les autres</div>
						<div className="symbols">&#8997; &#8984; H</div>
					</div>
					<div className="enabled">Tout afficher</div>
					<hr />
					<div className="command enabled">
						<div>Quitter Mail</div>
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
						<div>Nouveau message</div>
						<div className="symbols">&#8984; N</div>
					</div>
					<div className="command enabled">
						<div>Nouvelle fenêtre</div>
						<div className="symbols">&#8997; &#8984; N</div>
					</div>
					<div className="command">
						<div className="grey">Ouvrir le message</div>
						<div className="symbols">&#8984; O</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Enregistrer</div>
						<div className="symbols">&#8984; S</div>
					</div>
					<div className="command enabled">
						<div>Enregistrer sous...</div>
						<div className="symbols">&#8679; &#8984; S</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Joindre des fichiers...</div>
						<div className="symbols">&#8679; &#8984; A</div>
					</div>
					<div className="grey">Enregistrer les pièces jointes...</div>
					<div className="grey">Insérer depuis l'iPhone ou l'iPad</div>
					<div className="command">
						<div className="grey">Coup d'&oelig;il sur les pièces jointes...</div>
						<div className="symbols">&#8984; Y</div>
					</div>
					<hr />
					<div className="enabled">Importer des boîtes aux lettres...</div>
					<hr />
					<div className="grey">Exporter au format PDF...</div>
					<hr />
					<div className="command">
						<div className="grey">Imprimer...</div>
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
						<div className="symbols">&#8984; V</div>
					</div>
					<div className="command">
						<div className="grey">Supprimer</div>
						<div className="symbols">&#8984; &#9003;</div>
					</div>
					<div className="command enabled">
						<div>Tout sélectionner</div>
						<div className="symbols">&#8984; A</div>
					</div>
					<div className="command">
						<div className="grey">Compléter</div>
						<div className="symbols">&#8997; &#9099;</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Coller comme citation</div>
						<div className="symbols">&#8679; &#8984; V</div>
					</div>
					<div className="command">
						<div className="grey">Coller et adapter le style</div>
						<div className="symbols">&#8997; &#8679; &#8984; V</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Ajouter les messages sélectionnés</div>
						<div className="symbols">&#8997; &#8984; I</div>
					</div>
					<div className="command">
						<div className="grey">Ajouter un lien...</div>
						<div className="symbols">&#8984; K</div>
					</div>
					<div className="command enabled">
						<div>Pièces jointes</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Pièces jointes dans les réponses</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
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
						<div>Paroles</div>
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
			<div className="tab extralong ticked">
				<div className="box" id="Presentation">
					<p className="title">Présentation</p>
				</div>
				<div className="container">
					<div className="enabled">Afficher la barre d'onglets</div>
					<div className="enabled">Afficher tous les onglets</div>
					<hr />
					<div className="grey">Personnaliser la Touch Bar</div>
					<hr />
					<div className="command enabled">
						<div>Trier par</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Filtrer</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="enabled">Utiliser la présentation</div>
					<div className="enabled">Afficher un aperçu en bas</div>
					<div className="enabled">Afficher la date et l'heure</div>
					<div className="enabled">Afficher l'étiquette À/Cc</div>
					<div className="enabled">Afficher la taille du message</div>
					<div className="enabled">Afficher la photo du contact</div>
					<hr />
					<div className="enabled">Mettre les conversations en surbrillance</div>
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_tick.png" className="tick" />
							<div>Organiser par conversation</div>
						</div>
					</div>
					<div className="enabled">Développer toutes les conversations</div>
					<div className="enabled">Condenser toutes les conversations</div>
					<hr />
					<div className="enabled">Champ Cc</div>
					<div className="command enabled">
						<div>Champ Cci</div>
						<div className="symbols">&#8997; &#8984; B</div>
					</div>
					<div className="command enabled">
						<div>Champ Répondre à</div>
						<div className="symbols">&#8997; &#8984; R</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Message</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="grey">Masquer les messages associés</div>
					<hr />
					<div className="command enabled">
						<div>Masquer la barre latérale</div>
						<div className="symbols">&#8963; &#8984; S</div>
					</div>
					<div className="command enabled">
						<div>Masquer la barre d'outils</div>
						<div className="symbols">&#8997; &#8984; T</div>
					</div>
					<div className="enabled">Personnaliser la barre d'outils...</div>
					<div className="command enabled">
						<div>Afficher la barre des favoris</div>
						<div className="symbols">&#8997; &#8679; &#8984; H</div>
					</div>
					<div className="command enabled">
						<div>Activer le mode plein écran</div>
						<div className="symbols">fn F</div>
					</div>
				</div>
			</div>
			<div className="tab extralong">
				<div className="box" id="Inbox">
					<p className="title">Boîte aux lettres</p>
				</div>
				<div className="container">
					<div className="grey">Connecter tous les comptes</div>
					<div className="enabled">Déconnecter tous les comptes</div>
					<div className="command enabled">
						<div>Relever tout le courrier</div>
						<div className="symbols">&#8679; &#8984; N</div>
					</div>
					<div className="enabled">Synchroniser tous les comptes</div>
					<div className="enabled">Marquer tous les messages comme lus</div>
					<div className="command enabled">
						<div>État des connexions</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Relever le courrier</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Synchroniser</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Éffacer les élément supprimés</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Éffacer le courrier indésirable</div>
						<div className="symbols">&#8997; &#8984; J</div>
					</div>
					<hr />
					<div className="enabled">Nouvelle boîte aux lettres....</div>
					<div className="enabled">Nouvelle boîte aux lettres intelligente...</div>
					<div className="grey">Modifier la boîte aux lettres intelligente...</div>
					<div className="grey">Dupliquer la boîte aux lettres intelligente</div>
					<div className="enabled">
						Nouveau dossier de boîte aux lettres intelligente...
					</div>
					<div className="grey">Renommer la boîte aux lettres...</div>
					<div className="grey">Supprimer la boîte aux lettres...</div>
					<div className="enabled">Exporter la boîte aux lettres...</div>
					<hr />
					<div className="command enabled">
						<div>Passer à la boîte aux lettres favorite</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Déplacer dans la boîte aux lettre favorite</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Aller à la boîte précédente</div>
						<div className="symbols">&#8963; &#8984; [</div>
					</div>
					<div className="command enabled">
						<div>Aller à la boîte suivante</div>
						<div className="symbols">&#8963; &#8984; ]</div>
					</div>
					<hr />
					<div className="enabled">Reconstruire</div>
				</div>
			</div>
			<div className="tab extralong">
				<div className="box" id="Message">
					<p className="title">Messages</p>
				</div>
				<div className="container">
					<div className="command">
						<div className="grey">Envoyer à nouveau</div>
						<div className="symbols">&#8679; &#8984; D</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Répondre</div>
						<div className="symbols">&#8984; R</div>
					</div>
					<div className="command">
						<div className="grey">Répondre à tous</div>
						<div className="symbols">&#8679; &#8984; R</div>
					</div>
					<div className="command">
						<div className="grey">Réexpédier</div>
						<div className="symbols">&#8679; &#8984; F</div>
					</div>
					<div className="grey">Réexpédier en tant que pièce jointe</div>
					<div className="command">
						<div className="grey">Rediriger</div>
						<div className="symbols">&#8679; &#8984; E</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Rappel</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="grey">Ignorer le suivi</div>
					<hr />
					<div className="command">
						<div className="grey">Marquer comme non lu</div>
						<div className="symbols">&#8679; &#8984; U</div>
					</div>
					<div className="command">
						<div className="grey">Déplacer vers indésirables</div>
						<div className="symbols">&#8679; &#8984; J</div>
					</div>
					<div className="command">
						<div className="grey">Afficher</div>
						<div className="symbols">&#8963; &#8679; M</div>
					</div>
					<div className="command enabled">
						<div>Drapeau</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Définir la priorité</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Archiver</div>
						<div className="symbols">&#8963; &#8984; A</div>
					</div>
					<div className="command">
						<div className="grey">Déplacer vers la boîte aux lettres prédite</div>
						<div className="symbols">&#8963; &#8984; M</div>
					</div>
					<div className="command">
						<div className="grey">Déplacer vers</div>
						<img
							src="../../images/icons/icon_right-arrow_grey.png"
							className="right-arrow"
						/>
					</div>
					<div className="command">
						<div className="grey">Copier dans</div>
						<img
							src="../../images/icons/icon_right-arrow_grey.png"
							className="right-arrow"
						/>
					</div>
					<div className="grey">Déplacer à nouveau</div>
					<hr />
					<div className="command">
						<div className="grey">Appliquer les règles</div>
						<div className="symbols">&#8997; &#8984; L</div>
					</div>
					<div className="grey">Ajouter le destinataire aux contacts</div>
					<hr />
					<div className="grey">Supprimer les pièces jointes</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Format">
					<p className="title">Format</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Afficher les polices</div>
						<div className="symbols">&#8984; T</div>
					</div>
					<div className="command enabled">
						<div>Afficher les couleurs</div>
						<div className="symbols">&#8679; &#8984; C</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Listes</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Style</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Alignement</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Indentation</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Niveau de citation</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Convertir au format texte enrichi</div>
						<div className="symbols">&#8679; &#8984; T</div>
					</div>
				</div>
			</div>
			<div className="tab long ticked">
				<div className="box" id="Fenetre">
					<p className="title">Fenêtre</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Minimiser</div>
						<div className="symbols">&#8984; M</div>
					</div>
					<div className="enabled">Réduire/agrandir</div>
					<div className="enabled">Placer la fenêtre à gauche de l'écran</div>
					<div className="enabled">Placer la fenêtre à droite de l'écran</div>
					<div className="grey">Remplacer la fenêtre en mosaïque</div>
					<hr />
					<div className="grey">Supprimer la fenêtre du groupe</div>
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
					<div className="command enabled">
						<div>Fenêtre de messages</div>
						<div className="symbols">&#8984; 0</div>
					</div>
					<hr />
					<div className="enabled">Navigateur photos</div>
					<div className="enabled">Destinataires précédents</div>
					<hr />
					<div className="command enabled">
						<div>Activité</div>
						<div className="symbols">&#8997; &#8984; 0</div>
					</div>
					<div className="enabled">Diagnostic de connexion</div>
					<hr />
					<div className="grey">Tout ramener au premier plan</div>
					<hr />
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_tick.png" className="tick" />
							<div>Toutes les boîtes</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tab">
				<div className="box" id="Aide">
					<p className="title">Aide</p>
				</div>
				<div className="container">
					<input type="text" placeholder="Recherche" />
					<div className="enabled">Aide Mail</div>
					<hr />
					<div className="enabled">Nouveautés de Mail</div>
				</div>
			</div>
		</div>
	);
};

export default MailHeader;