import './main.css'
import Header from '../../components/header/header';
import ListCam from '../../components/listCam/ListCam'
function Main() {
  return (
    <>
      <Header />

      <div className='mainContainer'>
        <div className='twoDivsAside'>
          <aside className='collumProjects'>
            <ListCam />
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
