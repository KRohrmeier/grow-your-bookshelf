import { useState } from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import { ReactComponent as BookshelfLogo } from './images/bookshelfLogo.svg';
import LoginForm from './components/loginForm';
import './App.css';

function App() {
  const [openModal, setOpenModal] = useState('');
  const open = (buttonPurpose = '') => setOpenModal(buttonPurpose);
  const close = () => setOpenModal('');

  const onSVGMouseOver = (animationID) => {
    const animateElement = document.getElementById(animationID);
    animateElement.beginElement();
  };

  function onLogin(props) {
    // console.log('onLogin props = ', props);
    const { username, password } = props;
    console.log(`logging in with username ${username} & pw ${password}`);
  }

  function onRegister(props) {
    // console.log('onRegister props = ', props);
    const { username, password } = props;
    console.log(`registering with username ${username} & pw ${password}`);
  }

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
          aria-label='Login form'
          onDismiss={close}
          isOpen={openModal === 'login' || openModal === 'register'}
        >
          <div className='move-right'>
            <button className='dismiss-button' onClick={close}>
              close
            </button>
          </div>
          {openModal === 'login' && (
            <LoginForm buttonText={openModal} onSubmit={onLogin} />
          )}
          {openModal === 'register' && (
            <LoginForm buttonText={openModal} onSubmit={onRegister} />
          )}
        </Dialog>
      </main>
    </div>
  );
}

export default App;
