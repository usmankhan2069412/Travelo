import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // FontAwesome Icons

const FAQ = () => {
  // State to manage which question is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    {
      question: 'How do I subscribe to a tour plan?',
      answer: 'You can subscribe to a tour plan by visiting our subscription page and selecting your preferred tour package. After filling in the details and making the payment, you will receive a confirmation email.'
    },
    {
      question: 'Can I cancel or change my tour plan?',
      answer: 'Yes, you can modify or cancel your tour plan within 24 hours of booking without any additional fees. After 24 hours, cancellation fees may apply.'
    },
    {
      question: 'Do I get a refund if I cancel?',
      answer: 'Refunds are available if cancellations are made according to our cancellation policy. If you cancel within the free cancellation window, a full refund will be issued. After that, partial refunds may be applicable.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support team by emailing support@tourtravel.com or through our live chat available on the website. We are here to help you 24/7.'
    },
    {
      question: 'What documents do I need for international tours?',
      answer: 'For international tours, you will need a valid passport, visas (depending on the country), and travel insurance. We will provide detailed information once you select your tour plan.'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>FAQs - Tour Travel</title>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://tourtravel.com/faq" />
      </Helmet>
      <section className="bg-fff6cc text-gray-900 px-6 py-12 lg:py-20">
        <div className="container mx-auto">
          {/* FAQ Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-ffd819 leading-snug tracking-wide">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-gray-700 lg:max-w-2xl mx-auto leading-relaxed">
              Find quick answers to the most commonly asked questions about tours, subscriptions, and cancellations.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-6 lg:space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-ffd400">
                    {faq.question}
                  </h3>
                  <span className="text-ffd819">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
