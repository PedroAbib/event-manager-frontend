import React from "react";
import EntityDetails from "../components/EntityDetails";
import CustomButton from "../components/buttons/CustomButton";
import { useRegistrants } from "../hooks/useRegistrants";

interface ProfileProps {
    entityData: { [key: string]: any };
}

const Profile: React.FC<ProfileProps> = ({ entityData }) => {
    const { deleteRegistrant } = useRegistrants();

    const handleDelete = () => {
        if (window.confirm('Tem certeza que deseja deletar este registro?')) {
            deleteRegistrant(entityData.id);
        }
    }

    return(
        <div>
            <CustomButton
                label='Delete'
                onClick={(handleDelete)}
                color='#ed1e07'
            />

            <EntityDetails entityData={entityData}/>
        </div>
    )
}

export default Profile;