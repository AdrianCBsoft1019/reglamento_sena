const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-green-800 text-white mt-10 p-4 border-t border-blue-600">
            <div className="container mx-auto text-center text-sm">
                <p>&copy; {currentYear} Reglamento SENA.</p>
                <div className="mt-2 space-x-4">
                    <a 
                        href="https://www.sena.edu.co/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-100 transition duration-150"
                    >
                        SENA Sofia Plus
                    </a>
                
                </div>
            </div>
        </footer>
    );
};

export default Footer;