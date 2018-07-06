import PropTypes from 'prop-types';

const animalShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

const animalOptionalShape = PropTypes.oneOfType([
  PropTypes.shape({
    nope: PropTypes.string.isRequired,
  }),
  animalShape,
]);

export { animalShape, animalOptionalShape };
