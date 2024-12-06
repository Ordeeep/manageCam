import './main.css'
import { useState } from 'react';

import Header from '../../components/header/header';
import ListCam from '../../components/listCam/ListCam'
import ModalAddCam from '../../components/modalAddCam/modalAddCam'

import editIcon from '../../images/adicionar.png';
import addIcon from '../../images/edit.png';

function Main() {

  /* Função abrir modal para adicionar câmera */
  const [openModalAddCam, setOpenModalAddCam] = useState(false)


  return (
    <>
      <Header />

      <div className='mainContainer'>
        <div className='twoDivsAside'>
          <aside className='collumProjects'>
            {/* Coluna de projetos na esquerda */}
            <div className='listCamTop'>
              <div className='hero'>
                <span className='inter-400'>Listagem de projetos:</span>
                <div className='buttonsContainer'>
                  <div onClick={() => { setOpenModalAddCam(true) }}><img src={editIcon} alt="" width='20px' /></div>
                  <div ><img src={addIcon} alt="" width='20px' /></div>
                </div>
              </div>
              <hr />
            </div>
            {/* Listagem de câmeras/projetos */}
            <ListCam />

            <ModalAddCam isOpen={openModalAddCam} setCloseModal={() => setOpenModalAddCam(!openModalAddCam)} />
          </aside>

          <section className='plantaContaienr'>

          </section>
        </div>

        <div className='logsContainer'>

        </div>
      </div>


    </>
  )
}

export default Main
