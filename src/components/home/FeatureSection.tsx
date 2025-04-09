
import { CheckCircle, Calendar, Video, CreditCard } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <CheckCircle className="h-10 w-10 text-seva-600" />,
      title: "Verified Doctors",
      description:
        "All doctors on our platform are verified professionals with validated credentials and experience",
    },
    {
      icon: <Calendar className="h-10 w-10 text-seva-600" />,
      title: "Easy Scheduling",
      description:
        "Find available slots and book appointments with your preferred doctors in just a few clicks",
    },
    {
      icon: <Video className="h-10 w-10 text-seva-600" />,
      title: "Video Consultations",
      description:
        "Connect with doctors from the comfort of your home with our secure video consultation feature",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-seva-600" />,
      title: "Secure Payments",
      description:
        "Make hassle-free payments for your appointments using our secure payment gateway",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Choose Seva Health Connect</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're committed to providing the best healthcare experience with our
          simple, secure, and reliable platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-seva-600 to-teal-600 rounded-xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Download our mobile app
            </h3>
            <p className="text-white/90 mb-6">
              Get the full Seva Health experience with our mobile application. Book appointments, track your medical records, and get reminders for your upcoming visits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-seva-700 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M17.5227 19.382C18.3438 18.2946 18.8579 16.9323 18.8579 15.4392C18.8579 13.9461 18.3438 12.5838 17.5227 11.4964" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.0002 21.25C21.3746 19.5166 22.1578 17.2919 22.1578 14.939C22.1578 12.5861 21.3746 10.3615 20.0002 8.62805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.5581 14.9436H7.40406C6.87633 14.9436 6.44995 14.5173 6.44995 13.9895V7.8304C6.44995 7.30267 6.87633 6.87628 7.40406 6.87628H11.5581" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.7682 10.9096L13.7682 7.90959L10.7682 4.90959" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Google Play
              </button>
              <button className="bg-white text-seva-700 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M17.0401 20.3248H6.95995C5.77267 20.3248 4.80908 19.3612 4.80908 18.1739V5.82605C4.80908 4.63877 5.77267 3.67518 6.95995 3.67518H17.0401C18.2274 3.67518 19.191 4.63877 19.191 5.82605V18.1739C19.191 19.3612 18.2274 20.3248 17.0401 20.3248Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17.2H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                App Store
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Seva Health App on mobile phone"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
