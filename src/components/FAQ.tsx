import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Sonu Communication offer?",
      answer: "Sonu Communication provides a range of connectivity solutions including high-speed internet, cellular plans, bundled packages, and streaming services. As a certified JNA dealer, we offer services from top providers, ensuring you have access to the best options for your home or business."
    },
    {
      question: "What companies are serviceable through Sonu Communication and JNA?",
      answer: "As a certified JNA dealer, Sonu Communication offers services from leading companies, including: Paramount+, SHOWTIME®, AT&T, Verizon, Spectrum, Comcast Xfinity, Frontier, HughesNet, CenturyLink, and many more. Through our partnerships, we ensure you have access to reliable and diverse service options."
    },
    {
      question: "Is Sonu Communication a service provider?",
      answer: "Sonu Communication is an authorized dealer and certified retailer, but we are not a direct service provider. We work with leading service providers like those listed above to connect you to their offerings, ensuring you receive the best possible service."
    },
    {
      question: "What are Sonu Communication's execution charges?",
      answer: "Sonu Communication charges for its execution services, which include setting up new connections, processing bill payments, plan upgrades, account cancellations, and other administrative tasks. These charges range from $49.99 to $199.99, depending on the service request, and are separate from the billing charges of the service providers you're signed up with."
    },
    {
      question: "Why are Sonu Communication's execution charges separate from my service provider's billing?",
      answer: "As a separate entity, Sonu Communication handles the execution of your service requests independently. Our charges cover the work required to manage and complete requests like plan upgrades, new installations, or account changes. These execution fees are distinct from your provider's billing, which covers your actual internet, cellular, or streaming service."
    },
    {
      question: "How do I contact Sonu Communication for support?",
      answer: "You can reach out to our customer support team through the contact form on our website or by calling us directly at (833) 708-7900. Our team is available to assist you with any inquiries, service requests, or troubleshooting needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, partnerships, and how we can help you stay connected.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-teal-600 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-200" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                    {index === 5 && (
                      <div className="mt-4 p-4 bg-teal-50 rounded-lg border border-teal-100">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">📞</span>
                          <a 
                            href="tel:+18337087900"
                            className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                          >
                            (833) 708-7900
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="tel:+18337087900"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 inline-block"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;