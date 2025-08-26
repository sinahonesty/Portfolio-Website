
import React from 'react';

const testimonials = [
    {
        quote: "Sina is an exceptional team member. He is very intelligent, hard working, enthusiastic and always eager to contribute to any project. He communicates very well... I strongly recommend Sina.",
        name: "Juana Moreno",
        title: "Distinguished Professor of Physics, LSU"
    },
    {
        quote: "He has a notable ability in analyzing and deducing his observations. He is always open to help... His eagerness in constant learning and improving is always admirable to me and I strongly recommend him.",
        name: "Fariba Aghdami",
        title: "Co-founder and CEO of AztaClub"
    },
    {
        quote: "I was always amazed by how Sina thinks and solves problems. He is an open-minded person with an interesting perspective on every situation. He always tries to think out of the box... If you want a leader in your project, I can recommend Sina.",
        name: "Sajjad Kazemi, MBA",
        title: "Senior Program Manager, Health Care Tech"
    }
];


const About = () => {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">My Philosophy</h2>
                <p className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white italic">
                    &ldquo;Automate the routine, elevate the human.&rdquo;
                </p>
            </div>

            <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6 text-lg text-gray-600 dark:text-brand-light">
                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white">About Me</h3>
                    <p>
                        I am a versatile <span className="text-brand-accent font-semibold">change facilitator</span>, a meticulous <span className="text-brand-accent font-semibold">data analyst</span>, and a thoughtful <span className="text-brand-accent font-semibold">product designer</span>. My background is rooted in interdisciplinary fields like Systems Science and Business Analytics, which allows me to work at the intersection of Education, Technology, and Art.
                    </p>
                    <p>
                        Described as a "Translator," I excel at bridging gaps between different disciplines, synthesizing complex ideas, and making them accessible. This ability allows me to facilitate collaboration and drive innovation in dynamic, fast-paced environments. I am passionate about helping individuals and organizations achieve holistic transformations.
                    </p>
                </div>
                <div className="space-y-4">
                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Competencies</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-brand-light">
                        <li>Systems Thinking & Modeling</li>
                        <li>Strategic Planning & Analysis</li>
                        <li>Data-Driven Decision Making</li>
                        <li>Process Optimization & Automation</li>
                        <li>Cross-Functional Communication</li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-24 max-w-6xl mx-auto">
                 <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Others Say</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-brand-secondary p-8 rounded-lg border border-gray-200 dark:border-gray-800">
                           <p className="text-gray-600 dark:text-brand-light italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                           <div className="text-right">
                               <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                               <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                           </div>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
};

export default About;