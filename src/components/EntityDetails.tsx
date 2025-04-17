import React, { useRef, useState } from "react";
import '../styles/EntityDetails.css';
import { TbCheck, TbEdit } from "react-icons/tb";
import { useRequests } from "../hooks/useRequests";

interface EntityDetailsProps<T extends { id: string | number }> {
    entityData: T;
    apiUrl: string;
}

const EntityDetails = <T extends { id: string | number }>({ entityData, apiUrl }: EntityDetailsProps<T>) => {
    const [editingKey, setEditingKey] = useState<keyof T | null>(null);
    const [tempValue, setTempValue] = useState<string>('');
    const [data, setData] = useState<T>(entityData);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const shouldConfirm = useRef(false);

    const { updateData } = useRequests<T>();

    const handleEdit = (key: keyof T, value: string | number, isEditing: boolean) => {
        if(!isEditing) {
            setTempValue(value?.toString());
            setEditingKey(key);
        } else {
            const updatedEntity = { [key]: tempValue };
            updateData(apiUrl, entityData.id, updatedEntity).then(() => {
                setData((prev) => ({ ...prev, ...updatedEntity }));
            });
            setEditingKey(null);
        }
    }

    const handleBlur = () => {
        if (!shouldConfirm.current) {
            setEditingKey(null);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, key: keyof T, value: string | number) => {
        if (event.key === "Enter") {
            shouldConfirm.current = true;
            handleEdit(key, value, true);
        } else if (event.key === "Escape") {
            setEditingKey(null);
        }
    }

    return(
        <div>
            <ul className='entity-ul'>
                {Object.entries(data)
                    .filter(([key]) => key.toLowerCase() !== "id")
                    .map(([key, value]) => {
                        const isEditing = key === editingKey;

                        return (
                            <li className='entity-data-container' key={key}>
                                <div className='entity-labels'>
                                    <span className='entity-data-key'>{key}</span>

                                    {isEditing ? (
                                        <input
                                            ref={inputRef}
                                            className='entity-data-input'
                                            type="text"
                                            value={tempValue}
                                            onChange={(e) => setTempValue(e.target.value)}
                                            onBlur={handleBlur}
                                            onKeyDown={(e) => handleKeyDown(e, key as keyof T, value)}
                                            autoFocus
                                        />
                                    ) : (
                                        <span className='entity-data-value'>{value?.toString()}</span>
                                    )}
                                </div>

                                <button 
                                    className="entity-edit-button"
                                    onMouseDown={() => (shouldConfirm.current = true)}
                                    onClick={() => {
                                        shouldConfirm.current = false;
                                        handleEdit(key as keyof T, value, isEditing)}}
                                >
                                    {isEditing ? <TbCheck size={24}/> : <TbEdit size={24}/>}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default EntityDetails;