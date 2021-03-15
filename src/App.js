import logo from './logo.svg';
import './App.css';
import './components/EventCard/CustomCard';
import CustomCard from './components/EventCard/CustomCard';
import Carousel from "react-elastic-carousel";
import Header from './components/Header/Header' ;
import SearchPage from './components/SearchBar/SearchPage';
import CommitteeCard from './components/CommitteeCard/CommitteeCard.js';
import Footer from './components/Footer/Footer.js';



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];


function App() {
  return (
    <div>
        <Header/>
        <div style={{marginTop : '80px'}}className="alignhead"><h1>Events Coming Up</h1></div>
        <div className="d-flex align-items-center mainCard">
        <Carousel breakPoints={breakPoints}>
          <CustomCard />
          <CustomCard/>
          <CustomCard/>
          <CustomCard />
          <CustomCard/>
          <CustomCard/>
          <CustomCard />
          <CustomCard/>
          <CustomCard/>
        </Carousel>
        
      
        </div>
        <div className="alignhead"><h1>Commitees To View</h1></div>
        <SearchPage/>
        <div className="d-flex align-items-center mainCard ">
        <CommitteeCard/>
        <CommitteeCard/>
        <CommitteeCard/>
        </div>
        <div className="d-flex align-items-center mainCard">
        <CommitteeCard/>
        <CommitteeCard/>
        <CommitteeCard/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
