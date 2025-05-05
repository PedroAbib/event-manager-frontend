import EntityDetails from "../components/EntityDetails";
import CustomButton from "../components/buttons/CustomButton";
import { useRequests } from "../hooks/useRequests";

interface ProfileProps<T extends { id: string | number }> {
    entityData: T;
    closeModalAfterDelete: () => void;
    apiUrl: string;
}

const Profile = <T extends { id: string | number }>({ entityData, closeModalAfterDelete, apiUrl }: ProfileProps<T>) => {

    const { deleteData } = useRequests<T>();

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this record?')) {
            deleteData(apiUrl, String(entityData.id));
            closeModalAfterDelete();
        }
    }

    return(
        <div>
            <CustomButton
                label='Delete'
                onClick={(handleDelete)}
                color='#ed1e07'
            />

            <EntityDetails entityData={entityData} apiUrl={apiUrl}/>
        </div>
    )
}

export default Profile;