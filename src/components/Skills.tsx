import { Card } from "@/components/ui/card";
import {
  Database,
  Code2,
  BarChart3,
  Globe,
  Wrench,
  Server,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
        title: "Développement Backend",
        icon: Server,
        items: [
            "Java",
            "Spring Boot",
            "Python",
            "APIs REST",
        ],
    },
    {
        title: "Bases de données",
        icon: Database,
        items: [
            "SQL",
            "MySQL",
            "PostgreSQL",
        ],
    },
    {
        title: "Data Science",
        icon: BarChart3,
        items: [
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Analyse exploratoire de données (EDA)",
            "Visualisation de données",
            "Clustering",
            "Data Mining",
        ],
    },
    {
        title: "Data Analytics & BI",
        icon: BarChart3,
        items: [
            "Power BI",
            "Tableau",
            "Excel",
            "Analyse de données",
        ],
    },
    {
        title: "Développement Web",
        icon: Globe,
        items: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
        ],
    },
    {
        title: "Outils & Technologies",
        icon: Wrench,
        items: [
            "Git",
            "GitHub",
            "Docker",
            "CI/CD",
            "Jira",
            "Confluence",
            "Linux",
        ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compétences
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compétences développées à travers mes projets académiques,
            mon stage en développement backend et mes expériences en data.
          </p>

          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Card
                key={index}
                className="group p-6 border border-border/60 bg-background hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary shadow-sm">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="inline-flex items-center rounded-full border border-border/40 bg-gradient-to-r from-muted/30 to-muted/10 px-3 py-1.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-primary/15 hover:text-primary hover:border-primary/30 hover:shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;