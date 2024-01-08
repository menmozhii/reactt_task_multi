import React from 'react'

function Icons({data}) {
  console.log()
  return <>
    
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className={data.icon}></i></div>
                            <h3>{data.title}</h3>
                            <p className="lead mb-0">{data.des}</p>
                        </div>
                    </div>
                    
  </>
}

export default Icons