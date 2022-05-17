import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  contactsApi,
  useCreateContactMutation,
  useEditContactMutation,
} from '../../redux/app';
import { myToast } from '../Toast';

const useFormOperations = ({ contactId, closeForm, name, number }) => {
  const { data: contacts } = useSelector(
    contactsApi.endpoints.getAllContacts.select()
  );

  const [inputName, setInputName] = useState(name);
  const [inputNumber, setInputNumber] = useState(number);

  const [createContact] = useCreateContactMutation();
  const [editContact] = useEditContactMutation();

  const smartEdit = values => {
    editContact({ id: contactId, ...values })
      .unwrap()
      .then(() => myToast.notifySUCCESS(`${inputName} updated`))
      .catch(r =>
        myToast.myToast.notifyERROR(`Something went wrong. Eroor: ${r.status}`)
      );

    closeForm();
  };

  const smartCreate = values => {
    createContact(values)
      .unwrap()
      .then(() => myToast.notifySUCCESS(`New contact for ${inputName} added`))
      .catch(r =>
        myToast.notifyERROR(`Something went wrong. Eroor: ${r.status}`)
      );

    setInputName('');
    setInputNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactExists = contacts?.find(
      ({ name, number }) =>
        number === inputNumber && name.toLowerCase() === inputName.toLowerCase()
    );
    const nameExists = contacts?.find(
      ({ name }) => name.toLowerCase() === inputName.toLowerCase()
    );
    const values = { name: inputName, number: inputNumber };

    if (contactId) {
      contactExists
        ? myToast.notifyERROR(`Contact is already exist!`)
        : smartEdit(values);
    } else if (!contactId) {
      nameExists
        ? myToast.notifyERROR(`${inputName} already exist!`)
        : smartCreate(values);
    }
  };

  return [inputName, setInputName, inputNumber, setInputNumber, handleSubmit];
};

export default useFormOperations;
