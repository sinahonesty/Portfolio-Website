
import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">My Philosophy</h2>
                <p className="text-3xl md:text-5xl font-bold text-white italic">
                    &ldquo;Automate the routine, elevate the human.&rdquo;
                </p>
                <div className="mt-8 text-lg text-brand-light space-y-4">
                    <p>
                        I believe technology's greatest promise is not to replace human ingenuity, but to amplify it. By automating repetitive, mundane tasks, we free up our most valuable resource—our cognitive energy—to focus on what truly matters: creative problem-solving, strategic thinking, and meaningful innovation.
                    </p>
                    <p>
                        My work is dedicated to building intelligent systems and intuitive tools that handle the routine, empowering individuals and teams to perform at their best and tackle more complex, rewarding challenges.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
