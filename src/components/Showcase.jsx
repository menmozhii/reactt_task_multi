import React from 'react'

function Showcase({data1}) {
  return<>
  <div className="row g-0">
    
                  <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: `url('${data1.showimage}')`}}></div>
                 
                  <div className="col-lg-6 order-lg-1  my-auto showcase-text">
                 

                        <h2>{data1.title}</h2>
                        <p className="lead mb-0">{data1.des}</p>
                </div>
                </div>
  </>
}

export default Showcase