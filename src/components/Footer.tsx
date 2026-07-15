import { Link } from "react-router-dom";
import { Code, Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Marca */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-primary font-bold text-xl mb-4">
              <Code className="h-8 w-8" />
              <span>Academy's Coder Corner</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Una plataforma educativa dedicada a enseñar programación desde cero. 
              Contenido claro, bien explicado y confiable para estudiantes autodidactas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

            {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cursos" className="text-muted-foreground hover:text-primary transition-colors">
                  Cursos Gratuitos
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="text-muted-foreground hover:text-primary transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>Academy@codercorner.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Academy's Coder Corner. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;