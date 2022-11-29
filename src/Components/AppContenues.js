// import React, { useEffect } from "react";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleCheck, faPen, faTrashCan} from "@fortawesome/free-solid-svg-icons"
import UpdateTask from "./actions/UpdateTask";



function AppContenues({setModalVisible,setModalContent, tacheManager}) {


    const supprimer = (id) => {
        console.log("je supprime lol");
        let tachesNouvelle = tacheManager.taches.filter( (tache) => tache.id !== id)
        tacheManager.setTaches(tachesNouvelle)
    }

    const accomplire = (id) => {
        console.log('ello');
        let accomplissement = tacheManager.taches.map( (tache) => {
            if ( tache.id === id) {
                return({...tache, etat: !tache.etat })
            }
            return tache;
        })
        tacheManager.setTaches(accomplissement)
    }

    const tacheModifier = (el) => {
        setModalVisible(true)
        setModalContent(<UpdateTask el={el} tacheManager={tacheManager} setModalVisible={setModalVisible} />)
    }
    return (
        <>
            {  
            tacheManager.taches.map( (tache, index) => {
                return(
                    <div key={tache.id} className="listeTacheCard">

                        <div className={tache.etat? "accomplir" : ""}>
                            <span className="listeTacheNumero">{index + 1}</span>
                            <span className="listeTacheTexte" >{tache.message}</span>
                        </div>

                        <div className="listeTacheIcons">

                            <span title="Delete" onClick={ () => supprimer(tache.id)} onKeyDown={ () => supprimer(tache.id)}> 
                                <FontAwesomeIcon icon={faTrashCan}/>
                            </span>
                            
                            {tache.etat ? null : 
                            <span title="Edit" onClick={ () => tacheModifier(tache)} >
                            <FontAwesomeIcon icon={faPen}/>
                            </span>
                             }
                            

                            <span title="accomplir / pasAccomplir" onClick={ () => accomplire(tache.id) }>
                                <FontAwesomeIcon icon={faCircleCheck}/>
                            </span>
                        </div>
                    </div>
                )
            })
            }
        </> 
    );
}

export default AppContenues;