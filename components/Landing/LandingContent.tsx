import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const testimonials = [
  {
    name: "Jessica",
    avatar: "J",
    title: "Graphic Designer",
    description:
      "Absolutely love this product! It has made my work so much easier and enjoyable.",
  },
  {
    name: "Michael",
    avatar: "M",
    title: "Content Creator",
    description:
      "I can't believe how much time I save using this tool. It's a game-changer!",
  },
  {
    name: "Emily",
    avatar: "E",
    title: "Marketing Specialist",
    description:
      "Our team productivity skyrocketed after incorporating this into our workflow. Highly recommended!",
  },
  {
    name: "David",
    avatar: "D",
    title: "Entrepreneur",
    description:
      "As a business owner, this tool has helped me streamline processes and improve efficiency.",
  },
  {
    name: "Sophia",
    avatar: "S",
    title: "Social Media Manager",
    description:
      "I love the simplicity and versatility of this tool. It's perfect for managing multiple projects.",
  },
  {
    name: "Oliver",
    avatar: "O",
    title: "Software Engineer",
    description:
      "This product has become an essential part of my toolkit. It's a must-have for developers.",
  },
  {
    name: "Isabella",
    avatar: "I",
    title: "Digital Marketer",
    description:
      "I've tried many similar tools, but none come close to the power and user-friendliness of this one.",
  },
  {
    name: "Lucas",
    avatar: "L",
    title: "Product Manager",
    description:
      "I've been amazed by the results we've achieved since using this product. It's revolutionized our workflow.",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item, idx) => (
          <Card
            className="bg-[#182238] border-none text-white hover:bg-slate-500/30 cursor-pointer transition"
            key={idx}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
