import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShutDown: React.FC = () => {
  const navigate = useNavigate();
	const [progress, setProgress] = useState(0);

	const move = () => {
		if (progress === 0) {
			setProgress(1);
			let width = 1;
      
			const frame = () => {
        if (width >= 100) {
          clearInterval(id);
					setProgress(0);
					window.location.href = "../../index.html";
				} else {
          width++;
					setProgress(width);
				}
			}
      
      const id = setInterval(frame, 40);
		}
	};

	return (
		<div className="black">
			<img className="apple-logo" src="/public/apple_logotype.png" alt="" />
			<div id="boot" onClick={move}>
				{progress === 0 ? (
					"Clicker pour démarrer"
				) : (
					<div id="progress">
						<div id="bar" style={{ width: `${progress}%` }}></div>
					</div>
				)}
			</div>
			<br />
		</div>
	);
};

export default ShutDown;