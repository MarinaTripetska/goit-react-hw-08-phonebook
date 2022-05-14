import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdPhoneEnabled } from 'react-icons/md';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Item, Name, Phone, Button } from './ContactsItem.styled';
import { useDeleteContactMutation } from '../../redux/app';
import { Modal } from '../Modal';
import ContactForm from '../ContactForm';
import toast from 'react-hot-toast';

const notifySUCCESS = text => toast.success(text);
const notifyERROR = text => toast.error(text);

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item id={id}>
      <Name>{name}:</Name>
      <Phone href={'tel: ' + number}>
        <MdPhoneEnabled /> {number}
      </Phone>

      <Button
        type="button"
        onClick={() =>
          deleteContact(id)
            .then(() => notifySUCCESS(`${name} successfuly deleted!`))
            .catch(() => notifyERROR('Something went wrong'))
        }
        disabled={isDeleting}
      >
        <AiFillDelete /> <span>{isDeleting ? '...Deleting' : 'Delete'}</span>
      </Button>

      <Button type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
        <AiFillEdit /> <span>Edit</span>
      </Button>

      {isModalOpen && (
        <Modal onClose={setIsModalOpen}>
          <ContactForm
            closeForm={setIsModalOpen}
            contactId={id}
            name={name}
            number={number}
          />
        </Modal>
      )}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
