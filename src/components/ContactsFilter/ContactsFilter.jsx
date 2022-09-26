//

const ContactsFilter = ({ onChangeFilter }) => {
  return (
    <label>
      Search by name:
      <input type="text" placeholder="Enter name" onChange={onChangeFilter} />
    </label>
  );
};

// class ContactsFilter extends Component {
//   render() {
//     return (
//       <label>
//         Search by name:
//         <input
//           type="text"
//           placeholder="Enter name"
//           onChange={this.props.onChangeFilter}
//         />
//       </label>
//     );
//   }
// }

export default ContactsFilter;
