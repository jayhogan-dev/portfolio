import CaseDetailsDescription from "@/components/case-details/CaseDetailsDescription";
import CaseDetailsFigma from "@/components/case-details/CaseDetailsFigma";
import CaseDetailsHeader from "@/components/case-details/CaseDetailsHeader";
import CaseDetailsLearnings from "@/components/case-details/CaseDetailsLearnings";
import CaseDetailsOtherStudies from "@/components/case-details/CaseDetailsOtherStudies";
import CaseDetailsProblemStatement from "@/components/case-details/CaseDetailsProblemStatement";
import CaseDetailsProcess from "@/components/case-details/CaseDetailsProcess";
import CaseDetailsTechStack from "@/components/case-details/CaseDetailsTechStack";
import ContactBanner from "@/components/ContactBanner";
import { client, urlFor } from "@/lib/sanity";
import { Project } from "@/types";

// export const revalidate = 10;

async function getData(slug: string) {
  const query = `*[_type == "project" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Project;

  return (
    <div className="flex flex-col">
      <CaseDetailsHeader
        title={data.title}
        subtitle={data.subtitle}
        laptopImage={urlFor(data.laptopImage.asset._ref).url()}
        mobileImage={urlFor(data.mobileImage.asset._ref).url()}
        demoSiteLink={data.demoSiteLink}
        sourceCodeLink={data.sourceCodeLink}
      />
      <CaseDetailsTechStack
        role={data.role}
        startDate={data.startDate}
        endDate={data.endDate}
      />
      <CaseDetailsDescription description={data.description} />
      <CaseDetailsProblemStatement
        problemStatement={data.problemStatement}
        problemStatementImage={urlFor(
          data.problemStatementImage.asset._ref
        ).url()}
      />
      <CaseDetailsFigma
        figmaDesign={urlFor(data.figmaDesign.asset._ref).url()}
      />
      <CaseDetailsProcess />
      <CaseDetailsLearnings
        challenges={data.challenges}
        learnings={data.learnings}
      />
      <CaseDetailsOtherStudies />
      <ContactBanner />
    </div>
  );
};

export default SlugPage;
