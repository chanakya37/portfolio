import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const skills = [
    {
        icon: Code2,
        title: "Programming Languages",
        description: "Python, JavaScript, Java (Basic), OOPs",
    },
    {
        icon: Rocket,
        title: "Database & Systems",
        description: "SQL, MongoDB, DBMS, Operating Systems, Computer Networks",
    },
    {
        icon: Users,
        title: "Cloud & APIs",
        description: "REST API (Integration), Node.js, AWS (Basic)",
    },
    {
        icon: Lightbulb,
        title: "Soft Skills",
        description:
            "Teamwork, Communication, Time Management, Adaptability, Problem Solving",
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden bg-secondary/50">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase mb-2 block">
                        Technical Proficiency
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                        Skills & Capabilities
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((item, idx) => (
                        <div
                            key={idx}
                            className="glass p-6 rounded-2xl animate-fade-in hover:scale-105 transition-transform duration-300"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
