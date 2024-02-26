import { useEffect, useState } from 'react';

import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Helmet } from 'react-helmet-async';
import ItemDetailSkeleton from './ItemDetailSkeleton';
import Skeleton from 'react-loading-skeleton';
import { getCurrencyPrice } from '../../helpers';
import styles from './ItemDetail.module.scss';
import { useItem } from '../../hooks/useItems';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const params = useParams({});
  const [itemId, setItemId] = useState(null);
  const { item: itemData, isLoading } = useItem(itemId);

  const renderDescription = (data) => {
    if (data && data.description !== '') {
      return data.description;
    } else {
      return 'Anuncio sin descripción';
    }
  };

  useEffect(() => {
    const { id } = params;
    if (id) {
      setItemId(id);
    }
  }, [params]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (isLoading) {
    return <Skeleton wrapper={ItemDetailSkeleton} />;
  }

  return (
    <div className={styles.ItemDetail}>
      {itemData && itemData.title && (
        <Helmet>
          <title>{`${itemData.title} | Mercado Libre 📦`}</title>
          <meta
            name="description"
            content={`Envíos gratis en el día ✓ Comprá online de manera segura con Compra Protegida ${itemData.title}`}
          />
        </Helmet>
      )}

      {itemData && itemData.categories && (
        <div className={styles.ItemDetail__Breadcrumb}>
          <Breadcrumb categories={itemData.categories} />
        </div>
      )}
      <div className={styles.ItemDetail__Wrapper}>
        <div className={styles.ItemDetail__Content}>
          <div className={styles.ItemDetail__Content__Left}>
            <div className={styles.ItemDetail__Content__Image}>
              {itemData && itemData.picture && (
                <img src={itemData.picture} alt={`Imagen ${itemData.title}`} />
              )}
            </div>
          </div>
          <div className={styles.ItemDetail__Content__Right}>
            <div className={styles.ItemDetail__Content__Right__Info}>
              <div className={styles.ItemDetail__Content__Right__Info__Extra}>
                {itemData && (itemData.sold_quantity || itemData.condition) && (
                  <span>
                    {itemData.condition === 'new' ? 'Nuevo' : 'Usado'}
                    {itemData && itemData.sold_quantity > 0
                      ? ` - ${itemData.sold_quantity} vendido${itemData.sold_quantity === 1 ? '' : 's'}`
                      : null}
                  </span>
                )}
              </div>
              <h1 className={styles.ItemDetail__Content__Right__Info__Title}>
                {itemData && itemData.title && itemData.title}
              </h1>
              <div className={styles.ItemDetail__Content__Right__Info__Price}>
                {itemData && itemData.price && (
                  <span>
                    {getCurrencyPrice(
                      itemData.price.amount,
                      itemData.price.currency,
                    )}
                  </span>
                )}
                {itemData.price && itemData.price.decimals > 0 && (
                  <span
                    className={
                      styles.ItemDetail__Content__Right__Info__Price__Decimals
                    }
                  >
                    {itemData.price.decimals}
                  </span>
                )}
              </div>

              <div className={styles.ItemDetail__Content__Right__Info__Action}>
                <button type="button">Comprar</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ItemDetail__Content__Description}>
          <div className={styles.ItemDetail__Content__Description__Title}>
            Descripción del Producto
          </div>
          <div className={styles.ItemDetail__Content__Description__Text}>
            {renderDescription(itemData)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
