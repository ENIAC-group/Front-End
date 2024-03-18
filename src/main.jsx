import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import AboutUsPage from './components/aboutus/aboutus.jsx'
import './components/aboutus/aboutus.css';
import './fonts/Ios15Medium.ttf';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <AboutUsPage>
      </AboutUsPage>
    </div>
    {/* <App /> */}
  </React.StrictMode>,
)
