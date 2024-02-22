import { Link } from 'react-router-dom';
import logo1x from '../../assets/Logo_ML.png';
import logo2x from '../../assets/Logo_ML@2x.png.png';
import './Logo.module.scss';

const logo = ({ width }) => (
  <Link to="/" className="Logo__Link">
    <img
      width={width || 106}
      src={logo1x}
      srcSet={`${logo1x} 53w, ${logo2x} 106w`}
      alt="Logo Mercadolibre"
    />
  </Link>
);

export default logo;
