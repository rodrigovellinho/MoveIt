import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="person1.jpg" alt=""/>
      <div>
        <strong>Rodrigo Kloeckner</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level { level }
        </p>
      </div>
    </div>
  );   
}