import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/start/start";
import ShutDown from "./components/start/shut-down";
import Restart from "./components/start/restart";
import ScreenSaver from "./components/start/screen-saver";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/shut-down" element={<ShutDown />} />
				<Route path="/restart" element={<Restart />} />
				<Route path="/screen-saver" element={<ScreenSaver />} />
				<Route path="/about" element={<Start />} />
				<Route path="*" element={<Start />} />
			</Routes>
		</Router>
	);
};

export default App;
