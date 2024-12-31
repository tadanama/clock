import React, { useEffect, useState } from "react";

function Clock() {
	// Declare state to store the current time
	const [time, setTime] = useState(new Date());

	// Use useEffect to start the interval (every one second)
	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		// Remove setInterval timer when component unmounts - TO PREVENT UNINTENDED BEHAVIOUR
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	// Format the time
	// Add zero to the front if the number is less than 10

	return <h1>Hi</h1>;
}

export default Clock;
