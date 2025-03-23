import React from 'react';
import ServiceCard from './ServiceCard'; // Correct import
import { FaHiking, FaShieldAlt, FaMapSigns, FaHeadset } from 'react-icons/fa'; // Importing new icons

const Services = () => {
  return (
    <section className="bg-[#F4F1DE] py-16"> {/* Light beige background */}
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-6xl font-bold tracking-tight text-slate-900 mb-4">
          <div data-block-id="R2WohirMoh9h6SVzuxBaQ" data-prop-key="title" data-element-type="text" data-link="link=&amp;target=_blank&amp;text=Featured%20Service" class="editable-text _editable_76oc9_60">Featured Service</div>
        </h2>
        <p class="text-lg leading-8 mb-8 text-slate-600">
          <div data-block-id="R2WohirMoh9h6SVzuxBaQ" data-prop-key="description" data-element-type="text" data-link="link=&amp;target=_blank&amp;text=Embark%20on%20a%20unique%20travel%20experience%20and%20create%20memories%20that%20last%20a%20lifetime."
            class="editable-text _editable_76oc9_60">Embark on a unique travel experience and create memories that last a lifetime.</div>
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Cards */}
          <ServiceCard
            title="Guided Tours"
            description="Explore diverse destinations with our expert-guided tours."
            icon={<FaHiking className="text-4xl text-[#2C5F2D]" />}
          />
          <ServiceCard
            title="Travel Insurance"
            description="Stay protected with comprehensive travel insurance for peace of mind."
            icon={<FaShieldAlt className="text-4xl text-[#2C5F2D]" />}
          />
          <ServiceCard
            title="Custom Itineraries"
            description="Craft your personalized travel itineraries based on your preferences."
            icon={<FaMapSigns className="text-4xl text-[#2C5F2D]" />}
          />
          <ServiceCard
            title="24/7 Support"
            description="Experience hassle-free travel with our dedicated 24/7 customer support."
            icon={<FaHeadset className="text-4xl text-[#2C5F2D]" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
