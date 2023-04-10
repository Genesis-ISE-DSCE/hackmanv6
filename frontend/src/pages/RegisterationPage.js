import React, {useState} from 'react'
import Registeration from '../components/Registeration';
import Registeration2 from '../components/Registeration2';
import Navbar from '../components/Navbar';

function RegisterationPage() {
  const [page, setPage] = useState(0);


  const ButtonDisplay = () => {
    if (page === 0){
      return (
        <div className="lg:mx-96 md:mx-48 mx-8">
          <div className="flex justify-center">
            <button onClick={() => {setPage((curPage) => curPage+1);}} className="lg:text-xl shadow bg-[#22C3FF] hover:bg-[#ae40fe] hover:text-white focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded text-sm" type="button">
              Next
            </button>
          </div>
        </div>
      );
    }
    if (page === 1 ){
      return (
        <div className="lg:mx-96 md:mx-48 mx-8 pb-36">
          <div className="">
            <div className="flex justify-center float-left">
              <button onClick={() => {setPage((curPage) => curPage-1);}} className="lg:text-xl shadow bg-[#22C3FF] hover:bg-[#ae40fe] hover:text-white focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded text-sm" type="button">
                Back
              </button>              
            </div>
          </div>
                  
          <div className="">
            <div className="flex justify-center float-right">
              <button className="lg:text-xl shadow bg-[#22C3FF] hover:bg-[#ae40fe] hover:text-white focus:shadow-outline focus:outline-none text-black font-bold py-2 px-2 rounded text-sm" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      )
    }
  }

  const PageDisplay = () => {
    if (page === 0){
      return (
        <Registeration />
      );
    }
    else {
      return (
      <Registeration2 />
      );
    }
  }

    return (
      <div>
        <Navbar />
        {PageDisplay(page)}
        <div className='bg-[#24263B] lg:pb-80 md:pb-16 pb-56'>{ButtonDisplay(page)}</div>
      </div>
    )
  }
  
export default RegisterationPage;