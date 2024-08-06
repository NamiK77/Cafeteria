import React from 'react';
import Banner from '../../Components/Banner';
import Categories from './Categories';
// import SpecialDishes from './SpecialDishes';
import Testimonials from './Testimonials';
import OurServices from './OurServices';
import styles from './Home.module.css'; // or './Home.css'

const Home = () => {
  return (
    <div>
      <div className={styles.componentSpacing}>
        <Banner />
      </div>
      <div className={styles.componentSpacing}>
        <Categories />
      </div>
      {/* <div className={styles.componentSpacing}>
        <SpecialDishes />
      </div> */}
      <div className={styles.componentSpacing}>
        <Testimonials />
      </div>
      <div className={styles.componentSpacing}>
        <OurServices />
      </div>
    </div>
  );
}

export default Home;
