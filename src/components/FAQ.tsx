import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can AI automation be implemented?',
      answer: 'Most AI solutions can be deployed within 2-4 weeks. Simple voice callers and chatbots can be live in days, while complex multi-channel automations may take 4-6 weeks for full implementation.',
      category: 'Implementation'
    },
    {
      question: 'What makes your lead generation "infinite"?',
      answer: 'Our AI system continuously identifies new prospects, personalizes outreach, and scales without human intervention. Unlike traditional methods limited by manual effort, our system can process thousands of leads simultaneously.',
      category: 'Lead Generation'
    },
    {
      question: 'Can you integrate with our existing CRM and tools?',
      answer: 'Yes, we integrate with virtually any platform through APIs, webhooks, or custom connections. Our team has experience with 500+ different tools and platforms.',
      category: 'Integration'
    },
    {
      question: 'What kind of businesses benefit most from AI automation?',
      answer: 'Any business that relies on customer engagement, lead generation, or repetitive processes. This includes SaaS companies, e-commerce, professional services, real estate, healthcare, and financial services.',
      category: 'Business'
    },
    {
      question: 'How do you ensure AI responses sound natural?',
      answer: 'We use advanced language models trained on your specific industry and brand voice. Each AI agent is customized with your terminology, tone, and business rules to ensure authentic interactions.',
      category: 'AI Technology'
    },
    {
      question: 'What ongoing support do you provide?',
      answer: 'We provide 24/7 monitoring, regular optimization, performance reports, and dedicated support. As your business grows, we continuously improve and scale your AI systems.',
      category: 'Support'
    }
  ];

  const categoryColors = {
    'Implementation': 'from-blue-500 to-cyan-500',
    'Lead Generation': 'from-green-500 to-emerald-500',
    'Integration': 'from-purple-500 to-pink-500',
    'Business': 'from-orange-500 to-red-500',
    'AI Technology': 'from-indigo-500 to-purple-500',
    'Support': 'from-teal-500 to-blue-500'
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Questions &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Answers
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about transforming your business with AI automation
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-gray-600 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 backdrop-blur-sm"
            >
              {/* Question Header */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-start hover:bg-gray-800/30 transition-all duration-300 group"
              >
                <div className="flex-1 pr-4">
                  {/* Category Badge */}
                  <div className="inline-block mb-3">
                    <span className={`inline-flex items-center gap-1 bg-gradient-to-r ${categoryColors[faq.category as keyof typeof categoryColors]} bg-clip-text text-transparent text-xs font-bold uppercase tracking-wider`}>
                      <Sparkles className="w-3 h-3" />
                      {faq.category}
                    </span>
                  </div>
                  
                  {/* Question */}
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {faq.question}
                  </h3>
                </div>
                
                {/* Chevron */}
                <div className="flex-shrink-0 ml-4">
                  <div className="bg-gray-800 group-hover:bg-blue-500/20 p-2 rounded-lg transition-all duration-300">
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-all duration-500 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
              </button>
              
              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8">
                  <div className="border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-r-xl py-4">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;