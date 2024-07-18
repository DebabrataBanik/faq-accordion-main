
function App() {
  return (
    <>
      <picture>
        <source srcSet="/assets/images/background-pattern-desktop.svg" media="(min-width: 768px)" />
        <img src="/assets/images/background-pattern-mobile.svg" />
      </picture>
      <div className="wrapper">

        <div className="card__container">
          <div className="card">
            <main>
              <div className="title">
                <img src="/assets/images/icon-star.svg" alt="icon-star" />
                <h1 className="heading">FAQs</h1>
              </div>
              
              <section className="faq-content">
                <article className="faq-item">
                  <div className="faq-question">
                    <h2>What is Frontend Mentor, and how will it help me?</h2>
                    <img src="/assets/images/icon-minus.svg" alt="plus icon" className="icon" /> 
                  </div>
                  <p className="faq-answer display">
                    Frontend Mentor offers realistic coding challenges to help developers improve their 
                    frontend coding skills with projects in HTML, CSS, and JavaScript. It is suitable for 
                    all levels and ideal for portfolio building.
                  </p>
                </article>
                <article className="faq-item">
                  <div className="faq-question">
                    <h2>Is Frontend Mentor free?</h2>
                    <img src="/assets/images/icon-plus.svg" alt="plus icon" className="icon" /> 
                  </div>
                  <p className="faq-answer">
                    Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                    option providing access to a range of projects suitable for all skill levels.
                  </p>
                </article>
                <article className="faq-item">
                  <div className="faq-question">
                    <h2>Can I use Frontend Mentor projects in my portfolio?</h2>
                    <img src="/assets/images/icon-plus.svg" alt="plus icon" className="icon" /> 
                  </div>
                  <p className="faq-answer">
                    Yes, you can use projects completed on Frontend Mentor in your portfolio. It is an excellent
                    way to showcase your skills to potential employers!
                  </p>
                </article>
                <article className="faq-item">
                  <div className="faq-question">
                    <h2>How can I get help if I am stuck on a Frontend Mentor challenge?</h2>
                    <img src="/assets/images/icon-plus.svg" alt="plus icon" className="icon" /> 
                  </div>
                  <p className="faq-answer">
                    The best place to get help is inside Frontend Mentors Discord community. There is a help 
                    channel where you can ask questions and seek support from other community members.
                  </p>
                </article>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default App