import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadPic } from '../redux/actions'
import Comments from './Comments'



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

  const [text, setText] = useState(null)

  const handleSetText = (e) => {
    setText(e.target.value)
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
                <Comments  />
              </div>
            </div>
            <div className="pic-form">
              <form>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="name"
                  value={text}
                  onChange={handleSetText}
                />
                <div>
                  <input type="text" placeholder="Ваша комментарий" className="your-comment"/>
                </div>
              </form>
              <div>
                <button className="btn">
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