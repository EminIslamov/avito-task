import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadPic } from '../redux/actions'




function Modal ({active, setActive}) {
  const dispatch = useDispatch();
  const params = useParams().id;
  const loading = useSelector(state => state.bigImageReducer.loading)
  const pic = useSelector(state => state.bigImageReducer.items)


  useEffect(() => {
    if (params !== undefined) {
      dispatch(loadPic(params))
    }
  }, [params])

  const [text, setText] = useState('')

  const handleSetText = (e) => {
    setText(e.target.value)
  }

  const [name, setName] = useState('')

  const handleSetName = (e) => {
    setName(e.target.value)
  }


  const comment = useSelector(state => state.bigImageReducer.items.comments)

  const [comms, setComms] = useState(comment)

  const handleAddComm = () => {
    if (comms !== undefined) {
      setComms([...comms, {text:text}])
    }

  }

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}>
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={e => e.stopPropagation()}>
        {loading ? <div>Идет загрузка</div> : (
          <div>
            <div className="pic-and-comment">
              <div className="pict">
                <img src={pic.url} alt=""/>
              </div>
              <div className="comment">
                <div>
                  {comment === undefined ? '' : (
                    <div>
                      {comment.map(comm => {
                        return comm.text
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="pic-form">
              <form>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="name"
                  value={name}
                  onChange={handleSetName}
                />
                <div>
                  <input
                    type="text"
                    placeholder="Ваш комментарий"
                    className="your-comment"
                    value={text}
                    onChange={handleSetText}
                  />
                </div>
              </form>
              <div>
                <button className="btn"
                onClick={handleAddComm}
                >
                  Оставить комментарий
                </button>
              </div>
            </div>
          </div>)}
      </div>
      <div>
      </div>
    </div>
  )
}

export default Modal