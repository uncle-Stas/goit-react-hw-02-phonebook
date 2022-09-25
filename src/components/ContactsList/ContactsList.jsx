//

import ContactItem from './ContactItem';

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
