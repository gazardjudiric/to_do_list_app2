import React from 'react';
import { useState } from 'react';



function UpdateTask({ setModalVisible, el, tacheManager}) {

    const [tacheMessage, setTacheMessage] = useState(el.message);   
    const [statut, setStatut] = useState(false);

    const update = (tacheUpdate) => {
        const copie = [...tacheManager.taches]
        // console.log(tacheManager.taches.findIndex( (tach) => tach.id === tacheUpdate.id));
        let ind = copie.findIndex( (tache) => tache.id === tacheUpdate.id)
        copie[ind].message = tacheMessage
        tacheManager.setTaches(copie)
        setModalVisible(false)
    }
    return (
        <div>
            <h1>On ajoute la tache</h1>
            <label htmlFor="titre">
                Titre 
                <input type="text" id='titre' value={tacheMessage} onChange={(e) => setTacheMessage(e.target.value)} />
            </label>
            
            <label htmlFor="etat">
                Etat
                <select name="statut" id="etat" value={statut} onChange={ (e) => setStatut(e.target.value)}>
                    <option value= {false}>Pas encore Accomplir</option>
                    <option value={true}>Accomplir</option>
                </select>
            </label>
            <div className='modalBtn'>
                <button className='modalBtn1' onClick={ () => update(el)}>Modifier</button>
                <button className='modalBtn2'onClick={ () => setModalVisible(false)}>Abandoner</button>
            </div>
        </div> 
    );
}

export default UpdateTask;