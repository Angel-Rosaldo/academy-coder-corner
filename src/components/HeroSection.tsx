import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  const stats = [
    { number: "500+", label: "Estudiantes activos" },
    { number: "15+", label: "Cursos gratuitos" },
    { number: "4.9", label: "Valoración promedio" },
    { number: "100%", label: "Contenido gratuito" }
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Educational environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*Columna izquierda - Contenido del texto*/}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Aprende a{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Programar
              </span>{" "}
              desde Cero
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Con el Profesor Academy y sus más de 10 años de experiencia universitaria. 
              Contenido claro, bien explicado y completamente gratuito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/cursos">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Explorar Cursos
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/recursos">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Recursos Gratuitos
                </Button>
              </Link>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Tarjetas de características */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cursos Estructurados</h3>
                  <p className="text-muted-foreground">
                    Desde conceptos básicos hasta proyectos avanzados, 
                    todo organizado de manera lógica y progresiva.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Experiencia Universitaria</h3>
                  <p className="text-muted-foreground">
                    Más de 10 años enseñando programación en universidades, 
                    ahora disponible para todos.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Calidad Garantizada</h3>
                  <p className="text-muted-foreground">
                    Material probado en aulas universitarias con 
                    cientos de estudiantes exitosos.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;