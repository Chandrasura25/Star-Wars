import React from 'react'
import Spinner from './Spinner';

const Marquee = ({ crawl, loader }) => {
  return (
    <>
      {
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