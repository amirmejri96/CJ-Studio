import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <section id='Services' className='service'>
      <h3>Our services</h3>
      <p>CJ Studio is an agency with a professional team composed of a videographer, a photographer, a graphic designer, and a web developer.
        We offer high-quality creative services to help you stand out.</p>
      <h5>Our Services Include :</h5>
      <p><strong style={{textDecoration:'underline'}}>• Professional & Engaging Videos : </strong> <br />
        ➯ We create high-quality videos that captivate your audience and highlight your brand, products, or services. <br/>

        <strong style={{textDecoration:'underline'}}>• Photography : </strong><br/>
        ➯ Our professional photography services provide stunning and high-resolution images for your events, products, or corporate needs. <br/>

        <strong style={{textDecoration:'underline'}}>• Graphic Design (Logos, Posters, and More) : </strong><br/>
        ➯ We design impactful logos, eye-catching posters, and various marketing materials to enhance your brand identity. <br/>

        <strong style={{textDecoration:'underline'}}>• Web Development (Static & Dynamic Websites) : </strong><br/>
        ➯ Static Websites (Showcase Websites): Elegant and responsive websites to present your business online. <br/>
        ➯ Dynamic Websites: Interactive websites with custom features tailored to your needs, including databases, user accounts, and more.</p>

        <div className='team'>
            <div className='team-image'>
            <img src='../../../assets/crispy.png' alt='Videographer' />
            <p>Fares Laaridhi <br/> ( Videographer )</p>
            </div>
            <div className='team-image'>
            <img src='../../../assets/joker.png' alt='Photographer' />
            <p>Anoir Sammat <br/> ( Photographer )</p>
            </div>
            <div className='team-image'>
            <img src='../../../assets/tounsi.png' alt='Graphic Designer' />
            <p>Chiraz Tounsi <br/> ( Graphic Designer )</p>
            </div>
            <div className='team-image'>
            <img src='../../../assets/mejri.png' alt='Web Developer' />
            <p>Amir Mejri <br/> ( Web developer )</p>
            </div>
            

        </div>

    </section>
  )
}

export default Services