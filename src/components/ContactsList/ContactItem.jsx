//

const ContactItem = ({ id, name, number }) => {
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
};

export default ContactItem;
