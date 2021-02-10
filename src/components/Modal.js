import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadPic } from '../redux/actions'
import { formatTime } from 'redux-logger/src/helpers'



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


  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}>
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={e => e.stopPropagation()}>
        {loading ? <div>Идет загрузка</div> : (
          <div>
            <div className="pict">
              <img src={pic.url} alt=""/>
            </div>
            <div className="pic-form">
              <form>
                <input type="text" placeholder="Ваше имя" className="name"/>
                <div>
                  <input type="text" placeholder="Ваша комментарий" className="comment"/>
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