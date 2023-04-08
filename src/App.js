import { useState } from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import { ReactComponent as BookshelfLogo } from './images/bookshelfLogo.svg';
import './App.css';

function App() {
  const [openModal, setOpenModal] = useState('');
  const open = (buttonPurpose = '') => setOpenModal(buttonPurpose);
  const close = () => setOpenModal('');

  const onSVGMouseOver = (animationID) => {
    const animateElement = document.getElementById(animationID);
    animateElement.beginElement();
  };

  return (
    <div className='App'>
      <main>
        <header className='app-header'>
          <div className='logo-div'>
            <BookshelfLogo onMouseOver={() => onSVGMouseOver('bookshelf')} />{' '}
          </div>
          <h1>My BookS(h)elf</h1>
        </header>

        <button className='open-modal primary' onClick={() => open('login')}>
          Login
        </button>

        <button
          className='open-modal secondary'
          onClick={() => open('register')}
        >
          Register
        </button>

        <Dialog
          onDismiss={close}
          isOpen={openModal === 'login' || openModal === 'register'}
        >
          <button className='close-modal' onClick={close}>
            close
          </button>
          <p>You clicked a button to {openModal}.</p>
        </Dialog>
      </main>
    </div>
  );
}

export default App;
