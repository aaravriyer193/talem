import PropTypes from 'prop-types';

const PeopleItem = ({ name, img_url, role }) => {
  return (
    <div>
      <img
        className="rounded-xl mb-2 aspect-square"
        src={img_url}
        alt={'User photo'}
      />
      <div className="text-gray-500">
        <p className="text-lg font-bold">{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
};

// Define prop types
PeopleItem.propTypes = {
  name: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default PeopleItem;
