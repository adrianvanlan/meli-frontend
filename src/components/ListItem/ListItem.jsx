import IconShipping from '../IconShipping/IconShipping';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCurrencyPrice } from '../../helpers';
import styles from './ListItem.module.scss';

const listItem = ({ itemData }) => {
  const { price } = itemData;

  return (
    <li className={styles.ListItem} data-item-id={itemData && itemData.id}>
      <>
        <div className={styles.ListItem__Image}>
          <img src={itemData.picture} alt={`Imagen ${itemData.title}`} />
        </div>
        <div className={styles.ListItem__Info}>
          {itemData.price && (
            <div className={styles.ListItem__Info__Price}>
              {itemData.price.amount > 0 ? (
                <span>{getCurrencyPrice(price.amount, price.currency)}</span>
              ) : null}
              {itemData.price.decimals > 0 ? (
                <span className={styles.ListItem__Info__Price__Decimals}>
                  {itemData.price.decimals}
                </span>
              ) : null}
              {itemData.free_shipping && (
                <span className={styles.ListItem__Info__Price__Shipping}>
                  <IconShipping />
                </span>
              )}
            </div>
          )}
          {itemData.title && (
            <Link
              to={`/items/${itemData.id}`}
              className={styles.ListItem__Info__Link}
            >
              <h2 className={styles.ListItem__Info__Title}>{itemData.title}</h2>
            </Link>
          )}
        </div>
      </>
    </li>
  );
};

listItem.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export default listItem;
