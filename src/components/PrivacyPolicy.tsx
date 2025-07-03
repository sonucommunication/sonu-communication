import React from 'react';
import { Phone, Shield, Lock, Eye, FileText, Users, CreditCard } from 'lucide-react';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-lg text-gray-600">
                At <strong>Sonu Communication</strong>, we are committed to safeguarding your personal data with the utmost transparency and integrity.
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Our Privacy Policy is designed to inform you how we collect, use, and protect your personal information in strict accordance with our business model, Google's business practice requirements, and international data protection laws.
              </p>

              {/* Section 1 */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  <strong>Sonu Communication</strong> collects information necessary to provide and manage our services effectively. We obtain:
                </p>
                
                <div className="space-y-4 ml-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Personal Information:</h4>
                    <p className="text-gray-600">Including but not limited to your name, address, phone number, and email when you register for services, purchase a plan, or make inquiries.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Financial Information:</h4>
                    <p className="text-gray-600">Credit card details or banking information when you pay for services.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Usage Data:</h4>
                    <p className="text-gray-600">Information about your interactions with our website, including IP addresses, browser type, pages visited, time spent, and device type, to improve your experience and monitor site performance.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Service Data:</h4>
                    <p className="text-gray-600">Data related to the service you are receiving through <strong>Sonu Communication</strong>, such as account numbers, service type, and technical support logs. This data is collected via forms, cookies, and interactions with our platform or customer service team.</p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">2. Why We Collect Information</h2>
                </div>
                <p className="text-gray-600 mb-4">We collect data to:</p>
                
                <ul className="space-y-3 ml-6 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Provide Services:</strong> Your personal and service data is required to activate new services, process orders, plan upgrades, and execute account changes such as cancellations.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Customer Support:</strong> We use your contact and service data to provide technical support and resolve any issues.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Billing and Payments:</strong> Your financial data is used to process payments for services, including our execution charges, which are clearly disclosed on our website and range from $49.99 to $199.99.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Improvement and Marketing:</strong> With your consent, we use non-identifying data to improve our services, assess site traffic, and offer promotions aligned with your preferences. We ensure that any data collected is transparent, and we fully comply with Google's guidelines by not misrepresenting any element of our services or the fees associated with them.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">3. Third-Party Service Providers</h2>
                </div>
                <p className="text-gray-600">
                  <strong>Sonu Communication</strong> partners with third-party vendors, including payment processors and JNA-certified service providers such as AT&T, Verizon, Spectrum, Xfinity, Dish, and others. While we ensure they adhere to strict privacy standards, we encourage you to review their privacy policies for more details about their data-handling practices.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">4. Transparency in Pricing and Billing</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  <strong>Sonu Communication</strong> prides itself on full transparency regarding pricing and charges. In compliance with Google's Ads Policy, we clearly state all charges for services upfront:
                </p>
                
                <ul className="space-y-3 ml-6 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Execution Fees:</strong> Charges for services like new connections, plan changes, or cancellations range from $49.99 to $199.99 and are prominently displayed before you commit.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Separate Billing:</strong> Execution fees charged by <strong>Sonu Communication</strong> are separate from charges by your service provider (such as Verizon, Xfinity, or Spectrum), which will be outlined in your agreement with the provider.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Subscription Fees:</strong> All recurring charges are clearly explained in advance to avoid any confusion.
                    </div>
                  </li>
                </ul>
                
                <p className="text-gray-600 mt-4">
                  We do not engage in any misleading or dishonest pricing practices, ensuring that all costs are transparent to you before you make a commitment.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <Lock className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
                </div>
                <p className="text-gray-600 mb-4">We take rigorous measures to secure your personal information:</p>
                
                <ul className="space-y-3 ml-6 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Encryption:</strong> All sensitive data, such as financial and personal information, is encrypted during transmission and storage.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Access Control:</strong> Only authorized employees with specific roles have access to your data, and they are bound by confidentiality agreements.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Secure Payment Gateways:</strong> We use industry-standard, third-party payment processors to handle transactions securely.
                    </div>
                  </li>
                </ul>
                
                <p className="text-gray-600 mt-4">
                  If there is ever a data breach, <strong>Sonu Communication</strong> will notify you and relevant authorities as per legal obligations.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Control</h2>
                <p className="text-gray-600 mb-4">You have the right to:</p>
                
                <ul className="space-y-3 ml-6 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Access and Correct Your Data:</strong> At any time, you can request to view, update, or correct your personal information.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Request Data Deletion:</strong> You can request that your personal data be erased from our systems if it is no longer required for the services you use.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Opt-Out of Marketing:</strong> You have full control over whether or not you receive marketing communications from <strong>Sonu Communication</strong>. You can unsubscribe at any time.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Data Portability:</strong> You may request a copy of your personal data in a commonly used, machine-readable format.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Compliance with Google's Ad Policies</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Sonu Communication</strong> strictly adheres to Google's advertising policies to ensure our business practices are honest, transparent, and compliant. We do not misrepresent our services, affiliations, or pricing. Our privacy practices are in full accordance with Google's rules to avoid misleading representations or unethical business conduct.
                </p>
                
                <p className="text-gray-600 mb-4">We will never:</p>
                
                <ul className="space-y-2 ml-6 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Use deceptive tactics to collect your data.</div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Mislead users about the true nature or cost of our services.</div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Engage in any phishing or scamming practices.</div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>Hide or obscure the terms of our services or charges.</div>
                  </li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Our Privacy Policy</h2>
                <p className="text-gray-600">
                  <strong>Sonu Communication</strong> reserves the right to modify this policy. Any changes will be posted on this page, and significant updates will be communicated directly to you via email or a notice on our site.
                </p>
              </div>

              {/* Contact Section */}
              <div className="bg-teal-50 rounded-lg p-6 border border-teal-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-teal-600" />
                  <span className="text-lg font-semibold text-gray-900">Phone:</span>
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

export default PrivacyPolicy;