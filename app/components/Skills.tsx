
export const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Core",
      skills: ["Java", "Spring", "Guidewire", "Node.js", "REST APIs"],
    },
    {
      title: "Frontend",
      skills: ["Angular", "React", "Next.js"],
    },
    {
      title: "Industry & Tools",
      skills: ["Banking", "Git", "Agile", "Gitlab CI/CD", "Azure DevOps"],
    },
  ];

  return (
    <section className="my-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
<span
  key={skill}
  className="rounded-md border border-neutral-200 bg-orange px-2 py-1 text-sm font-medium text-whit-600 dark:border-neutral-800 dark:text-orange-400"
>
  {skill}
</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
