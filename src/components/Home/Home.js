import React from 'react';

function Home(props) {
  return (
    <div className="home">
      <div>
        <h1>
          Welcome to {props.name || <strong>Welcome Message</strong>}!
        </h1>
      </div> 
      <section className="intro-page">
        <div>
          <h2>"Easier Way to Find the Right College for You"</h2>
            <img
              src=""
              alt="The Right College for You"
          />
          </div>
        <div>
          <h2>"You Got This!"</h2>
            <img
              src=""
              alt="Motivation"
          />
          </div>
      </section>
    </div>
  )
}

export default Home;
