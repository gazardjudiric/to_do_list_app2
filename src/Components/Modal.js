import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'

function Modal({modalVisible, setModalVisible, modalContent}) {
   
    return (
        modalVisible ? ( 

            <div className='modal'>
                <FontAwesomeIcon className='xmark' icon={faXmark} onClick={ () => setModalVisible(false)} onKeyDown={ () => setModalVisible(false)}/> 
                <div className='modalContenue'>
                    {
                        modalContent
                    }
                </div> 
            </div>
        ) : ''

    );
}

export default Modal;