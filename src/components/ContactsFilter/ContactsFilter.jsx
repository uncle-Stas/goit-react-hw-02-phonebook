//

import { Component } from 'react';

class ContactsFilter extends Component {
  render() {
    return (
      <label>
        Search by name:
        <input type="text" onChange={this.props.onChangeFilter} />
      </label>
    );
  }
}

export default ContactsFilter;
