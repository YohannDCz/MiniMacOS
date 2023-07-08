import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Start = () => {
	const navigate = useNavigate();

	let i = 0;

	function move() {
		const password = document.getElementById("password");

		if (password) {
			password.innerHTML = `	
				<div id="progress">
					<div id="bar"></div>
				</div>`;
		}
		if (i == 0) {
			i = 1;
			const elem = document.getElementById("bar");
			let width = 1;

			const frame = () => {
				if (width >= 100) {
					clearInterval(id);
					i = 0;
					navigate("./src/component/start/components/finder.html");
				} else {
					width++;
					if (elem) {
						elem.style.width = width + "%";
					}
				}
			};
			const id = setInterval(frame, 40);
		}
	}
	const arrow = document.getElementById("arrow");

	function showArrow(event: any) {
		if (arrow) {
			if (event.target.value.length === 0 && arrow.style.display === "flex") {
				arrow.style.display = "none";
			} else {
				arrow.style.display = "flex";
			}
		}
	}

	const handleKeyPress = (event: { key: string }) => {
		if (event.key === "Enter") {
			return move();
		}
	};

	return (
		<div className="start">
			<div className="panel-start">
				<img className="profile-picture" src="/buzz-leclair.jpeg" alt="" />
				<h1 className="name">Yohann Di Crescenzo</h1>
				<div className="password" id="password">
					<input
						type="password"
						name="password"
						id="input"
						placeholder="Mot de passe"
						onInput={showArrow}
						onKeyPress={handleKeyPress}
					/>
					<img
						className="arrow"
						id="arrow"
						src="/icons/arrow-right-circle.svg"
						alt=""
						onClick={move}
					/>
					<div className="questionbox">
						<button className="question" onClick={move}>
							<img className="question-mark" src="/icons/question-mark.png" alt="" />
						</button>
					</div>
				</div>
			</div>
			<div className="choices">
				<Link to="/shut-down" className="choice-link">
					<div className="shut-down">
						<div>
							<svg
								viewBox="0 0 24 24"
								display="inline-block"
								width="1em"
								height="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="currentColor"
									d="m6.265 3.807l1.147 1.639a8 8 0 1 0 9.176 0l1.147-1.639A9.988 9.988 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.988 9.988 0 0 1 4.265-8.193zM11 12V2h2v10h-2z"
								/>
							</svg>
						</div>
						<p>Éteindre</p>
					</div>
				</Link>
				<Link to="/restart" className="choice-link">
					<div className="restart">
						<div>
							<svg
								viewBox="0 0 24 24"
								display="inline-block"
								width="1em"
								height="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="currentColor"
									d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z"
								/>
							</svg>
						</div>
						<p>Redémarrer</p>
					</div>
				</Link>
				<Link to="/screen-saver" className="choice-link">
					<div className="sleep">
						<div>
							<svg
								viewBox="0 0 24 24"
								display="inline-block"
								width="1em"
								height="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Zm-4.101 5A6.977 6.977 0 0 1 12 19a6.977 6.977 0 0 1-4.899-2h9.798Zm1.427-2a7 7 0 1 0-12.653 0h12.653Z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<p>Suspendre</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Start;
