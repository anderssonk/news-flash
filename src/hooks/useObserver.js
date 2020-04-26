import { useState, useEffect } from "react";

const useObserver = (prop, model) => {
	const [value, setValue] = useState(model[prop]); // m["k"] === m.k!
	useEffect(() => {
		const obs = () => setValue(model[prop]);

		model.addObserver(obs);
		return () => model.removeObserver(obs);
	}, [model, prop]);
	return value;
};

export default useObserver;
