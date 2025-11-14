const Header = ({ title, subtitle }) => {
    return (
        <header className="bg-green-700 text-white shadow-lg p-6 mb-6">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-1 ">
                     {title}
                </h1>
                <p className="text-xl font-light opacity-90">
                    {subtitle}
                </p>
            </div>
        </header>
    );
};

export default Header;