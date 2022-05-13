import { useState } from 'react';
import { MdAddIcCall } from 'react-icons/md';
import { Form, AreaName, AreaNumber, SubmitBtn } from './ContactForm.styled';
import { useSelector} from 'react-redux';
import toast from 'react-hot-toast';
import {
  useCreateContactMutation,
  useEditContactMutation,
  contactsApi,
} from '../../redux/app';

const notifyERROR = (text) => toast.error(text);
const notifySUCCESS = (text) => toast.success(text);
export default function ContactForm({ contactId, closeForm }) {
  const { data: contacts } = useSelector(
    contactsApi.endpoints.getAllContacts.select()
  );
  const contactState = contacts?.find(contact => contact.id === contactId);

  const [inputName, setInputName] = useState(() =>
    contactId ? contactState.name : ''
  );
  const [inputNumber, setInputNumber] = useState(() =>
    contactId ? contactState.phone : ''
  );

  const [createContact] = useCreateContactMutation();
  const [editContact] = useEditContactMutation();

  const onFormSubmit = e => {
    e.preventDefault();

    const findSameName = contacts?.find(
      ({ name }) => name.toLowerCase() === inputName.toLowerCase()
    );
//if modal open and we want update contact
    if (contactId) {
      !findSameName ?
        editContact({id:contactId, name: inputName, phone: inputNumber }).unwrap()
          .then(() => notifySUCCESS(`${inputName} updated`))
          .catch(r => notifyERROR(`Something went wrong. Eroor: ${r.status}`))
       : notifyERROR(`${inputName} is already in contacts!`);
        
      closeForm();

    } else {
//if we want create new contact
      !findSameName ?
        createContact({
          name: inputName,
          phone: inputNumber,
        }).unwrap()
          .then(() => notifySUCCESS(`New contact for ${inputName} added`))
          .catch(r => notifyERROR(`Something went wrong. Eroor: ${r.status}`))
        
      : notifyERROR(`${inputName} is already in contacts!`);

      setInputName('');
      setInputNumber('');
    }
  };

  return (   
    <Form onSubmit={onFormSubmit}>
      <AreaName>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          onChange={e => setInputName(e.target.value)}
          value={inputName}
          required
        />
      </AreaName>

      <AreaNumber>
        Phone
        <input
          type="tel"
          name="number"
          onChange={e => setInputNumber(e.target.value)}
          value={inputNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="The phone number must be numeric and may contain spaces, dashes, parentheses, and may begin with +"
          required
        />
      </AreaNumber>

      <br />

      <SubmitBtn type="submit">
        <MdAddIcCall />
        {contactId ? <span>Edit contact</span> : <span>Add contact</span>}
      </SubmitBtn>
    </Form>



  );
}
