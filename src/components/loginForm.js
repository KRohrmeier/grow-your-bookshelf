import './loginForm.css';

function LoginForm({
  buttonText,
  onSubmit = () =>
    console.error('you need to pass in an onSubmit handler to the LoginForm'),
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    console.log(`You submitted a form - name: ${username}, pword: ${password}`);
    onSubmit({ username, password });
  }

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <div className='input-group'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' />
      </div>
      <br />
      <div className='input-group'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' />
      </div>
      <br />
      <div className='input-group'>
        <button type='submit'>{buttonText}</button>
      </div>
    </form>
  );
}

export default LoginForm;
