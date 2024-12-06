import React, { useState } from 'react';
import './ListCam.css';
import viewIcon from '../../images/view.png';
import deleteIcon from '../../images/delete.png';


const data = [
  {
    id: 1,
    projectName: 'Usina Green',
    edit: true,
    disable: false,
    totalCams: 5,
    cams: [
      { camId: 12, camName: 'CAM 01 - PORTAO', x: 50, y: 50 },
      { camId: 13, camName: 'CAM 02 - ENTRADA', x: 60, y: 55 },
      { camId: 14, camName: 'CAM 03 - SAIDA', x: 70, y: 60 },
      { camId: 15, camName: 'CAM 04 - CORREDOR', x: 80, y: 65 },
      { camId: 16, camName: 'CAM 05 - ESTACIONAMENTO', x: 90, y: 70 }
    ]
  },
  {
    id: 2,
    projectName: 'Usina Blue',
    edit: true,
    disable: false,
    totalCams: 4,
    cams: [
      { camId: 17, camName: 'CAM 01 - ENTRADA PRINCIPAL', x: 20, y: 20 },
      { camId: 18, camName: 'CAM 02 - LATERAL', x: 30, y: 30 },
      { camId: 19, camName: 'CAM 03 - BARRA', x: 40, y: 40 },
      { camId: 20, camName: 'CAM 04 - ARQUIVO', x: 50, y: 50 }
    ]
  },
  {
    id: 3,
    projectName: 'Usina Red',
    edit: true,
    disable: false,
    totalCams: 3,
    cams: [
      { camId: 21, camName: 'CAM 01 - GARAGEM', x: 100, y: 100 },
      { camId: 22, camName: 'CAM 02 - JARDIM', x: 110, y: 110 },
      { camId: 23, camName: 'CAM 03 - PISCINA', x: 120, y: 120 }
    ]
  },
  {
    id: 4,
    projectName: 'Usina Yellow',
    edit: true,
    disable: false,
    totalCams: 6,
    cams: [
      { camId: 24, camName: 'CAM 01 - FRENTE', x: 130, y: 130 },
      { camId: 25, camName: 'CAM 02 - LATERAL DIREITA', x: 140, y: 140 },
      { camId: 26, camName: 'CAM 03 - LATERAL ESQUERDA', x: 150, y: 150 },
      { camId: 27, camName: 'CAM 04 - QUARTO', x: 160, y: 160 },
      { camId: 28, camName: 'CAM 05 - COZINHA', x: 170, y: 170 },
      { camId: 29, camName: 'CAM 06 - BANHEIRO', x: 180, y: 180 }
    ]
  }
];

const ListCam = () => {
  const [visibleProjectId, setVisibleProjectId] = useState(null);

  // Função para alternar a visibilidade do projeto
  const toggleVisibility = (projectId) => {
    if (visibleProjectId === projectId) {
      setVisibleProjectId(null); // Se o projeto já estiver visível, escondemos
    } else {
      setVisibleProjectId(projectId); // Caso contrário, mostramos
    }
  }

  return (
    <>
      
      <ul className='inter-400 listForAllProjects'>
        {data.map((allProjectInData) => (
          <li className='liProjectName' key={allProjectInData.id}>
            <div
              className='projectNameContainer'
              onClick={() => toggleVisibility(allProjectInData.id)} // Adicionando evento de clique
            >
              <span className='spanProjectName'>{allProjectInData.projectName}:</span>
            </div>
            {/* Renderiza a lista de câmeras somente se o projeto estiver visível */}
            {visibleProjectId === allProjectInData.id && (
              <ul className='inter-300 ulForCams'>
                {allProjectInData.cams.map((cam) => (
                  <li className='liCamName' key={cam.camId}>
                    <span className='spanCamName'>{cam.camName}</span>
                    <div className='iconCamContainer'>
                      <div className='editCam'><img src={viewIcon} alt="" width='20px' /></div>
                      <div className='deleteCam'><img src={deleteIcon} alt="" width='20px' /></div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListCam;
