/**
 * Privacy Policy and Terms, carried over from the previous site.
 * Only the contact details were changed (they pointed at placeholder addresses).
 */
import { contact } from "./site";

const Contact = () => (
  <p>
    Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
    <br />
    Address: {contact.address}
  </p>
);

export const privacy = {
  title: "Privacy Policy",
  updated: "Last updated: April 1, 2025",
  body: (
    <>
      <p>
        Nexply processes personal data in accordance with applicable data protection laws, including the Nigeria Data Protection Act 2023 and the EU&apos;s GDPR. We ensure that all personal information is handled lawfully, fairly, and transparently.
      </p>

      <h2>Information We Collect</h2>
      <p>We collect and process the following types of personal information:</p>
      <ul>
        <li>
          <strong>Contact Information:</strong> When you submit forms on our website, we collect your name, email address, phone number, company name, and other details you provide.
        </li>
        <li>
          <strong>Technical Data:</strong> When you visit our website, we automatically collect technical information such as your IP address, browser type, device information, pages visited, and time spent on our site.
        </li>
        <li>
          <strong>Marketing Preferences:</strong> We may collect information about your preferences in receiving marketing communications from us.
        </li>
        <li>
          <strong>Business Information:</strong> If you&apos;re a client, we collect information necessary to provide our services, including business details, employee information, and compliance-related data.
        </li>
      </ul>

      <h2>How We Use Information</h2>
      <p>We use the personal information we collect for the following purposes:</p>
      <ul>
        <li>To respond to your inquiries and provide the information or services you request</li>
        <li>To create and manage your account if you&apos;re a client</li>
        <li>To provide our compliance, risk and legal services</li>
        <li>To send you marketing communications about our events, services, and resources (if you&apos;ve opted in)</li>
        <li>To improve our website and services through analytics</li>
        <li>To comply with our legal and regulatory obligations</li>
      </ul>

      <h2>Data Storage &amp; Security</h2>
      <p>
        We take data security seriously and implement appropriate technical and organizational measures to protect your personal information. These include encryption, access controls, secure servers, and regular security assessments. We limit access to personal information to those employees, agents, and contractors who need to know that information to provide services.
      </p>

      <h2>Third-Party Sharing</h2>
      <p>We may share your personal information with:</p>
      <ul>
        <li>Service providers who help us deliver our services (e.g., email providers, website hosting, CRM systems)</li>
        <li>Professional advisors such as lawyers, auditors, and insurers</li>
        <li>Regulatory authorities, when required by law</li>
      </ul>
      <p>
        We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes.
      </p>

      <h2>User Rights</h2>
      <p>Under applicable data protection laws, including the Nigeria Data Protection Act 2023 and GDPR, you have the following rights:</p>
      <ul>
        <li>Right to access your personal information</li>
        <li>Right to rectify inaccurate or incomplete information</li>
        <li>Right to erasure (&apos;right to be forgotten&apos;)</li>
        <li>Right to restrict processing</li>
        <li>Right to data portability</li>
        <li>Right to object to processing</li>
        <li>Rights related to automated decision making and profiling</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>

      <h2>Contact Information</h2>
      <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer:</p>
      <Contact />

      <h2>Updates</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page and updating the &quot;Last updated&quot; date.
      </p>
    </>
  ),
};

export const terms = {
  title: "Terms of Service",
  updated: "Last updated: April 1, 2025",
  body: (
    <>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using the Nexply website (the &quot;Site&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site or services.
      </p>

      <h2>2. Use of Website</h2>
      <p>
        You agree to use our Site only for lawful purposes and in a way that does not infringe upon the rights of others or inhibit their use of the Site. Prohibited activities include:
      </p>
      <ul>
        <li>Using the Site in any manner that could disable, damage, or impair the Site</li>
        <li>Using any robot, spider, or other automatic device to access the Site</li>
        <li>Introducing any viruses, Trojan horses, worms, or other harmful material</li>
        <li>Attempting to gain unauthorized access to secured portions of the Site</li>
        <li>Collecting or harvesting any personally identifiable information from the Site</li>
      </ul>

      <h2>3. Intellectual Property</h2>
      <p>
        The content on our Site, including text, graphics, logos, images, and software, is the property of Nexply and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or use any content from our Site without prior written consent from Nexply.
      </p>

      <h2>4. Disclaimer of Liability</h2>
      <p>
        While Nexply strives to provide accurate and up-to-date information, we make no warranties or representations of any kind, express or implied, about the completeness or accuracy of website content. The information provided on our Site is for general informational purposes only and should not be considered as legal advice. Use of our services and website content is at your own risk.
      </p>
      <p>
        To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of our Site or services.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        Our Site may contain links to third-party websites or services that are not owned or controlled by Nexply. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to read the terms and conditions and privacy policy of any third-party website that you visit.
      </p>

      <h2>6. Services and Engagement</h2>
      <p>
        The description of services on our Site is not a guarantee of results or outcomes. Any engagement for Nexply services will be governed by a separate services agreement that outlines the specific terms, conditions, and deliverables.
      </p>
      <p>
        Information shared on our blog, resources section, or other content areas is provided as general guidance and should not be considered a substitute for professional advice tailored to your specific circumstances.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These Terms are governed by the laws of Nigeria, and any disputes will be subject to Nigerian courts. If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining provisions will continue in full force and effect.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will indicate the date of the most recent revision at the top of this page. Your continued use of our Site after any changes constitutes your acceptance of the new Terms.
      </p>

      <h2>9. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at:</p>
      <Contact />
    </>
  ),
};
