import { MdAddIcCall } from 'react-icons/md';
import { AreaName, AreaNumber, Form, SubmitBtn } from './ContactForm.styled';
import useFormOperations from './useFormOperations';

export default function ContactForm({
  contactId,
  closeForm,
  name = '',
  number = '',
}) {
  const [inputName, setInputName, inputNumber, setInputNumber, handleSubmit] =
    useFormOperations({
      contactId,
      closeForm,
      name,
      number,
    });

  return (
    <Form onSubmit={handleSubmit}>
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
        {contactId ? (
          <span>Save changes</span>
        ) : (
          <span>
            <MdAddIcCall /> Add contact
          </span>
        )}
      </SubmitBtn>
    </Form>
  );
}
