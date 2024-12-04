import './Header.css'
function App() {
  return (
    <>
     <header>
        <div className="headerContainerItens">
            <div className="containerInputSearch">
                <input type="text" />
            </div>
            <div className='logoName'>
                <span className='inter-700'>How-be</span>
            </div>
            <div className="profileContaienr">
                <div className="profileIcon"></div>
                <span className="profileName inter-700">Pedro Ivan</span>
            </div>
        </div>
     </header>
    </>
  )
}

export default App
