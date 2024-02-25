import Skeleton from 'react-loading-skeleton';
import styles from './ItemDetail.module.scss';

function ItemDetailSkeleton() {
  return (
    <div className={styles.ItemDetail}>
      <div className={styles.ItemDetail__Breadcrumb}>
        <Skeleton width={280} height={20} style={{ margin: '18px 0' }} />
      </div>
      <div className={styles.ItemDetail__Wrapper}>
        <div className={styles.ItemDetail__Content}>
          <div className={styles.ItemDetail__Content__Left}>
            <div className={styles.ItemDetail__Content__Image}>
              <Skeleton height={700} width="100%" />
            </div>
          </div>
          <div className={styles.ItemDetail__Content__Right}>
            <div className={styles.ItemDetail__Content__Right__Info}>
              <div className={styles.ItemDetail__Content__Right__Info__Extra}>
                <Skeleton height={10} width={150} />
              </div>
              <h1 className={styles.ItemDetail__Content__Right__Info__Title}>
                <Skeleton count={2} height={20} width={'80%'} />
              </h1>
              <div className={styles.ItemDetail__Content__Right__Info__Price}>
                <Skeleton height={40} width={175} />
              </div>
              <div className={styles.ItemDetail__Content__Right__Info__Action}>
                <Skeleton height={50} width={'100%'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailSkeleton;
