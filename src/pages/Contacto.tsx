import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    
    // Limpiar formulario
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "rafael@codercorner.com",
      href: "mailto:rafael@codercorner.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Universidad Tecnológica, Ciudad",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/rafael-profesor",
      color: "hover:text-gray-800"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/rafael-profesor",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/rafael_profesor",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <div>
      <Navigation />
      <div className="min-h-screen">
      {/* Seccion Hero */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Contáctanos
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-slide-up">
            ¿Tienes preguntas? Estamos aquí para ayudarte en tu journey de aprendizaje
          </p>
        </div>
      </section>

      {/* Formulario de contacto e información */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario de contacto */}
            <Card className="p-8 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Asunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="¿En qué podemos ayudarte?"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    className="mt-1"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </Card>

            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Información de contacto
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-4 hover:shadow-card transition-all duration-300">
                      <a href={info.href} className="flex items-center space-x-4 group">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">{info.content}</p>
                        </div>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Redes Sociales */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Síguenos en redes sociales
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Seccion FAQ */}
              <Card className="p-6 bg-muted/50">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Preguntas Frecuentes
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm">¿Los cursos realmente son gratuitos?</h4>
                    <p className="text-muted-foreground text-sm">
                      Sí, todos nuestros cursos básicos son completamente gratuitos.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">¿Cuánto tiempo tardan en responder?</h4>
                    <p className="text-muted-foreground text-sm">
                      Normalmente respondemos en menos de 24 horas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">¿Ofrecen certificados?</h4>
                    <p className="text-muted-foreground text-sm">
                      Actualmente estamos trabajando en un sistema de certificaciones.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa o Información Adicional */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            ¿Prefieres una reunión virtual?
          </h2>
          <p className="text-muted-foreground mb-8">
            Si eres estudiante universitario o estás considerando una carrera en programación, 
            puedes agendar una sesión de orientación gratuita.
          </p>
          <Button variant="hero" size="lg">
            Agendar Reunión Virtual
          </Button>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;