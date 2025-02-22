import React from 'react'
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  const [state, handleSubmit] = useForm("manqvkdg");
  if (state.succeeded) {
    return <p>Message envoyé avec succés 👌</p>;
  }
  return (
    <section id='Contact' className='contact-us'>
      <div className="flex">
        <h3 className='title'>Contactez us :</h3>
      </div>
      <p className='sub-title'>Contact us for more informations. We will answer all of your questions.</p>

      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor="email">Your Email :</label>
            <input autoComplete='off' required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='flex' style={{ marginTop: '24px' }}>
            <label htmlFor="message">Your message :</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>


          <button type="submit" disabled={state.submitting} className='submit'>Send</button>
        </form>
      </div>
      <div className='infos'>
        <ul className='contact-links'>
          <li><a href="mailto:cj.studiotn@gmail.com"><i className="fas fa-envelope"></i>cj.studiotn@gmail.com</a></li> 
          <li><a href="https://www.instagram.com/cj.studio.tn/"><i className="fab fa-instagram"></i>CJ Studio</a></li>
          <li><a href="https://www.facebook.com/cjstudiotn"><i className="fab fa-facebook"></i>CJ Studio</a></li>
          <li><a href="https://wa.me/21658133649" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i>+216 58 133 649</a></li>
          <li><a href="https://www.google.com/maps/@36.8548308,10.2610119,21z?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D" rel="noopener noreferrer"><i className="fas fa-map-marker-alt"></i>Rue Khaled Ibn Walid, L'aouina</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Contact