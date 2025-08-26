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

// Custom Icons for Core Competencies
const IconSystems = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 15" />
    </svg>
);
const IconStrategy = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
);
const IconData = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.773 4.773ZM17.25 17.25 21 21" />
    </svg>
);
const IconAutomation = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);
const IconCommunication = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
);

const competencies = [
    { name: 'Systems Thinking & Modeling', icon: <IconSystems /> },
    { name: 'Strategic Planning & Analysis', icon: <IconStrategy /> },
    { name: 'Data-Driven Decision Making', icon: <IconData /> },
    { name: 'Process Optimization & Automation', icon: <IconAutomation /> },
    { name: 'Cross-Functional Communication', icon: <IconCommunication /> }
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
                 <div className="space-y-6 text-lg text-gray-600 dark:text-brand-light flex flex-col h-full">
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Me</h3>
                        <p>
                            I am a versatile <span className="text-brand-accent font-semibold">change facilitator</span>, a meticulous <span className="text-brand-accent font-semibold">data analyst</span>, and a thoughtful <span className="text-brand-accent font-semibold">product designer</span>. My background is rooted in interdisciplinary fields like Systems Science and Business Analytics, which allows me to work at the intersection of Education, Technology, and Art.
                        </p>
                        <p className="mt-4">
                            Described as a "Translator," I excel at bridging gaps between different disciplines, synthesizing complex ideas, and making them accessible. This ability allows me to facilitate collaboration and drive innovation in dynamic, fast-paced environments. I am passionate about helping individuals and organizations achieve holistic transformations.
                        </p>
                    </div>
                    <div className="mt-8">
                        <a href="https://sinasb.link/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent border-2 border-brand-accent text-brand-accent font-bold py-3 px-8 rounded-md hover:bg-brand-accent hover:text-white dark:hover:text-brand-dark transition-colors duration-300">
                            Contact Me
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
                <div className="space-y-4">
                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Competencies</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {competencies.map((comp, index) => (
                             <div key={comp.name} className={`group bg-gray-50 dark:bg-brand-secondary p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-brand-accent dark:hover:bg-brand-secondary/80 transition-all duration-300 flex flex-col items-center text-center ${competencies.length % 2 !== 0 && index === competencies.length - 1 ? 'sm:col-span-2' : ''}`}>
                                {comp.icon}
                                <p className="font-semibold text-gray-800 dark:text-brand-light group-hover:text-brand-accent transition-colors duration-300">
                                    {comp.name}
                                </p>
                            </div>
                        ))}
                     </div>
                </div>
            </div>
            
            <div className="mt-24 max-w-6xl mx-auto">
                 <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Others Say</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-brand-secondary p-8 rounded-lg border border-gray-200 dark:border-gray-800">
                           <p className="text-gray-600 dark:text-brand-light italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                           <div className="mt-6">
                               <p className="font-bold text-gray-900 dark:text-white">— {testimonial.name}</p>
                               <p className="text-sm text-gray-500 dark:text-gray-400 pl-4">{testimonial.title}</p>
                           </div>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
};

export default About;