# haydentam.github.io
# Portfolio Website

This is my personal portfolio website built to showcase my projects, skills, and experience in technology.  
It features an interactive design with a responsive layout and includes a contact form powered by **EmailJS** for direct communication.

## 🚀 Features
- Responsive design for desktop and mobile
- Project showcase with links to GitHub repositories
- Skills and experience sections
- Contact form integrated with EmailJS for sending messages

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Email Service:** EmailJS  

## 📬 Contact Form
The contact form uses [EmailJS](https://www.emailjs.com/) to send messages directly from the website without needing a backend server.  
Configuration example:

```javascript
emailjs.sendForm(
  'service_xxxxx',   // Service ID
  'template_xxxxx',  // Template ID
  '#contact-form',   // Form selector
  'publicKey_xxxxx'  // Public key
);
