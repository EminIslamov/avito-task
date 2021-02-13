import React from 'react'
import { useSelector } from 'react-redux'

function Comments (props) {
  const comment = useSelector(state => state.bigImageReducer.items.comments)
  
  return (
    <div>
      {comment === undefined ? '' : (
        <div>
          {comment[0] === undefined ? '' : (
            <div>
              <div className="data">
                18.12.2019
              </div>
              <div>
                {comment[0].text}
              </div>
              <div>
                {props.comm === undefined? '' : (
                    <div>
                      {props.comm[0] === undefined? '' : (
                        <div>
                          {props.comm[0].text}
                        </div>
                      )}
                    </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Comments