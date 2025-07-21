import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, BookOpen, Database, Globe, Code } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Cursos = () => {
  const courseCategories = [
    {
      id: "programming",
      title: "Programación",
      icon: Code,
      description: "Fundamentos de programación y lenguajes esenciales",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: "database",
      title: "Base de Datos",
      icon: Database,
      description: "Diseño y gestión de bases de datos",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      id: "web",
      title: "Desarrollo Web",
      icon: Globe,
      description: "Tecnologías web frontend y backend",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  const courses = [
    {
      title: "Introducción a la Programación con Python",
      category: "programming",
      level: "Principiante",
      duration: "6 semanas",
      students: "1,234",
      rating: "4.9",
      description: "Aprende los fundamentos de la programación usando Python. Perfecto para principiantes sin experiencia previa.",
      topics: ["Variables y tipos de datos", "Estructuras de control", "Funciones", "Programación orientada a objetos"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=smart"
    },
    {
      title: "Java para Principiantes",
      category: "programming",
      level: "Principiante",
      duration: "8 semanas",
      students: "892",
      rating: "4.8",
      description: "Domina Java desde cero con ejercicios prácticos y proyectos reales.",
      topics: ["Sintaxis básica", "POO en Java", "Collections", "Manejo de excepciones"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=smart"
    },
    {
      title: "Bases de Datos con MySQL",
      category: "database",
      level: "Intermedio",
      duration: "5 semanas",
      students: "567",
      rating: "4.9",
      description: "Aprende a diseñar, crear y gestionar bases de datos relacionales con MySQL.",
      topics: ["Diseño de BD", "SQL avanzado", "Optimización", "Procedimientos almacenados"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop&crop=smart"
    },
    {
      title: "Desarrollo Web con HTML, CSS y JavaScript",
      category: "web",
      level: "Principiante",
      duration: "10 semanas",
      students: "2,156",
      rating: "4.9",
      description: "Crea páginas web modernas y responsive desde cero.",
      topics: ["HTML5 semántico", "CSS3 y Flexbox", "JavaScript ES6+", "Responsive design"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&crop=smart"
    },
    {
      title: "Algoritmos y Estructuras de Datos",
      category: "programming",
      level: "Intermedio",
      duration: "12 semanas",
      students: "445",
      rating: "4.8",
      description: "Fortalece tu base teórica con algoritmos fundamentales y estructuras de datos.",
      topics: ["Arrays y listas", "Algoritmos de ordenamiento", "Árboles y grafos", "Complejidad algorítmica"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop&crop=smart"
    },
    {
      title: "React y Frontend Moderno",
      category: "web",
      level: "Intermedio",
      duration: "8 semanas",
      students: "789",
      rating: "4.9",
      description: "Desarrolla aplicaciones web modernas con React y las mejores prácticas del frontend.",
      topics: ["Componentes React", "Hooks", "State management", "Testing"],
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=250&fit=crop&crop=smart"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div>
      <Navigation />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Cursos Gratuitos de Programación
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-slide-up">
            Aprende a programar desde cero con nuestros cursos estructurados y ejercicios prácticos
          </p>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Categorías de Cursos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {courseCategories.map((category) => (
              <Card 
                key={category.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-elegant ${
                  selectedCategory === category.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Botones de filtro */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
            >
              Todos los Cursos
            </Button>
            {courseCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cuadrícula de cursos */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredCourses.map((course, index) => (
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
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students} estudiantes</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Lo que aprenderás:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.slice(0, 3).map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {course.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.topics.length - 3} más
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="hero">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Comenzar Curso
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Cursos;