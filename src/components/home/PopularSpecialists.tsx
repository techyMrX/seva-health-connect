
import { Heart, Brain, Eye, Bone, Baby, Dna, Stethoscope, Pill } from "lucide-react";
import SpecialtyCard from "./SpecialtyCard";

const PopularSpecialists = () => {
  const specialties = [
    {
      icon: <Heart className="h-8 w-8" />,
      name: "Cardiology",
      count: 240,
      color: "bg-red-50 text-red-600"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      name: "Neurology",
      count: 195,
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      name: "Ophthalmology",
      count: 175,
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Bone className="h-8 w-8" />,
      name: "Orthopedics",
      count: 220,
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: <Baby className="h-8 w-8" />,
      name: "Pediatrics",
      count: 260,
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Dna className="h-8 w-8" />,
      name: "Endocrinology",
      count: 140,
      color: "bg-teal-50 text-teal-600"
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      name: "General Medicine",
      count: 310,
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      icon: <Pill className="h-8 w-8" />,
      name: "Dermatology",
      count: 185,
      color: "bg-pink-50 text-pink-600"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Specialties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the right specialist for your health concerns from our extensive network of qualified doctors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((specialty) => (
            <SpecialtyCard
              key={specialty.name}
              icon={specialty.icon}
              name={specialty.name}
              count={specialty.count}
              color={specialty.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSpecialists;
