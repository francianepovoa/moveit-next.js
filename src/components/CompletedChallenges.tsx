import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges() {
	const { challengesCompleted } = useContext(ChallengesContext);

	return (
		<div className={styles.completedChallengeContainer}>
			<span>Completed Challenges</span>
			<span>{challengesCompleted}</span>
		</div>
	);
}
