import React, { useState, useEffect } from 'react';
import './modalAddCam.css';
import adicionar from '../../images/adicionar.png';

export default function Modal({ isOpen, setCloseModal }) {
    const [list, setList] = useState([]);

    const [backgroundImage, setBackgroundImage] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setBackgroundImage(imageUrl);
        }
    };
    useEffect(() => {
        if (!isOpen) {
            setList([]);
            setBackgroundImage(null);
        }
    }, [isOpen]);

    const addCamInList = () => {
        const camName = window.prompt('Digite o nome da cam');
        const camIp = window.prompt('Digite o IP');
        const camUsername = window.prompt('Digite o username');
        const camPassword = window.prompt('Digite o password');

        const camObj = {
            camName: camName,
            camIp: camIp,
            camUsername: camUsername,
            camPassword: camPassword
        };

        setList([...list, `CAM ${list.length + 1} - ${camName}`]);
        console.log(camObj);
    };

    if (isOpen) {
        return (
            <div className='containerForModal'>
                <div className='contentModal'>
                    <div className='modalListCamsContainer'>
                        <div>
                            <span className='inter-400'>Digite o nome do projeto...</span>
                        </div>
                        <hr />
                        <div className='containerAddCam'>
                            <span className='inter-400'>Adicionar câmera: </span>
                            <img src={adicionar} alt="" onClick={addCamInList} />
                        </div>
                        <div className='containerForListCams'>
                            <ul className='inter-400'>
                                {list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='modalPlantContainer'>
                        <div className='top'>
                            <div
                                className="image-background"
                                style={{ backgroundImage: `url(${backgroundImage})` }}
                            >
                            </div>
                        </div>

                        <div className='bottom'>
                            <input
                                type="file"
                                id="file"
                                onChange={handleFileChange}
                                className="file-input"
                            />
                            <label htmlFor="file" className="file-label inter-500">
                                Escolha a foto
                            </label>
                            <button className='inputsModal confirm inter-500'>Confirmar</button>
                            <button className='inputsModal cancel inter-500' onClick={setCloseModal}>Cancelar</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    return null;
}
