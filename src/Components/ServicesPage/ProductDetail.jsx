import React, { useEffect, useRef, useState } from 'react';
import './ProductDetail.css';

const ProductDetail  = () => {
   const [skills, setSkills] = useState([
      { name: 'CPU', icon:'cpu.svg', percentage: 0, background: 'limegreen', limit: 50 },
      { name: 'GPU', icon:'gpu.svg', percentage: 0, background: 'pink', limit: 40 },
      { name: 'battery', icon:'battery.svg', percentage: 0, background: 'orange', limit: 30 },
      { name: 'display', icon:'screen.svg', percentage: 0, background: 'red', limit: 20 },
   ]);

   useEffect(() => {
      const timer = setInterval(() => {
      setSkills(prevSkills => {
         return prevSkills.map(skill => ({
            ...skill,
            percentage: skill.percentage < skill?.limit ? skill.percentage + 10 : skill.percentage,
         }));
      });
      }, 500)
      return () => clearInterval(timer);
   }, []);


   return (
   <div className='product-container'>
      <div className='main-content'>
      <h1 className='heading'>Here is your dream laptop.</h1>
      <div className='product-detail'>
         <div className='product-d'>
            <img src="laptopt1.png" alt="laptop" width="200" height="200"></img>

            <div className='product-d-info'>
               <div className='product-da'>
               <img src="laptop-icon.svg" alt='laptop-icon' style={{ width: '2em'}} />
               <h2 className='product-d-text'>
                  HP Pavilion Gaming 15-ec1024AX
               </h2>
               </div>
               <div className='product-da'>
               <img src="cpu.svg" alt='laptop-icon' style={{ width: '2em'}} />
               <p className='product-d-text'>AMD Ryzen 5 4600H</p>
               </div>
               <div className='product-da'>
                  <img src="gpu.svg" alt='laptop-icon'
                  style={{ width: "2em"}} />
                  <p className='product-d-text'>NVIDIA GTX 1650 4GB Graphics</p>
               </div>
               <div className='product-da'>
                  <img src="ram.svg" alt='laptop-icon'
                  style={{ width: "2em"}} />
                  <p className='product-d-text'>8GB DDR4 RAM</p>
               </div>
               <div className='product-da'>
                  <img src="storage.svg" alt='laptop-icon'
                  style={{ width: "2em"}} />
                  <p className='product-d-text'>1TB HDD + 256GB SSD</p>
               </div>
               <div className='product-da'>
                  <img src="screen.svg" alt='laptop-icon'
                  style={{ width: "2em"}} />
                  <p className='product-d-text'>15.6 FHD IPS Display</p>
               </div>
               <div className='product-da'>
                  <img src="os.svg" alt='laptop-icon'
                  style={{ width: "2em"}} />
                  <p className='product-d-text'>Windows 10 Home</p>
               </div>
               <div className='product-da'>
                  <img src="price.svg" alt='laptop-icon'
                  style={{ width: "2em"}} />
               <p className='product-d-text'>₹ 64,990</p>
               </div>

            </div>

         </div>
         <div></div>
         <div></div>
      </div>

      <div className='product-comparison'>
         <h2>Performance</h2>
         <p className='sub-head'>This Indicator represents the range, for the laptop performances according to the user selected choice.</p>

         <div className='product-comparison-table'>
            {skills?.map((item, index) => (
            <div className='progress-da' key={index}>
               <img src={item?.icon} alt='laptop-icon' style={{ width: '2em', marginRight: '1em'}} />
               {/* progress bar */}
               <div className="progress">
                  <div className="progress-done"
                  style={{ width: `${item.percentage}%`, backgroundColor: `${item.background }`}}>
                  </div>
               </div>
            </div>
            ))}
         </div>

      </div>
      </div>

      <div className='side-content'>
         <h1 className='sub-head'>Key Features</h1>
         <div className='side-content-d'>

            <div className='side-content-section '>
               <div className='overlay'></div>
               <div className='side-content-details'>
               <h2 className='sub-head'>CPU</h2>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, illo. Ipsa eligendi minima deleniti dolor? Explicabo fuga consectetur saepe, voluptas dolor corrupti, laudantium necessitatibus molestias illo, expedita sed delectus hic possimus numquam. Quasi, quis illo.</p>
               </div>
            </div>


         </div>
      </div>
   </div>
   );
}

export default ProductDetail;