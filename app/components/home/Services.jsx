import React from "react";
import Heading from "../ui/Heading";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* <h2 className="text-3xl sm:text-5xl font-bold mb-4">Our Services</h2> */}
          <Heading variant="blue" as='h2' className="text-3xl sm:text-5xl font-bold mb-4">Our Services</Heading>
          <p className="text-lg sm:text-2xl mb-6 md:mb-14 drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
            Professional Storm Drain Solutions for Residential & Commercial Properties
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {/* Residential Services */}
          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-house-door text-4xl"></i>
              <h2 className="card-title">Residential Services</h2>
              <p>
                Complete storm drain solutions <br className="hidden xl:inline" />
                for homeowners including <br className="hidden xl:inline" />
                cleaning, repair, and <br className="hidden xl:inline" />
                maintenance services
              </p>
            </div>
          </div>

          {/* Commercial Services */}
          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-building text-4xl"></i>
              <h2 className="card-title">Commercial Services</h2>
              <p>
                Professional storm drain <br className="hidden xl:inline" />
                management for businesses, <br className="hidden xl:inline" />
                parking lots, and <br className="hidden xl:inline" />
                commercial properties
              </p>
            </div>
          </div>

          {/* Emergency Services */}
          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-exclamation-triangle text-4xl"></i>
              <h2 className="card-title">Emergency Services</h2>
              <p>
                24/7 emergency response <br className="hidden xl:inline" />
                for urgent storm drain <br className="hidden xl:inline" />
                blockages and flooding <br className="hidden xl:inline" />
                situations
              </p>
            </div>
          </div>

          {/* Drain Cleaning */}
          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-droplet text-4xl"></i>
              <h2 className="card-title">Drain Cleaning</h2>
              <p>
                High-pressure jetting and <br className="hidden xl:inline" />
                advanced cleaning techniques <br className="hidden xl:inline" />
                to remove debris, sediment, <br className="hidden xl:inline" />
                and blockages
              </p>
            </div>
          </div>

          {/* Inspection & Camera Services */}
          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-camera-video text-4xl"></i>
              <h2 className="card-title">Video Inspection</h2>
              <p>
                State-of-the-art camera <br className="hidden xl:inline" />
                inspection to identify problems <br className="hidden xl:inline" />
                and assess drain condition <br className="hidden xl:inline" />
                without excavation
              </p>
            </div>
          </div>

          {/* Maintenance Plans */}
          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-calendar-check text-4xl"></i>
              <h2 className="card-title">Maintenance Plans</h2>
              <p>
                Scheduled preventive maintenance <br className="hidden xl:inline" />
                to keep your storm drains <br className="hidden xl:inline" />
                functioning properly <br className="hidden xl:inline" />
                year-round
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}