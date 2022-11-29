import React, {useState} from 'react';
import './App.css';
import AppContenues from './Components/AppContenues';
import AppEntete from './Components/AppEntete';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Components/Modal';

function App() {
  // const initialeState = JSON.parse(localStorage.getItem("taches")) || [];
  const [taches, setTaches] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const [filterStatus, setFilterStatus] = useState("pasAccomplir")

  return (
    <>
      <div className="App">
        <Modal modalVisible ={modalVisible} setModalVisible={setModalVisible}
        modalContent={modalContent}
        />
        <div className='App1'>  
          <h1 className="title">TODO LIST</h1>
          <div>
            <AppEntete  modalVisible ={modalVisible} setModalVisible={setModalVisible}
            setModalContent={setModalContent} tacheManager={{taches, setTaches}} filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
            <AppContenues taches={taches} setTaches={setTaches}
            setModalVisible={setModalVisible} 
            setModalContent={setModalContent}
            tacheManager={{taches, setTaches}}
            
            />
          </div>
        </div>
      </div>
      <ToastContainer className='toaster'/>
    </>
    
  );
}

export default App;
