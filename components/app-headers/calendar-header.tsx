import React from "react";
import "../../styles/app-header.css";

const CalendarHeader = () => {
	return (
		<div className="app-header calendar-header">
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
				<div className="box" id="App">
					<p className="title app">Calendrier</p>
				</div>
				<div className="container">
					<div className="enabled">À propos de Calendrier</div>
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
						<div>Services</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<hr />
					<div className="command enabled">
						<div>Masquer Calendrier</div>
						<div className="symbols">&#8984; H</div>
					</div>
					<div className="command enabled">
						<div>Masquer les autres</div>
						<div className="symbols">&#8997; &#8984; H</div>
					</div>
					<div className="enabled">Tout afficher</div>
					<hr />
					<div className="command enabled">
						<div>Quitter Calendrier</div>
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
						<div>Nouvel évènement</div>
						<div className="symbols">&#8984; N</div>
					</div>
					<div className="command enabled">
						<div>Nouveau calendrier</div>
						<div className="symbols">&#8997; &#8984; N</div>
					</div>
					<div className="command enabled">
						<div>Abonnement à un calendrier...</div>
						<div className="symbols">&#8997; &#8984; S</div>
					</div>
					<div className="enabled">Nouveau calendrier de jours fériés...</div>
					<hr />
					<div className="enabled">Importer...</div>
					<div className="command enabled">
						<div>Exporter</div>
						<img
							src="../../images/icons/icon_right-arrow.png"
							alt=""
							className="right-arrow"
						/>
					</div>
					<div className="command enabled">
						<div>Fermer</div>
						<div className="symbols">&#8984; W</div>
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
						<div className="symbols">&#8984; V</div>
					</div>
					<div className="grey">Supprimer</div>
					<div className="command enabled">
						<div>Tout sélectionner</div>
						<div className="symbols">&#8984; A</div>
					</div>
					<div className="command enabled">
						<div>Dupliquer</div>
						<div className="symbols">&#8984; D</div>
					</div>
					<hr />
					<div className="command">
						<div className="grey">Modifier l'évènement</div>
						<div className="symbols">&#8984; E</div>
					</div>
					<div className="command">
						<div className="grey">Lire les informations</div>
						<div className="symbols">&#8984; I</div>
					</div>
					<div className="command">
						<div className="grey">Afficher l'inspecteur</div>
						<div className="symbols">&#8997; &#8984; I</div>
					</div>
					<hr />
					<div className="grey">Publier...</div>
					<div className="grey">Arrêter de publier...</div>
					<div className="grey">Envoyer un e-mail de publication</div>
					<hr />
					<div className="command enabled">
						<div>Rechercher</div>
						<div className="symbols">&#8984; F</div>
					</div>
					<div className="command enabled">
						<div>Afficher l'orthographe et la grammaire</div>
						<div className="symbols">&#8984; :</div>
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
			<div className="tab long ticked">
				<div className="box" id="Presentation">
					<p className="title">Présentation</p>
				</div>
				<div className="container">
					<div className="enabled">Afficher la barre d'onglets</div>
					<div className="command">
						<div className="grey">Afficher tous les onglets</div>
						<div className="symbols">&#8679; &#8984; \</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Par jour</div>
						<div className="symbols">&#8984; 1</div>
					</div>
					<div className="command enabled">
						<div>Par semaine</div>
						<div className="symbols">&#8984; 2</div>
					</div>
					<div className="command enabled">
						<div>Par mois</div>
						<div className="symbols">&#8984; 3</div>
					</div>
					<div className="command enabled">
						<div>Par année</div>
						<div className="symbols">&#8984; 4</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Suivant</div>
						<div className="symbols">&#8984; &#8594;</div>
					</div>
					<div className="command enabled">
						<div>Précédent</div>
						<div className="symbols">&#8984; &#8592;</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Aller à Aujourd'hui</div>
						<div className="symbols">&#8984; T</div>
					</div>
					<div className="command enabled">
						<div>Aller à la date...</div>
						<div className="symbols">&#8679; &#8984; T</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Agrandir la taille du texte</div>
						<div className="symbols">&#8984; +</div>
					</div>
					<div className="command enabled">
						<div>Réduire la taille du texte</div>
						<div className="symbols">&#8984; -</div>
					</div>
					<hr />
					<div className="enabled">Afficher la liste des calendriers</div>
					<div className="enabled">Afficher les notifications</div>
					<hr />
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_tick.png" alt="" className="tick" />
							<div>Afficher les évènements toute la journée</div>
						</div>
					</div>
					<div className="enabled">Afficher les évènements refusés</div>
					<div className="command enabled">
						<div className="left-block">
							<img src="../../images/icons/icon_tick.png" alt="" className="tick" />
							<div>Afficher le temps de trajet</div>
						</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Actualiser les calendriers</div>
						<div className="symbols">&#8984; R</div>
					</div>
					<hr />
					<div className="command enabled">
						<div>Activer le mode plein écran</div>
						<div className="symbols">fn F</div>
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
						<div className="left-block">
							<img src="../../images/icons/icon_tick.png" alt="" className="tick" />
							<div>Calendrier</div>
						</div>
						<div className="symbols">&#8984; 0</div>
					</div>
					<hr />
					<div className="enabled">Contacts</div>
					<div className="command enabled">
						<div>Fenêtre des disponibilités</div>
						<div className="symbols">&#8679; &#8984; A</div>
					</div>
					<div className="enabled">Family</div>
					<div className="enabled">Jours fériés en France</div>
					<div className="enabled">Sleeps</div>
					<div className="enabled">Week Numbers</div>
					<hr />
					<div className="grey">Tout ramener au premier plan</div>
				</div>
			</div>
			<div className="tab">
				<div className="box" id="Aide">
					<p className="title">Aide</p>
				</div>
				<div className="container">
					<input type="text" placeholder="Recherche" />
					<div className="enabled">Aide Calendrier</div>
					<div className="enabled">Raccourcis clavier</div>
				</div>
			</div>
		</div>
	);
};

export default CalendarHeader;
