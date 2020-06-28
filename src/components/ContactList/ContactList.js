import PropTypes from 'prop-types';
import React from 'react';
import style from './contactList.module.css';

const ContactList = ({ contacts, filter, handleDelete }) => {
  const filterByName = obj => {
    const name = obj.name.toLowerCase();
    const filterName = filter.toLowerCase();
    return name.indexOf(filterName) !== -1;
  };

  return (
    <ul>
      {contacts.filter(filterByName).map(e => (
        <li key={e.id} className={style.listItem}>
          <p>
            <span>
              {e.name}: {e.number}
            </span>
            <button className={style.button} onClick={handleDelete} id={e.id}>
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
};

export default ContactList;
