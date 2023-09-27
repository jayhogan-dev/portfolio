import { EmailTemplateProps } from "@/types";

const EmailTemplate = ({
  name,
  email,
  project,
  contact,
}: EmailTemplateProps) => {
  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Project Summary: {project}</li>
        <li>Contact Information: {contact}</li>
      </ul>
    </div>
  );
};

export default EmailTemplate;
