import React, { useState, useEffect } from 'react';
import './../styles/RandomColorFlower.scss';

const RandomColorFlower: React.FC = () => {
    const [hue, setHue] = useState<number>(Math.floor(Math.random() * 360));

    useEffect(() => {
        const interval = setInterval(() => {
            setHue(Math.floor(Math.random() * 360));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const harmonies = [
        `hsl(${hue}, 70%, 60%)`,                          
        `hsl(${(hue + 180) % 360}, 70%, 60%)`,           
        `hsl(${(hue + 120) % 360}, 70%, 60%)`,           
        `hsl(${(hue + 240) % 360}, 70%, 60%)`,           
    ];

    return (
        <section className="random-flower-section">
            <hr />
            <h2>Flor Ale</h2>

            <div className="flower-container">
                <svg width="400" height="400" viewBox="0 0 200 200" className="flower-svg">
                    {/* Pétalo Superior (Base) */}
                    <ellipse cx="100" cy="60" rx="30" ry="50" fill={harmonies[0]} transform="rotate(0, 100, 100)" />
                    {/* Pétalo Derecho (Complementario) */}
                    <ellipse cx="100" cy="60" rx="30" ry="50" fill={harmonies[1]} transform="rotate(90, 100, 100)" />
                    {/* Pétalo Inferior (Triada A) */}
                    <ellipse cx="100" cy="60" rx="30" ry="50" fill={harmonies[2]} transform="rotate(180, 100, 100)" />
                    {/* Pétalo Izquierdo (Triada B) */}
                    <ellipse cx="100" cy="60" rx="30" ry="50" fill={harmonies[3]} transform="rotate(270, 100, 100)" />
                    
                    {/* Centro de la flor */}
                    <circle cx="100" cy="100" r="20" fill="#fff" />
                    <circle cx="100" cy="100" r="15" fill="#f1c40f" opacity="0.6" />
                </svg>
            </div>

            <div className="flower-labels">
                <div className="label"><div className="dot" style={{backgroundColor: harmonies[0]}}></div> Base</div>
                <div className="label"><div className="dot" style={{backgroundColor: harmonies[1]}}></div> Complementario</div>
                <div className="label"><div className="dot" style={{backgroundColor: harmonies[2]}}></div> Tríada A</div>
                <div className="label"><div className="dot" style={{backgroundColor: harmonies[3]}}></div> Tríada B</div>
            </div>
        </section>
    );
};

export default RandomColorFlower;