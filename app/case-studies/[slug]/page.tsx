import CaseDetailsDescription from "@/components/CaseDetailsDescription";
import CaseDetailsHeader from "@/components/CaseDetailsHeader";
import CaseDetailsTechStack from "@/components/CaseDetailsTechStack";
import { client, urlFor } from "@/lib/sanity";
import { Project } from "@/types";

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
      {/* <CaseDetailsProblemStatement
        statement="One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals."
        image="/case-details/morent-problem.png"
        altText="Cars"
      />
      <CaseDetailsFigma imgUrl="/case-details/morent-figma.png" />
      <CaseDetailsProcess />
      <CaseDetailsLearnings />
      <CaseDetailsOtherStudies />
      <ContactBanner /> */}
    </div>
  );
};

export default SlugPage;
