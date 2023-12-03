import React from 'react';
import Layout from './Layout.js';

const Home = () => <a href="../index.html"> home </a>;
const About = () => <div>About Page Content</div>;
const Contact = () => <div>Contact Page Content</div>;

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
