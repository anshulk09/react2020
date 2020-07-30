import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  const buttonText = { text: 'Click Me!' };
  return (
    <div>
      <label className='label' htmlFor='name'>
        Enter Name
      </label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
