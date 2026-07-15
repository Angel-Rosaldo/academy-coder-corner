import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Target, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Nosotros = () => {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen">
       {/* Seccion Hero */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Conoce al Profesor Academy
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-slide-up">
            Docente universitario apasionado por enseñar programación de manera accesible y práctica
          </p>
        </div>
      </section>

      {/*Sección de la historia*/}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Mi Historia
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Con más de 10 años de experiencia como docente universitario en programación, 
                  he tenido el privilegio de guiar a cientos de estudiantes en su primer 
                  contacto con el mundo del desarrollo de software.
                </p>
                <p>
                  Durante este tiempo, he acumulado una gran cantidad de material didáctico, 
                  ejercicios prácticos y metodologías de enseñanza que han demostrado ser 
                  efectivas para estudiantes de todos los niveles.
                </p>
                <p>
                  La idea de crear Academy's Coder Corner nació de la necesidad de hacer 
                  este conocimiento accesible a una audiencia más amplia, especialmente 
                  a aquellos estudiantes autodidactas que buscan una base sólida en programación.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <Card className="p-8 bg-card-gradient shadow-card">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Experiencia Académica</h3>
                  <p className="text-muted-foreground mb-4">
                    Más de 10 años enseñando programación en universidades
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">SQL</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/*Misión y Valores*/}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Nuestra Misión y Valores
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Nuestra Misión</h3>
              <p className="text-muted-foreground">
                Democratizar la educación en programación, proporcionando contenido 
                de calidad que sea accesible para todos, especialmente para estudiantes 
                autodidactas que inician su camino en la tecnología.
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comunidad</h3>
              <p className="text-muted-foreground">
                Creemos en el poder del aprendizaje colaborativo. Fomentamos una 
                comunidad donde estudiantes y profesionales pueden compartir 
                conocimientos y apoyarse mutuamente.
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pasión</h3>
              <p className="text-muted-foreground">
                La enseñanza es nuestra pasión. Cada recurso, ejercicio y curso 
                está diseñado con dedicación para brindar la mejor experiencia 
                de aprendizaje posible.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Nuestra Filosofía de Enseñanza
          </h2>
          <div className="bg-card p-8 rounded-lg shadow-card">
            <blockquote className="text-lg text-muted-foreground italic mb-6">
              "Creemos que la programación debe enseñarse de manera práctica, 
              con ejemplos reales y proyectos que motiven al estudiante. 
              No se trata solo de memorizar sintaxis, sino de desarrollar 
              el pensamiento lógico y la capacidad de resolver problemas."
            </blockquote>
            <cite className="text-primary font-semibold">- Profesor Academy</cite>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Nosotros;