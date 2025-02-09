import React from 'react'

const Advert = () => {
  return (
    <div>
      <section className="app-containerMenu" style={{ paddingTop: "8em", paddingLeft: "2em", }}>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8" >
              <div className="row" >
                <div className="col-md-1"></div>
                <div className="col-md-8" style={{ background: "", }}>
                  <div className='text-white text-center'>
                    <p className='lead'>Place Adverts here!</p>
                    <i>No current ads . . .</i>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Advert
