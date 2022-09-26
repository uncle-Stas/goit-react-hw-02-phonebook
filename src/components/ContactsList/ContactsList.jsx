import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

import ContactItem from './ContactItem';

const ContactsList = ({ contacts, filter, deleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          filter={filter}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactsList;

// --------------------------- PropTypes ----------------------

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
