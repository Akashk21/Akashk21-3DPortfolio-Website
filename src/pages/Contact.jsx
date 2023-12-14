import { Suspense, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [Loading, setLoading] = useState(false); // Corrected variable name

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = () => {};

  const handleFocus = (e) => {
    e.preventDefault();
    setLoading(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Akash',
          from_email: form.email,
          to_email: 'akashk12304@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type="text"
              name="name"
              className='input'
              placeholder='Akash'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input
              type="email"
              name="email"
              className='input'
              placeholder='akash@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className='btn'
            disabled={Loading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {Loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
