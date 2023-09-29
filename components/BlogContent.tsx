import React from "react";
import LightContainer from "./containers/Light";

interface BlogContentProps {
  content: [
    {
      _key: string;
      listItem: string;
      children: [
        {
          text: string;
        }
      ];
    }
  ];
}

const BlogContent = ({ content }: BlogContentProps) => {
  return (
    <LightContainer>
      <section className="flex flex-col py-12 gap-6 md:py-[72px] items-start justify-center">
        {content.map((paragraph) => {
          if (paragraph.listItem === "bullet") {
            return (
              <ul
                key={paragraph._key}
                className="list-disc pl-10"
              >
                <li>{paragraph.children[0].text}</li>
              </ul>
            );
          } else {
            return <p key={paragraph._key}>{paragraph.children[0].text}</p>;
          }
        })}
      </section>
    </LightContainer>
  );
};

export default BlogContent;
