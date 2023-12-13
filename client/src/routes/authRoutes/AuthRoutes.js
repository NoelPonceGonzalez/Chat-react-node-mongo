import { useNavigate } from "react-router-dom";

const useHandleNavigation = () => {
    const navigate = useNavigate();

    const handleNavigation = (pageName) => {
        navigate(`/${pageName}`);
        console.log(`going to page ${pageName}`);
    };

    return handleNavigation;
};

export default useHandleNavigation;
