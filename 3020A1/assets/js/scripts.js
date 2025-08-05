import { loadHeaderFooter } from "./util.js";

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById('header');
  // when the scroll is greater than 80 viewport height, add the scroll-header class to header tag
  if (this.scrollY >= 80) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('tab__active');
    });

    target.classList.add('tab__active');

    tabs.forEach((tab) => {
      tab.classList.remove('tab__active');
    });

    tab.classList.add('tab__active');
  });
});

/**================BLOG======================= */
const divEl = document.getElementById('blog');
function onChange(event) {
  const percentX = event.offsetX / 396;
}
divEl.addEventListener('mousemove', onChange);


/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactSubject = document.getElementById('contact-subject'),
  contactMessage = document.getElementById('contact-message'),
  errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value
  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    contactSubject.value === '' ||
    contactMessage.value === ''
  ) {
    // show message
    errorMessage.textContent = 'Write all the input fields';
  } else {
    // serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
        'service_ukexj52',
        'template_juoo1wp',
        '#contact-form',
        'vxDcl4UI2jbOQBn6f'
      )
      .then(
        () => {
          // show message and add color, window + dot to open emoji
          errorMessage.classList.add('color-first');
          errorMessage.textContent = 'Message sent ✔';

          // remove message after 5 seconds
          setTimeout(() => {
            errorMessage.textContent = '';
          }, 5000);
        },
        (error) => {
          alert('OOPs! SOMETHING WENT WRONG...', error);
        }
      );

    // clear input fields
    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';
  }
};
contactForm.addEventListener('submit', sendEmail);

/**================LIGHT MODE============== */
let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch');

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
}

if (lightmode === "active") enableLightmode();

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode');
    lightmode !== "active" ? enableLightmode() : disableLightmode();
})

/**================JSON================= */
document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');
    fetch('../data/posts.json')
        .then(response => response.json())
        .then(posts => {
          posts.forEach(post => {
              const postElement = document.createElement('div');
              // manipulate postElement to show the content of the blog post with the specific 
              // style defined for it
              //add postElement as a child to blog list
              postElement.className = 'blog-post';

              // Create elements for title and content
              const title = document.createElement('h3');
              title.textContent = post.title;

              const date = document.createElement('p');
              date.innerHTML = `<small>${post.date}</small>`;

              const content = document.createElement('p');
              content.textContent = post.content;

              // Append them to the postElement
              postElement.appendChild(title);
              postElement.appendChild(date);
              postElement.appendChild(content);

              // Add postElement to the blog list container
              blogList.appendChild(postElement);
              console.log(post);
          });
        })
    .catch(error => console.error('Error loading blog posts:', error));
});

/**==============HEADER AND FOOTER============== */
document.addEventListener('DOMContentLoaded', () => {
  loadHeaderFooter();
});