import React from 'react'

function Test({data2}) {
  return <>
  <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3"  src= {data2.image}  alt="..." />
                            <h5>{data2.title}</h5>
                            <p className="font-weight-light mb-0">{data2.des}</p>
                        </div>
                    </div>
  </>
}

export default Test