import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdPhoneEnabled } from 'react-icons/md';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Item, Name, Phone, Button } from './ContactsItem.styled';
import { useDeleteContactMutation} from '../../redux/app';
import { Modal } from '../Modal';
import ContactForm from '../ContactForm';

const ContactItem = ({ id, name, phone }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item id={id}>
      <Name>{name}:</Name>
      <Phone href={'tel: ' + name}>
        <MdPhoneEnabled /> {phone}
      </Phone>

      <Button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        <AiFillDelete /> <span>{isDeleting ? '...Deleting' : 'Delete'}</span>
      </Button>

      <Button type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
        <AiFillEdit /> <span>Edit</span>
      </Button>

      {isModalOpen && (
        <Modal onClose={setIsModalOpen}>
          <ContactForm contactId={id} closeForm={setIsModalOpen} />
        </Modal>
      )}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
