import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
	const { level } = useContext(ChallengesContext);

	return (
		<div className={styles.profileContainer}>
			<img
				src='https://cdn.pixabay.com/photo/2017/11/15/21/01/anatomy-2952567_1280.png'
				alt='Pomodoro Tracker'
			/>

			<div>
				<strong>Pomodoro Tracker</strong>
				<p>
					<img src='icons/level.svg' alt='Level' />
					Level {level}
				</p>
			</div>
		</div>
	);
}
