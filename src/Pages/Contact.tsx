import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="p-4">
      <h1 className='font-bold text-xl text-center mb-4'>Send a message</h1>
      <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md flex flex-col gap-4 p-6 border rounded shadow">
        <div className='flex flex-col gap-2'>
          <label htmlFor="name">Name</label>
          <input id="name" className='w-full border rounded px-3 py-2' type="text" value={name} onChange={(e) => setName(e.target.value)} 
            placeholder='Your name'
            required
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className='w-full border rounded px-3 py-2'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your email'
            required
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className='w-full border rounded px-3 py-2 min-h-[120px]'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Your message...'
            required
          />
        </div>
        <button
          type='submit'
          className='self-start px-4 py-2 rounded bg-black text-white'
        >
          Send
        </button>
      </form>
    </div>
  )
}
