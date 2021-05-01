import React from 'react';
import Button from '@material-ui/core/Button';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar';

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
// const Home = () => {
//   return (
//     <div className="flex-column flex-1 pad-10">
//          <h3>Home Page</h3>
//     </div>
//   )
//   // return (
//   //   <div>
//   //     <h1>This is home</h1>
//   //   </div>
//   // )
// }

export default Home
