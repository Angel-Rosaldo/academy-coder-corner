import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Code, Book, Video, Star, Eye, Link } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Recursos = () => {
  const resourceCategories = [
    {
      title: "Guías de Estudio",
      icon: Book,
      description: "Documentos PDF con conceptos fundamentales",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Ejercicios Prácticos",
      icon: Code,
      description: "Problemas resueltos y desafíos de programación",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: "Plantillas de Código",
      icon: FileText,
      description: "Código base para tus proyectos",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Videos Tutoriales",
      icon: Video,
      description: "Explicaciones paso a paso en video",
      color: "text-info",
      bgColor: "bg-info/10"
    }
  ];

  const resources = [
    {
      title: "Guía Completa de Python para Principiantes",
      type: "PDF",
      category: "Guías",
      size: "2.5 MB",
      downloads: "3,254",
      rating: "4.9",
      description: "Manual completo con sintaxis, ejemplos y ejercicios prácticos de Python.",
      features: ["150+ páginas", "Ejemplos prácticos", "Ejercicios resueltos"],
      icon: FileText,
      color: "text-red-600"
    },
    {
      title: "100 Ejercicios de Programación en Java",
      type: "ZIP",
      category: "Ejercicios",
      size: "5.1 MB",
      downloads: "2,876",
      rating: "4.8",
      description: "Colección de ejercicios progresivos para dominar Java desde lo básico.",
      features: ["100 ejercicios", "Soluciones incluidas", "Diferentes niveles"],
      icon: Code,
      color: "text-orange-600"
    },
    {
      title: "Plantillas HTML/CSS Responsive",
      type: "ZIP",
      category: "Plantillas",
      size: "8.3 MB",
      downloads: "4,521",
      rating: "4.9",
      description: "Conjunto de plantillas web modernas y totalmente responsive.",
      features: ["10 plantillas", "CSS Grid/Flexbox", "Mobile-first"],
      icon: Code,
      color: "text-blue-600"
    },
    {
      title: "Cheatsheet de SQL Completo",
      type: "PDF",
      category: "Guías",
      size: "1.2 MB",
      downloads: "5,432",
      rating: "4.9",
      description: "Referencia rápida con todas las consultas SQL más utilizadas.",
      features: ["Consultas básicas", "JOINs avanzados", "Funciones SQL"],
      icon: FileText,
      color: "text-green-600"
    },
    {
      title: "Kit de Desarrollo React",
      type: "ZIP",
      category: "Plantillas",
      size: "12.5 MB",
      downloads: "1,987",
      rating: "4.8",
      description: "Estructura base para proyectos React con mejores prácticas.",
      features: ["Estructura optimizada", "Hooks personalizados", "Testing setup"],
      icon: Code,
      color: "text-cyan-600"
    },
    {
      title: "Algoritmos y Estructuras de Datos",
      type: "PDF",
      category: "Guías",
      size: "4.7 MB",
      downloads: "2,654",
      rating: "4.9",
      description: "Explicación detallada de algoritmos fundamentales con implementaciones.",
      features: ["20+ algoritmos", "Análisis de complejidad", "Implementaciones en Python"],
      icon: FileText,
      color: "text-purple-600"
    }
  ];

  return (
    <div>
      <Navigation />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Recursos Gratuitos
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-slide-up">
            Descarga guías, ejercicios y plantillas para acelerar tu aprendizaje
          </p>
        </div>
      </section>

      {/* Categorías de recursos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Tipos de Recursos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*Cuadrícula de recursos*/}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center`}>
                        <resource.icon className={`h-6 w-6 ${resource.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{resource.type}</Badge>
                          <span className="text-sm text-muted-foreground">{resource.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-warning">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{resource.rating}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {resource.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Incluye:</h4>
                    <div className="flex flex-wrap gap-2">
                      {resource.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                      <Eye className="h-4 w-4" />
                      <span>{resource.downloads} descargas</span>
                    </div>
                    <Button variant="hero" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

     {/*Llamada a la acción*/}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card p-8 rounded-lg shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ¿Necesitas más recursos?
            </h2>
            <p className="text-muted-foreground mb-6">
              Constantemente agregamos nuevos materiales. Síguenos en nuestras redes 
              sociales para estar al día con las últimas actualizaciones.
            </p>

            <a href="/contacto" tabIndex={-1}>
              <Button variant="hero" size="lg">
                Contactar al Profesor
              </Button>
            </a>
            
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Recursos;