import 'react-loading-skeleton/dist/skeleton.css';

import { useEffect, useState } from 'react';

import Breadcrumb from '../Breadcrumb/Breadcrumb';
import ListItem from '../ListItem/ListItem';
import ListItemSkeleton from '../ListItem/ListItemSkeleton';
import NoResults from './NoResults';
import Skeleton from 'react-loading-skeleton';
import styles from './ListItems.module.scss';
import { useItems } from '../../hooks/useItems';
import { useLocation } from 'react-router-dom';

function ListItems() {
  const [searchString, setSearchString] = useState('');
  const { items, categories, isLoading } = useItems(searchString);

  const { search } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search);
    const q = query.get('q');
    if (q) {
      setSearchString(q);
    }
  }, [search]);

  return (
    <div className={styles.ListItems}>
      <div className={styles.ListItems__Breadcrumb}>
        {!isLoading && categories ? (
          <Breadcrumb categories={categories} />
        ) : (
          <Skeleton width={400} height={20} style={{ margin: '16px 0' }} />
        )}
      </div>
      {!items && isLoading && (
        <div className={styles.NoResultsWrapper}>
          <NoResults />
        </div>
      )}
      {items && !isLoading ? (
        <ul id="results">
          {items.map((item) => (
            <ListItem
              key={`item-${item.id || Math.random()}`}
              itemData={item}
            />
          ))}
        </ul>
      ) : (
        <ul id="results">
          <Skeleton wrapper={ListItemSkeleton} count={4} />
        </ul>
      )}
    </div>
  );
}

export default ListItems;
