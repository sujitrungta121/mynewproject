import CallForm from "../common/callForm";



export default function Main(){

    const handleModalOpen = () => {
        // Handle modal opening logic here
    };

    const handleLoginOpen = () => {
        // Handle login opening logic here
    };

    const handleSignUpOpen = () => {
        // Handle sign up opening logic here
    };
    return (
        <main>
            <CallForm setModalOpen={ handleModalOpen}  heading="" setOpenLogin={ handleLoginOpen} setOpenSignUp={ handleSignUpOpen}  fieldsToShow={[]}/>
        </main>
    )
}