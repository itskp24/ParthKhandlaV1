import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "SWR", "Redux/Saga"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "WebSockets"],
  database: ["MySQL", "PostgreSQL", "Prisma"],
  tools: ["Git", "GitHub", "VSCode", "Atom"]
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Background</h3>
                <p className="text-muted-foreground">
                  Experienced Frontend Developer with 3+ years of expertise in building modern, 
                  dynamic web applications. Bachelor of Engineering graduate from Shri J. M. Sabva 
                  Institute of Engineering & Technology with a passion for creating engaging user 
                  interfaces and optimizing application performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Bachelor of Engineering (2018-2022)</h4>
                    <p className="text-muted-foreground">
                      Shri J. M. Sabva Institute of Engineering & Technology
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">12th Science</h4>
                    <p className="text-muted-foreground">Nilkanth Vidhyalaya</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
