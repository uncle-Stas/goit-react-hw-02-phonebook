//

const ContactItem = ({ name, number, filter }) => {
  if (name.toLowerCase().includes(filter.toLowerCase())) {
    return (
      <li>
        {name}: {number}
      </li>
    );
  }
};

export default ContactItem;
