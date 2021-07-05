import { useModal } from '../hooks/useModal';
import Modal from './Modal';
import ContactForm from './ContactForm';

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContactModal, openContactModal, closeContactModal] =
    useModal(false);

  return (
    <div>
      <h2>Modals</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido del Modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          similique vitae maxime accusamus necessitatibus voluptas.
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>
      <button onClick={openContactModal}>Contact</button>
      <Modal isOpen={isOpenContactModal} closeModal={closeContactModal}>
        <ContactForm />
      </Modal>
    </div>
  );
};

export default Modals;
