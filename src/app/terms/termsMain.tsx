import React from "react";

export const TermsMain = () => {
  return (
    <>
      <div className="absolute overflow-hidden w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[85rem] lg:left-[15rem] lg:top-[900px] md:left-[5rem] md:top-[800px] bg-custom-green blur-2xl z-[-1] opacity-50 rounded-full "></div>
      <div className="absolute overflow-hidden w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] left-[7rem] top-[105rem] lg:left-[55rem] lg:top-[1100px] md:left-[22rem] md:top-[1050px] bg-custom-green blur-2xl z-[-1] opacity-50 rounded-full "></div>
      <div className="absolute w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[130rem] lg:left-[0rem] lg:top-[1500px] md:left-[-10rem] md:top-[1400px] bg-custom-green blur-2xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
      <div className="absolute w-[300px] h-[300px] lg:hidden  md:hidden left-[7rem] top-[155rem]  bg-custom-green blur-2xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
      <div className="absolute w-[400px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[200rem] lg:left-[55rem] lg:top-[2400px] md:left-[15rem] md:top-[2300px] bg-custom-green blur-2xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
      <div className="absolute w-[400px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[400px] left-[-10rem] top-[250rem] lg:left-[-20rem] lg:top-[2900px] md:left-[-10rem] md:top-[2900px] bg-custom-green blur-2xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
      <div className="absolute w-[300px] h-[300px] lg:hidden  md:hidden left-[7rem] top-[290rem]  bg-custom-green blur-2xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
      <div className="bg-custom-gradient">
        <div className="h-[10vh] "></div>

        <div className="flex items-center justify-center text-white px-4 py-4">
          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl text-center leading-tight font-poppins font-bold">
            Terms Of Use.
          </h1>
        </div>
        <div className="flex items-center justify-center text-white px-4 py-4">
          <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base text-center leading-tight font-poppins">
            This website contains information about Vipnan Ltd. (“Vipnan”).
            Please read carefully <br />
            the following conditions of use. By accessing this website, you are
            deemed to have agreed
            <br /> to these conditions.
          </p>
        </div>
        <div className="h-[15vh] "></div>
      </div>

      <div className="p-6 lg:px-24 lg:py-16 bg-transparent text-custom-white">
        {/* Introduction Section */}
        <section className="mb-8 mt-20">
          <h1 className="text-3xl md:text-4xl font-bold  mb-4">Introduction</h1>
          <p className="text-lg md:text-xl">
            Welcome to Vipnan, A remote freelance creative agency based in
            India. By accessing our website and engaging with our services, you
            agree to be bound by these Terms of Service (&quot;Terms&quot;). If
            you do not agree with these Terms, please refrain from using our
            services.
          </p>
        </section>

        {/* Services Overview */}
        <section className="mb-8 mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Services Overview
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg md:text-xl">
            <li>Web Design and Development</li>
            <li>Personal Branding</li>
            <li>Social Advertising</li>
            <li>Video/Graphics Editing</li>
            <li>Social Media Marketing</li>
            <li>Social Media Management</li>
            <li>
              Specific details regarding each service will be provided in the
              individual project proposals or agreements.
            </li>
          </ul>
        </section>

        {/* Project Engagement */}
        <section className="mb-8 mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Project Engagement
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg md:text-xl">
            <li>
              <strong>Scope of Work:</strong> A detailed project proposal will
              outline the scope, deliverables, timelines, and costs. Any changes
              to the agreed scope will result in additional charges.
            </li>
            <li>
              <strong>Client Responsibilities:</strong> Clients must provide all
              necessary materials, feedback, and approvals promptly to ensure
              deadlines are met.
            </li>
            <li>
              <strong>Revisions:</strong> The number of revisions allowed will
              be specified in the proposal. Any extra revisions will incur
              additional fees.
            </li>
          </ul>
        </section>

        {/* Payments and Fees */}
        <section className="mb-8 mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Payments and Fees
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg md:text-xl">
            <li>
              <strong>Payment Structure:</strong> A non-refundable deposit of
              25% is required to start any project. The remaining balance will
              be due upon completion or at agreed milestones, as outlined in the
              project proposal.
            </li>
            <li>
              <strong>Non-Refundable Policy:</strong> Payments are
              non-refundable once the project has been initiated. In the case of
              project termination by Vipnan, refunds for incomplete work may be
              considered on a case-by-case basis.
            </li>
            <li>
              <strong>Invoice Terms:</strong> Invoices will be issued upon
              reaching specific milestones or completing phases, as agreed in
              the service contract. Clients must raise any invoice discrepancies
              within 5 business days of receipt.
            </li>
            <li>
              <strong>Late Payments:</strong> Any payments not received within
              15 days of the invoice due date will incur a late fee of 5%.
              Services may be paused until the outstanding balance is settled.
            </li>
            <li>
              <strong>Additional Charges:</strong> Any changes to the scope of
              work after the project begins will be subject to additional fees.
              Such changes will be discussed and agreed upon before
              implementation.
            </li>
          </ul>
        </section>

        {/* Intellectual Property Rights */}
        <section className="mb-8 mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Intellectual Property Rights
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg md:text-xl">
            <li>
              <strong>Ownership of Deliverables:</strong> Upon full payment, the
              client will own the rights to the final deliverables. Vipnan
              reserves the right to use the work for portfolio, marketing, and
              promotional purposes.
            </li>
            <li>
              <strong>Third-Party Licenses:</strong> The client is responsible
              for obtaining any necessary licenses for third-party materials
              unless otherwise agreed.
            </li>
          </ul>
        </section>

        {/* Confidentiality and Non-Disclosure */}
        <section className="mb-8 mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Confidentiality and Non-Disclosure
          </h2>
          <p className="text-lg md:text-xl">
            Both Vipnan and the client agree to keep all project-related
            information confidential. Neither party will disclose any
            information to third parties without prior consent, except as
            required by law.
          </p>
        </section>

        {/* Termination of Services */}
        <section className="mb-8 mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Termination of Services
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg md:text-xl">
            <li>
              <strong>Termination by Either Party:</strong> Both Vipnan and the
              client may terminate the agreement with written notice. In the
              event of termination, the client will be responsible for payment
              for all work completed up to the date of termination.
            </li>
            <li>
              <strong>Termination for Breach:</strong> If either party fails to
              comply with these Terms, the agreement may be terminated
              immediately.
            </li>
          </ul>
        </section>

        {/* Limitation & Exclusion of Liability */}
        <section className="mb-8 mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Limitation & Exclusion of Liability
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg md:text-xl">
            <li>
              <strong>Limitation of Liability:</strong> Vipnan will use
              reasonable skill and care in providing our services. However,
              Vipnan is not liable for any losses, damages, or costs that may
              arise from using or being unable to use our services, including,
              but not limited to, indirect, special, incidental, or
              consequential damages.
            </li>
            <li>
              <strong>Liability Cap:</strong> Vipnan&apos;s total liability for
              any claim arising out of or relating to our services shall not
              exceed the amount paid by the client for the specific project or
              service giving rise to such a claim.
            </li>
          </ul>
        </section>

        {/* Amendments to Terms */}
        <section className="mb-8 mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Amendments to Terms
          </h2>
          <p className="text-lg md:text-xl">
            Vipnan reserves the right to amend these Terms at any time. Clients
            will be notified of any changes, and continued use of our services
            will constitute acceptance of the revised Terms.
          </p>
        </section>

        {/* Governing Law and Jurisdiction */}
        <section className="mb-8 mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Governing Law and Jurisdiction
          </h2>
          <p className="text-lg md:text-xl">
            These Terms shall be governed by and construed in accordance with
            the laws of India. Any disputes arising under or in connection with
            these Terms will be subject to the exclusive jurisdiction of the
            courts located in India.
          </p>
        </section>
      </div>
    </>
  );
};
