import { Component } from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;

    let nameRepeat = 0;

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        nameRepeat = 1;
        break;
      }
    }

    nameRepeat
      ? alert(`${data.name}, is alredy in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, data],
          };
        });
  };

  handleChangeFilter = event => {
    const { value } = event.target;
    this.setState({
      filter: value,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <ContactForm onSubmit={this.addContact} />
        <ContactsFilter onChangeFilter={this.handleChangeFilter} />
        <ContactsList contacts={contacts} filter={filter} />
      </>
    );
  }
}

export default App;
