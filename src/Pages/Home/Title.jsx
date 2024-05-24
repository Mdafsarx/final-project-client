const Title = ({subTitle,mainTitle}) => {
    return (
        <div className="flex flex-col items-center py-6">
            <p className="text-[#D99904] pb-1.5">---{subTitle}---</p>
            <h1 className="uppercase border-y-2 py-4 text-3xl font-bold px-4">{mainTitle}</h1>
        </div>
    );
};

export default Title;