import Header from './Header'
import Photos from './Photos'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadPhotos } from '../redux/actions'
import Footer from './Footer'
import Modal from './Modal'
import { Route } from 'react-router-dom'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotos())
  })

  const [modalActive, setModalActive] = useState(false)

  return (
    <div>
      <Header />
      <Photos active={modalActive} setActive={setModalActive} />
      <Footer />
      <Route path="/:id?">
        <Modal active={modalActive} setActive={setModalActive}/>
      </Route>
    </div>
  );
}

export default App;
