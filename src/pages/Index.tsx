import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Users, 
  Download, 
  Code, 
  Database, 
  Globe, 
  ArrowRight,
  CheckCircle,
  PlayCircle,
  Star
} from "lucide-react";

const Index = () => {
  const featuredCourses = [
    {
      title: "Python para Principiantes",
      description: "Aprende Python desde cero con ejercicios prácticos",
      level: "Principiante",
      duration: "6 semanas",
      students: "1,234",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop&crop=smart"
    },
    {
      title: "Desarrollo Web Completo",
      description: "HTML, CSS y JavaScript para crear sitios modernos",
      level: "Principiante",
      duration: "10 semanas",
      students: "2,156",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop&crop=smart"
    },
    {
      title: "Bases de Datos con SQL",
      description: "Diseña y gestiona bases de datos eficientemente",
      level: "Intermedio",
      duration: "5 semanas",
      students: "567",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop&crop=smart"
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Contenido Estructurado",
      description: "Cursos organizados de forma lógica y progresiva"
    },
    {
      icon: Users,
      title: "Experiencia Universitaria",
      description: "Más de 10 años enseñando en universidades"
    },
    {
      icon: Download,
      title: "Recursos Descargables",
      description: "Guías, ejercicios y plantillas gratuitas"
    },
    {
      icon: CheckCircle,
      title: "100% Gratuito",
      description: "Todo nuestro contenido es completamente gratis"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Estudiante de Ingeniería",
      comment: "Los cursos del profesor Academy me ayudaron a entender conceptos que no lograba captar en clase. ¡Excelente metodología!",
      rating: 5
    },
    {
      name: "Carlos Méndez",
      role: "Desarrollador Junior",
      comment: "Gracias a estos recursos conseguí mi primer trabajo como programador. El material es muy claro y práctico.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      role: "Estudiante Autodidacta",
      comment: "Perfect para quienes empezamos desde cero. Los ejercicios son muy útiles para practicar.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <HeroSection />

      {/*Sección de Beneficios*/}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            ¿Por qué elegir Academy's Coder Corner?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*Cursos destacados*/}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Cursos Destacados
            </h2>
            <p className="text-xl text-muted-foreground">
              Comienza tu journey de programación con nuestros cursos más populares
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{course.level}</Badge>
                    <div className="flex items-center space-x-1 text-warning">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{course.duration}</span>
                    <span>{course.students} estudiantes</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Ver Curso
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/cursos">
              <Button variant="hero" size="lg">
                Ver Todos los Cursos
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Lo que dicen nuestros estudiantes
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-warning fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*Llamada a la acción*/}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-hero-gradient text-primary-foreground p-12 rounded-2xl shadow-glow">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para comenzar tu journey en programación?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a miles de estudiantes que ya están aprendiendo con nosotros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cursos">
                <Button variant="secondary" size="lg">
                  Comenzar Ahora
                </Button>
              </Link>
              <Link to="/recursos">
                <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Descargar Recursos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
