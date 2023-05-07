import React from 'react';

function Landing() {
    return (
        <div id="landing" className="h-screen">
            <section className="bg-[#27273F] h-screen">
                <div className="items-center justify-center h-screen">
                    <div className="items-center justify-center relative h-screen">
                        <img className="w-full h-full object-cover object-top" alt="Poster1" src={require('../assets/images/eva_main.jpg')} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Landing;