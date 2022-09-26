//

import ContactItem from './ContactItem';

const ContactsList = ({ contacts, filter, deleteContact }) => {
  return (
    <ul>
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
