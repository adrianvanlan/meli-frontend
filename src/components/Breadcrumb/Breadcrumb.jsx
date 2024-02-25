import { ReactComponent as ArrowRightIcon } from '../../assets/arrowRight.svg';
import PropTypes from 'prop-types';
import styles from './Breadcrumb.module.scss';

const breadcrumb = (props) => {
  const { categories } = props;

  return (
    <ul className={styles.Breadcrumb}>
      {categories &&
        categories.map((category, index) => (
          <li className={styles.Breadcrumb__Item} key={`bc-${category}`}>
            {index > 0 ? <ArrowRightIcon /> : ''}
            <span>{category}</span>
          </li>
        ))}
    </ul>
  );
};

breadcrumb.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default breadcrumb;
