//

import ContactItem from './ContactItem';

const ContactsList = ({ contacts, filter }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          filter={filter}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
