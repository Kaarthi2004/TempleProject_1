import Preloader from '../components/Preloader';
import Mycarousel from '../components/Mycarousel';
import Card from '../components/EventCard';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import Navbar from '../components/Navbar/Navbar';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
 
    useEffect(() => {
     const timer = setTimeout(() => {
       setIsLoading(false);
     }, 1000); // Simulating a 2-second loading time. Replace with your actual loading logic.
 
     return () => clearTimeout(timer);
   }, []);
   return (
     <div className="App">
          <div>
               {isLoading ? (
                   <Preloader />
                ) : (
             <div className='relative'>
                  <Navbar/>
                  <Mycarousel />
                  <Card />
                  <ContactUs/>
                  <Footer/>
             </div>
                )}
          </div>
     </div>
   );
 }
 
export default Home;