import { useEffect, useState } from "react";

const useMenu = () => {

    const [menu, setMenu] = useState([]);
    const [reload,setReload]=useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
            })
    }, [reload])



    return [menu,setReload,reload]
};

export default useMenu;