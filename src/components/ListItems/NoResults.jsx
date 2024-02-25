import './NoResults.module.scss';

import { ReactComponent as NoResultsIcon } from '../../assets/noResults.svg';

const NoResults = () => (
  <div className="NoResults">
    <div>
      <NoResultsIcon />
    </div>
    <div className="NoResults__Message">
      No hay publicaciones que coincidan con tu búsqueda
    </div>
  </div>
);

export default NoResults;
