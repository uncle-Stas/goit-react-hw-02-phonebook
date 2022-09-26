import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, filter, deleteContact }) => {
  if (name.toLowerCase().includes(filter.toLowerCase())) {
    return (
      <li className={css.contactItem}>
        <span className={css.itemText}>
          {name}: {number}
        </span>
        <button
          type="button"
          onClick={() => deleteContact(id)}
          className={css.button}
        >
          delete
        </button>
      </li>
    );
  }
};

export default ContactItem;
