import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, Clock, Shield, TrendingUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('book-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: 'How quickly will I see results from AI automation?',
      answer: 'Most clients see immediate improvements within the first week. Simple automations like AI chatbots start working instantly, while comprehensive lead generation systems typically show 3x more qualified leads within 30 days. Our fastest client doubled their sales pipeline in just 14 days.',
      benefit: 'Fast ROI',
      icon: Clock,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      question: 'What if AI automation doesn\'t work for my specific business?',
      answer: 'We guarantee results or your money back. Before starting, we conduct a free business analysis to ensure AI automation will benefit your specific situation. 98% of our clients see measurable improvements within 60 days. If you don\'t, we refund your investment completely.',
      benefit: 'Risk-Free',
      icon: Shield,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      question: 'How much revenue increase can I expect?',
      answer: 'Our clients typically see 300-500% ROI within 6 months. A recent e-commerce client increased monthly revenue from $50K to $180K using our AI lead generation and customer engagement systems. Results vary by industry, but we guarantee at least 200% ROI or we work for free until you achieve it.',
      benefit: 'Proven Growth',
      icon: TrendingUp,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      question: 'Can you integrate with my existing tools and CRM?',
      answer: 'Yes, we integrate with any platform you\'re already using. Whether it\'s Salesforce, HubSpot, QuickBooks, or custom software, our AI agents connect seamlessly. We\'ve successfully integrated with 500+ different tools and platforms. Setup typically takes 1-2 days with zero downtime.',
      benefit: 'Seamless Integration',
      icon: HelpCircle,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      question: 'What ongoing support do you provide after implementation?',
      answer: '24/7 monitoring, monthly optimization calls, and unlimited support included. We continuously improve your AI systems based on performance data. Plus, as your business grows, we scale your automation at no extra cost. Think of us as your dedicated AI team.',
      benefit: 'Full Support',
      icon: HelpCircle,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      question: 'How much does AI automation cost compared to hiring staff?',
      answer: 'AI automation costs 80% less than hiring equivalent staff. For example, our AI appointment setter works 24/7 for less than what you\'d pay one part-time employee. Plus, no sick days, no training costs, and no turnover. Most clients save $5,000-15,000 monthly while getting better results.',
      benefit: 'Cost Savings',
      icon: HelpCircle,
      gradient: 'from-teal-500 to-blue-500'
    }
  ];

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
            <span className="text-blue-400 font-semibold">Common Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Questions,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Answered
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real answers about how AI automation transforms businesses like yours
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-gray-900/90 to-gray-800/90 border border-gray-700 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              {/* Question Header */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Benefit Badge */}
                  <div className={`bg-gradient-to-r ${faq.gradient} p-2 rounded-lg flex-shrink-0`}>
                    <faq.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    {/* Benefit Label */}
                    <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                      {faq.benefit}
                    </div>
                    
                    {/* Question */}
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {faq.question}
                    </h3>
                  </div>
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
                  <div className={`border-l-4 bg-gradient-to-r ${faq.gradient} border-opacity-50 pl-6 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-r-xl py-6`}>
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">
                      {faq.answer}
                    </p>
                    
                    {/* Action CTA within answer */}
                    <button
                      onClick={scrollToDemo}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors duration-300 group/cta"
                    >
                      Get this for your business
                      <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strong CTA Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Join 200+ businesses already using AI to automate operations, generate more leads, and scale faster than ever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button 
              onClick={scrollToDemo}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2"
            >
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-sm text-gray-400">
              ⏰ <strong className="text-white">Limited spots</strong> - Only 5 free consultations available this week
            </div>
          </div>
          
          <div className="text-xs text-gray-500">
            No obligation • 30-minute strategy session • Guaranteed ROI insights
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;