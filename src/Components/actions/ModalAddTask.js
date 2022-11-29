import React from 'react';
import { useState } from 'react';


function ModalAddTask({toast,setModalVisible,tacheManager}) {
    const [tache, setTache] = useState("");
    const [statut, setStatut] = useState(false);

    const soumission = () => {
        setModalVisible(false)
        if(tache) {
            console.log("super")
            toast.success('Tache bien ajouter');
            // const copie = [...taches]
            // copie.push({id: taches.length + 1, message: tache, etat: statut})
            // setTaches(copie)
            tacheManager.setTaches([...tacheManager.taches, {id: tacheManager.taches.length + 1,
                 message: tache, etat: statut}])
            setTache("")
            setStatut("")

            
        } else {
            console.log("err")
            toast.error('Le champ doit etre remplir');
            setStatut("")
        }
    }

    return (
        <div>
                        <h1>On ajoute la tache</h1>
                        <label htmlFor="titre">
                            Titre 
                            <input type="text" id='titre' value={tache} onChange={(e) => setTache(e.target.value)} />
                        </label>
                        
                        <label htmlFor="etat">
                            Etat
                            <select name="statut" id="etat" value={statut} onChange={ (e) => setStatut(e.target.value)}>
                                <option value= {false}>Pas encore Accomplir</option>
                                <option value={true}>Accomplir</option>
                            </select>
                        </label>
                        <div className='modalBtn'>
                            <button className='modalBtn1' onClick={soumission}>Ajouter une tache</button>
                            <button className='modalBtn2'onClick={ () => setModalVisible(false)}>Abandoner</button>
                        </div>
                    </div> 
    );
}

export default ModalAddTask;