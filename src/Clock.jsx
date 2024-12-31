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

	// Display time state in readable format
	function formatTime() {
		const hours = time.getHours();
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();
		const amOrPM = hours > 12 ? "PM" : "AM";

		return `${prependZero(hours)} : ${prependZero(minutes)} : ${prependZero(
			seconds
		)} ${amOrPM}`;
	}

	// Add zero to the front if the number is less than 10
	function prependZero(number) {
		return number < 10 ? "0" + number : number;
	}

	return <h1>{formatTime()}</h1>;
}

export default Clock;
