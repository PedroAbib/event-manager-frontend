import React from "react";
import '../styles/EntityDetails.css';
import { TbEdit } from "react-icons/tb";

interface EntityDetailsProps {
    entityData: {
        [key: string]: string | number | boolean | null;
    };
}

const EntityDetails: React.FC<EntityDetailsProps> = ({ entityData }) => {

    return(
        <div>
            <ul className='entity-ul'>
                {Object.entries(entityData)
                    .filter(([key]) => key.toLowerCase() !== "id")
                    .map(([key, value]) => (
                        <li className='entity-data-container' key={key}>
                            <div className='entity-labels'>
                                <span className='entity-data-key'>{key}</span>
                                <span className='entity-data-value'>{value?.toString()}</span>
                            </div>
                            <button className="entity-edit-button"><TbEdit size={24}/></button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default EntityDetails;