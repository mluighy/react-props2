import React from 'react';

// Take static values and make them dynamic using props
// For example: label id, label text, input placeholder, input description
function FormInput(props) {
  return (
    <div className="max-w-sm p-8">
      <label
        htmlFor={props.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.field}
      </label>
      <div className="mt-2">
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">{props.text}</p>
    </div>
  );
}

export default function App() {
  return (
    <form>
      <FormInput
        id="email"
        field="e-mail address"
        name="email"
        type="email"
        placeholder="you@example.com"
        text="We'll only use this for spam."
      />
      <FormInput
        id="name"
        field="Client name"
        name="name"
        type="text"
        placeholder="x y"
        text="Client name is coming here."
      />
    </form>
  );
}
