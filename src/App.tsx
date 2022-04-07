import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState("");

  // any타입 지양해야 함
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = event;
    setValue(value);
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="username" />
      <button>Log in</button>
    </form>
  );
}

export default App;
