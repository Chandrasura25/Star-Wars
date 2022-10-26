import React from 'react'
import Spinner from './Spinner';
import Loader from './Loader';

const Marquee = ({ crawl, loader, error }) => {
  return (
    <>
      {
        error?  <div className="errorM"><Loader err={error} /> </div>:
         loader ?
          <div className="err"><Spinner /></div>
          :
          <section className='marqSet'>
            <marquee>{crawl}</marquee>
          </section>
      }
    </>
  )
}

export default Marquee