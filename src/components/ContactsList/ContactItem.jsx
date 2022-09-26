//

const ContactItem = ({ id, name, number, filter, deleteContact }) => {
  if (name.toLowerCase().includes(filter.toLowerCase())) {
    return (
      <li>
        {name}: {number}{' '}
        <button type="button" onClick={() => deleteContact(id)}>
          delete
        </button>
      </li>
    );
  }
};

export default ContactItem;
