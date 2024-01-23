import React from 'react';

const MainContent = () => {
  const data = [
    {
      title: "Hello, Sundar!",
      description: "Welcome to our",
      description2: "Compliance Co-Pilot AI Platform",
      description3: "The best solution for your enterprise",
    },
  ];

  return (
    <div className="main-content">
      <div className="main-top">
        {data.map((getData) => (
          <>
            <h1 style={{ color: 'orange' }}>{getData.title}</h1>
            <h3>{getData.description}</h3>
            <h3 style={{ color: 'orange' }}>{getData.description2}</h3>
            <h3>{getData.description3}</h3>
          </>
        ))}
       
      </div>
      <div className="main-middle">
        <div style={{ display: "flex" }} className="images">
           {/* <img src='../../public/Images/Left.png' alt=''  style={{width:'300px', height:'300px'}}/>
                <img src='../../public/Images/Head.png' alt='' style={{width:'300px', height:'300px'}}/> */}
                <img src='Left.png' alt='' className='side-style'/>
                <img src='Head.png' alt='' className='head-style'/>
                <img src='Right.png' alt='' className='side-style'/>
        </div>
      </div>

      <div className="main-bottom" style={{ textAlign: 'right', paddingRight: '20px' }}>
        <img src='p-img.png' alt='' style={{width:'200px', height:'80px', textAlign:'left', marginRight:'350px' }}/>
        <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" style={{ width: '600px' }} />
      </div>
    </div>
  );
};

export default MainContent;
