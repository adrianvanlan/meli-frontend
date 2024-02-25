import PropTypes from 'prop-types';

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Se produjo un error:</p>
      <pre style={{ color: 'red' }}>{error?.message}</pre>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
};

export default ErrorFallback;
