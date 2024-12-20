import logo2 from '../assets/logo2.png'
const Footer = () => {
    return (
        <footer className="bg-footer text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                <div>
                    <img src={logo2} alt="logo" />
                </div>

                </div>

                {/* Línea Divisoria */}
                <hr className="border-t border-stationOrange my-4" />

                {/* Texto de Derechos Reservados */}
                <div className="text-center text-sm">
                    <p>
                        Derechos reservados © Círculo Fitness S. de R.L. de C.V. 2024
                    </p>
                    <p className="mt-2">
                        <a href="#" className="hover:text-stationOrange">
                            Aviso de privacidad
                        </a>{' '}
                        |{' '}
                        <a href="#" className="hover:text-stationOrange">
                            Términos y condiciones
                        </a>{' '}
                        |{' '}
                        <a href="#" className="hover:text-stationOrange">
                            Reglamento interno
                        </a>{' '}
                        |{' '}
                        <a href="#" className="hover:text-stationOrange">
                            Preguntas frecuentes
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
