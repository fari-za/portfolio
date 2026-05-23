import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Développeuse Backend et Testeuse QA",
      company: "XP Wave",
      logoLink: "data:image/png;base64,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",
      period: "Avril 2026 - Août 2026",
      link: "https://www.xpwave.io",
      description:
      "Participation au développement backend et aux activités de test QA d'applications web dans un environnement Agile Scrum.",
      achievements: [
        "Développement et maintenance de fonctionnalités backend avec Java et Spring Boot",
        "Réalisation de tests fonctionnels et participation à l'amélioration de la qualité logicielle",
        "Utilisation d'outils de développement et de collaboration : GitHub, Jira et Confluence",
        "Contribution aux processus de déploiement sur le cloud",
        ],
    },

    {
      title: "Représentante étudiante au conseil du département informatique",
      company: "CY Cergy Paris Université",
      logoLink: "data:image/png;base64,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",
      period: "2025 - 2026",
      description:
      "Représentation des étudiants en informatique au sein du conseil départemental et participation aux décisions académiques.",
    },

    {
      title: "Professeure particulière en mathématiques et informatique",
      company: "SuperProf",
      logoLink: "data:image/png;base64,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",
      period: "2024 - 2026",
      description: "Soutien scolaire en mathématiques et informatique.",
      achievements: [
        "Accompagnement personnalisé",
        "Adaptation des méthodes pédagogiques",
        "Transmission claire des connaissances",
      ],
    },


    {
      title: "Vente et gestion de stock",
      company: "Librairie Frères FERADJI",
      logoLink: "",
      period: "Mai 2023 - Septembre 2023",
      description: "Gestion des ventes et du stock au sein d'une librairie.",
      achievements: [
        "Gestion quotidienne du stock",
        "Relation client et conseil",
        "Organisation et suivi de l'inventaire",
      ],
    },

  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Expériences Professionnelles</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-slide-up ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="p-6 ml-16 md:ml-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-background shadow-sm border border-border flex items-center justify-center">
                        {exp.logoLink ? (
                          <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
                            <img
                              src={exp.logoLink}
                              alt={`${exp.company} logo`}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-accent-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        {exp.link ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary font-medium mb-3 hover:underline">
                            {exp.company}
                          </a>
                        ) : (
                          <p className="text-primary font-medium mb-3">{exp.company}</p>
                        )}
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        {exp.achievements ? (
                          <div className="space-y-2">
                            <p className="font-semibold text-sm">Réalisations clés :</p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
