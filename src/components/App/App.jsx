import { Component } from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = data => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
      };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <ContactForm onSubmit={this.addContact} />
        <ContactsList contacts={contacts} />
      </>
    );
  }
}

export default App;
