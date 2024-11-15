import React from "react";
import EntityDetails from "../components/EntityDetails";

interface ProfileProps {
    entityData: { [key: string]: any };
}

const Profile: React.FC<ProfileProps> = ({ entityData }) => {

    return(
        <div>
            <EntityDetails entityData={entityData}/>
        </div>
    )
}

export default Profile;