import React from 'react'

function Landing() {
  return (
    <div id="landing">
      <section className="bg-[#27273F]">
        <div className="items-center justify-center">
          <div className="items-center justify-center relative">
            <img className="w-full h-100vh" alt="Poster1" src={require('../assets/images/eva_main.png')} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;