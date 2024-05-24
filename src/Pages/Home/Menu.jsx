const Menu = ({data}) => {
    const {name,recipe,image,price}=data||{}
    return (
        <div className="flex gap-3 ">
            <img src={image} alt="" className="w-28" style={{borderRadius:"0 200px 200px 200px"}} />
            <div>
                <p className="text-2xl">{name} ------------------</p>
                <p>{recipe}</p>
            </div>
            <p>${price}</p>
        </div>
    );
};

export default Menu;