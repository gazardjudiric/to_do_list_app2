import React from 'react';
import ModalAddTask from './actions/ModalAddTask';
import { toast } from 'react-toastify';

function Entete({setModalVisible,setModalContent,tacheManager, filterStatus, setFilterStatus}) {


    function showAddModal(){
        setModalVisible(true)
        setModalContent(<ModalAddTask  toast={toast} 
            setModalVisible={setModalVisible}
             tacheManager={tacheManager} />)
    }

    const updateFilter = (ello) => {
        console.log(filterStatus);
        console.log(setFilterStatus(ello));
    }

    return (
        <div>
            <h2>hello from header</h2>
            <div className='enteteBtn'>
                <button className='enteteBtn1' onClick={showAddModal}>Ajouter une tache</button>
                <select className='enteteSelect' value={filterStatus} onClick={ () => updateFilter()}>
                    <option value="tous">Tous</option>
                    <option value="accomplir">Accomplir</option>
                    <option value="pasAccomplir">Pas encore Accomplir  </option>
                </select>
            </div>
        </div>
    );
}

export default Entete;