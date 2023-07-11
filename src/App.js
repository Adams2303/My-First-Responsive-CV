import './App.css';
import Navbar from './Components/navbar';
import Product_list from './Components/Products_list';
import Button from './Components/Common/Button';
import Timer from './Components/Timer'
import Form from './Components/Form';
import Increment from './Components/Increment';
import TaskManager from './Components/TaskManager';
import TaskManager2 from './Components/TaskManager2';
import Todo3 from './Components/Todo3';
import CustomNavbar from './ReactProject/CustomNavbar';
import Header from './ReactProject/Header';
import Footer from './ReactProject/Footer';
import AboutSection from './ReactProject/About';
import Experience from './ReactProject/Experience';
// import "~slick-/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <div>
      <CustomNavbar />
      <Header />
      <AboutSection />
      <Experience />
      <Footer />
      {/* <TaskManager /> */}
      {/* <TaskManager2 /> */}
      {/* <Todo3 /> */}
    </div>
  );
}

export default App

