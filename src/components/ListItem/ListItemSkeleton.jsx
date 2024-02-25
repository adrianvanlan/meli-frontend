import Skeleton from 'react-loading-skeleton';
import styles from './ListItem.module.scss';

const ListItemSkeleton = () => {
  return (
    <li className={styles.ListItem}>
      <div className={styles.ListItem__Image}>
        <Skeleton width={160} height={160} />
      </div>
      <div className={styles.ListItem__Info}>
        <div className={styles.ListItem__Info__Price}>
          <Skeleton height={20} width={150} />
        </div>
        <div className={styles.ListItem__Info__Link}>
          <div className={styles.ListItem__Info__Title}>
            <Skeleton height={20} width={600} style={{ marginTop: '20px' }} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItemSkeleton;
