import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';  // Make sure to import axios

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const dataInfo = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      const res = await axios.post('http://localhost:5000/contact', dataInfo);
      console.log(res.data);

      if (res.data) {
        toast.success("🎉 Message send successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { background: '#4CAF50', color: '#fff' },
          icon: "🚀",
        });
        
        navigate('/contact', { replace: true });
        localStorage.setItem("Users", JSON.stringify({
          id: res.data._id,
          name: res.data.name,
          email: res.data.email,
        }));
      }
    } catch (err) {
      console.log(err);
      toast.error(`❌ Failed to Send : ${err.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { background: '#f44336', color: '#fff' },
        icon: "⚠",
      });
    }
  };

  return (
    <>
      <Navbar />
      <section className='bg-fff6cc text-gray-900 font-sans px-12 pt-10 mt-8 pb-24'>
        <div className='container mx-auto'>
          <div className='mb-5 mt-3'>
            <h1 className='text-4xl mb-4 text-ffd400'>Contact Us</h1>
            <hr className='my-4 border-ffee99' />
          </div>
          <div className='space-y-5 flex flex-col lg:flex-row'>
            <div className='lg:w-5/12 mb-5'>
              <h3 className='text-black py-4 text-ffd819'>Get in touch</h3>
              <address>
                <strong className='text-ffe14c'>Email:</strong>{' '}
                <a href={`mailto:your-email@example.com`} className='text-gray-900 hover:text-ffd819'>
                  your-email@example.com
                </a>
                <br />
                <br />
                <p>
                  <strong className='text-ffe14c'>Phone:</strong> +123456789
                </p>
              </address>
              <p className='text-gray-800'>If you have any questions, feel free to reach out!</p>
            </div>
            <div className='lg:w-7/12 flex items-center'>
              <form className='contact__form w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col space-y-4'>
                  <div className='flex space-x-4'>
                    <input
                      className='border border-ffd400 p-4 rounded-md w-full bg-fffae5'
                      id='name'
                      {...register('name', { required: true })}
                      placeholder='Name'
                      type='text'
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && <span className='text-red-500'>Name is required</span>}
                    <input
                      className='border border-ffd400 p-4 rounded-md w-full bg-fffae5'
                      id='email'
                      {...register('email', { required: true })}
                      placeholder='Email'
                      type='email'
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <span className='text-red-500'>Email is required</span>}
                  </div>
                   
                    <input className='border border-ffd400 p-4 rounded-md w-full bg-fffae5'
                      type="text"
                      id='subject'
                      {...register('subject')}
                      placeholder='Subject'
                    />
                 

                  <textarea
                    className='border border-ffd400 p-4 rounded-md w-full bg-fffae5'
                    id='message'
                    {...register('message', { required: true })}
                    placeholder='Message'
                    rows='5'
                    aria-invalid={errors.message ? "true" : "false"}
                  ></textarea>
                  {errors.message && <span className='text-red-500'>Message is required</span>}
                  <button
                    className='sendbtn bg-ffd400 text-black bg-yellow-400 py-2 px-6 rounded-md hover:bg-yellow-500 transition-colors duration-300 ease-in-out'
                    type='submit'
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
