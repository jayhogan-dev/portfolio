import CaseDetailsDescription from "@/components/CaseDetailsDescription";
import CaseDetailsFigma from "@/components/CaseDetailsFigma";
import CaseDetailsHeader from "@/components/CaseDetailsHeader";
import CaseDetailsProblemStatement from "@/components/CaseDetailsProblemStatement";
import CaseDetailsTechStack from "@/components/CaseDetailsTechStack";

const MorentPage = () => {
  return (
    <div className="flex flex-col">
      <CaseDetailsHeader />
      <CaseDetailsTechStack />
      <CaseDetailsDescription
        description="Morent, a cutting-edge car rental application that was developed using Nextjs, MongoDB, and Nextjs Server Actions. The app boasts a dynamic homepage that showcases featured vehicles, along with convenient pickup & drop-off location options & a comprehensive list of available cars."
        pageFeatures="My team and I also developed the car listing page which offers a search bar and various filtering options for users to find the perfect vehicle. Additionally, it has a car details page which provides users with detailed information along with suggestions for other recommended vehicles. In order to enhance the user experience, we added an onboarding process which asks for some user preferences, allowing each individual to get the most enjoyable experience possible."
        userFeatures="Car owners are also able to list their cars for rent through our Add Car page, while users can easily track their rented and rented-out cars through their profile page. Overall, we've created an intuitive and user-friendly MVP version of the platform that will make renting a car a breeze."
      />
      <CaseDetailsProblemStatement
        statement="One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals."
        image="/case-details/morent-problem.png"
        altText="Cars"
      />
      <CaseDetailsFigma imgUrl="/case-details/morent-figma.png" />
    </div>
  );
};

export default MorentPage;
