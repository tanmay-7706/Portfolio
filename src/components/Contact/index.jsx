import { contactInfo } from "../../data";
import "./Contact.css"

import Pyramid from "../../ui/Pyramid"
import SocialHandles from "../../ui/SocialHandles";
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    
  };
  return (
    
    <section id="contact">
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              {"Let's talk on your "}<span
              className="shine">great project</span>{" "}
              together
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact, index)=>(
                <article className="flex option" key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted
                      line__champ__1 value">
                        {contact.value}
                      </p>
                    </div>
                    <a href={contact.link} target="_blank" className="flex__center btn">
                      <span className="btn__shine text">Message</span>
                      <div className="flex__center icon" style={{background:contact.color}}>
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>


                </article>
              ))}
            </div>
            <SocialHandles/>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn flex__center submit__btn">
              <div className="icon"><BsFillSendFill /></div>
              <span>Send Now</span>
            </button>
          </form>

        </div>
      </div>

    </section>
  )
}

export default Contact;