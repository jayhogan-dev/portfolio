import Image from "next/image";
import SectionTitle from "./SectionTitle";
import LightContainer from "./containers/Light";
import { skills } from "@/constants";

const Skills = () => {
  return (
    <LightContainer>
      <section className="flex flex-col py-[72px] px-20 items-center justify-center">
        <SectionTitle title="My skills" />
        <div className="flex flex-wrap gap-x-10 gap-y-5 items-center justify-center">
          {skills.map((skill) => (
            <div key={skill.label}>
              <Image
                src="/circle.svg"
                alt="circle"
                height={100}
                width={100}
              />
              <Image
                src={skill.icon}
                alt={skill.label}
                height={50}
                width={50}
                className="relative -top-[4.5rem] -right-6"
              />
            </div>
          ))}
        </div>
      </section>
    </LightContainer>
  );
};

export default Skills;
