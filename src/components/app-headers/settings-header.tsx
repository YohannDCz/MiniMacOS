import React from "react";
import "../../styles/app-header.css";

const SettingsHeader = () => {
	return (
		<div className="app-header setting-header">
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
				<div className="box" id="Reglages">
					<p className="title app">Réglages Système</p>
				</div>
				<div className="container">
					<div className="enabled">À propos de Réglages Système</div>
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
						<div>Masquer Réglages Système</div>
						<div className="symbols">&#8984; H</div>
					</div>
					<div className="command enabled">
						<div>Masquer les autres</div>
						<div className="symbols">&#8997; &#8984; H</div>
					</div>
					<div className="enabled">Tout afficher</div>
					<hr />
					<div className="command enabled">
						<div>Quitter Réglages Système</div>
						<div className="symbols">&#8984; Q</div>
					</div>
				</div>
			</div>
			<div className="tab short">
				<div className="box" id="Fichier">
					<p className="title">Fichier</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Fermer</div>
						<div className="symbols">&#8984; W</div>
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
			<div className="tab short">
				<div className="box" id="Presentation">
					<p className="title">Présentation</p>
				</div>
				<div className="container">
					<div className="command enabled">
						<div>Recherche</div>
						<div className="symbols">&#8984; F</div>
					</div>
				</div>
			</div>
			<div className="tab long">
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
					<div className="grey">Tout ramener au premier plan</div>
				</div>
			</div>
			<div className="tab long">
				<div className="box" id="Aide">
					<p className="title">Aide</p>
				</div>
				<div className="container">
					<input type="text" placeholder="Recherche" />
					<div className="enabled">Aide Réglages Système</div>
					<div className="enabled">Aide macOS</div>
					<div className="enabled">Manuel d'utilisation</div>
					<div className="enabled">Assistance macOS</div>
					<hr />
					<div className="enabled">Spécifications de &#171; MacBook Pro &#187;</div>
					<div className="enabled">Assistance pour le matériel</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsHeader;
