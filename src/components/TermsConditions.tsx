import React from 'react';
import { Phone, FileText, Users, CreditCard, Shield, AlertTriangle, Scale, Settings } from 'lucide-react';
import Footer from './Footer';

const TermsConditions = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                <Scale className="h-8 w-8 text-teal-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
              <p className="text-lg text-gray-600">
                Welcome to <strong>Sonu Communication</strong>. These Terms and Conditions govern your use of our website and services.
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                These Terms and Conditions ("Terms") govern your use of our website, services, and all related interactions between you and Sonu Communication. By accessing our website or utilizing our services, you agree to comply with and be bound by these Terms. Please read them carefully before proceeding.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-yellow-800 text-sm">
                    <strong>Important:</strong> If you do not agree with any of the Terms outlined below, please do not use our services or this website.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Definitions</h2>
                </div>
                
                <div className="space-y-4 ml-6">
                  <div>
                    <p className="text-gray-600">
                      <strong>"Sonu Communication"</strong> refers to our company, an authorized dealer providing intermediary services between consumers and third-party service providers, including but not limited to internet, cellular, streaming, and bundled services.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600">
                      <strong>"User", "you", or "your"</strong> refers to any person or entity accessing our website or using our services.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600">
                      <strong>"Services"</strong> refers to any support or execution services provided by Sonu Communication, including but not limited to setting up new connections, plan upgrades, account cancellations, bill payments, and related support.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600">
                      <strong>"Third-Party Service Providers"</strong> refers to external companies and service providers with whom Sonu Communication has partnerships to offer their services to customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <Settings className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Scope of Services</h2>
                </div>
                
                <div className="space-y-4 ml-6">
                  <p className="text-gray-600">
                    Sonu Communication offers execution services on behalf of third-party service providers. We assist in tasks such as new connection setup, billing assistance, account upgrades, and other support-related activities. While Sonu Communication facilitates these services, the actual delivery of internet, streaming, or cellular services is provided by third-party service providers.
                  </p>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <ul className="space-y-2 text-red-800 text-sm">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>Sonu Communication is not responsible for the quality, uptime, or reliability of the services delivered by third-party service providers.</div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>All service-related issues, outages, or quality concerns should be addressed directly with the relevant service provider.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Account Responsibilities</h2>
                </div>
                
                <p className="text-gray-600 mb-4 ml-6">
                  To use our services, you may be required to create an account on our website. You agree to provide accurate and complete information when setting up an account and to keep your account information updated.
                </p>
                
                <div className="space-y-4 ml-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Account Security:</h4>
                    <p className="text-gray-600">You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account. Sonu Communication will not be liable for any losses resulting from unauthorized use of your account.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Accurate Information:</h4>
                    <p className="text-gray-600">You agree to provide correct and up-to-date information, including your billing and contact details. Providing false or incorrect information may result in the suspension or termination of your account.</p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Payments and Fees</h2>
                </div>
                
                <p className="text-gray-600 mb-4 ml-6">
                  Sonu Communication charges execution fees for the administrative services it provides. These fees are separate from the charges billed by third-party service providers.
                </p>
                
                <div className="space-y-4 ml-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Execution Fees:</h4>
                    <p className="text-gray-600">The fees charged by Sonu Communication cover the execution and facilitation of tasks such as connection setup, plan changes, and account management. These fees will be disclosed before you confirm a service request.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Third-Party Billing:</h4>
                    <p className="text-gray-600">The charges billed by third-party service providers are outside of Sonu Communication's control, and you are responsible for paying these charges directly to the provider according to their billing terms.</p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Requests</h2>
                <p className="text-gray-600 mb-4">
                  When you request services through Sonu Communication, you agree to the following conditions:
                </p>
                
                <div className="space-y-4 ml-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Service Execution:</h4>
                    <p className="text-gray-600">Sonu Communication will make reasonable efforts to ensure the timely execution of your requests, such as new connections or upgrades. However, we cannot guarantee a specific timeframe for completion as it may depend on third-party providers' processes.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cancellations:</h4>
                    <p className="text-gray-600">If you wish to cancel a service request, you must notify us immediately. Cancellations may only be possible if the request has not yet been executed. For more details, please refer to our Refund Policy.</p>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Limitations of Liability</h2>
                </div>
                
                <p className="text-gray-600 mb-4 ml-6">
                  While we strive to provide quality service, Sonu Communication does not assume responsibility for the following:
                </p>
                
                <ul className="space-y-3 ml-6 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Third-Party Provider Failures:</strong> Sonu Communication is not responsible for any service disruptions, quality issues, or delays caused by third-party service providers. Any such issues must be taken up with the respective provider.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Accuracy of Information:</strong> Sonu Communication does its best to ensure the accuracy of the information provided on our website. However, we do not guarantee that the information is free of errors, and we reserve the right to correct any inaccuracies or omissions.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Service Delays:</strong> Sonu Communication will not be liable for any delays in service execution caused by circumstances outside our control, including but not limited to technical difficulties, third-party delays, or force majeure events.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of the Website</h2>
                <p className="text-gray-600 mb-4">
                  Your use of the Sonu Communication website is subject to the following conditions:
                </p>
                
                <div className="space-y-4 ml-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prohibited Activities:</h4>
                    <p className="text-gray-600">You agree not to engage in any unlawful, harmful, or malicious activity while using our website, including but not limited to hacking, transmitting viruses, or engaging in fraudulent behavior.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Intellectual Property:</h4>
                    <p className="text-gray-600">All content on this website, including text, graphics, logos, and software, is the intellectual property of Sonu Communication or our licensors. You may not copy, distribute, or otherwise use this content without express permission.</p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
                <p className="text-gray-600">
                  Your use of the Sonu Communication website and services is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal data.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
                <p className="text-gray-600">
                  Sonu Communication reserves the right to modify or update these Terms at any time without prior notice. Any changes to these Terms will be posted on this page, and the updated version will take effect immediately upon posting. We encourage you to review these Terms periodically to stay informed of any updates.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-600">
                  Sonu Communication reserves the right to suspend or terminate your account or access to our services at our discretion, including but not limited to violations of these Terms, fraudulent activity, or failure to make payments.
                </p>
              </div>

              {/* Contact Section */}
              <div className="bg-teal-50 rounded-lg p-6 border border-teal-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms and Conditions, or if you need assistance regarding our services, you can reach out to us at:
                </p>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-teal-600" />
                  <a 
                    href="tel:+18337087900"
                    className="text-teal-600 font-semibold hover:text-teal-700 transition-colors text-lg"
                  >
                    +1 (833) 708-7900
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditions;