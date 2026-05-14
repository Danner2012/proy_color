import React, { useState } from 'react';
import './../styles/ColorHarmonizer.scss';

const ColorHarmonizer: React.FC = () => {
    const [hue, setHue] = useState<number>(180);

    const harmonies = [
        `hsl(${hue}, 70%, 50%)`,                          // Base
        `hsl(${(hue + 180) % 360}, 70%, 50%)`,           // Complementario
        `hsl(${(hue + 120) % 360}, 70%, 50%)`,           // Triada A
        `hsl(${(hue + 240) % 360}, 70%, 50%)`,           // Triada B
    ];

    return (
        <section className="harmonies">
            <div className="controls">
                <label>Hue: {hue}°</label>
                <input
                    type="range"
                    min="0"
                    max="360"
                    value={hue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setHue(Number(e.target.value))
                    }
                />
            </div>

            <div className="canvas-container">
                <svg width="300" height="300" viewBox="0 0 200 200" className="color-object">
                    {/* Punto Superior - Color Base */}
                    <path 
                        d="M 100 100 L 70 70 L 100 0 L 130 70 Z" 
                        fill={harmonies[0]} 
                    />
                    {/* Punto Derecho - Color Complementario */}
                    <path 
                        d="M 100 100 L 130 70 L 200 100 L 130 130 Z" 
                        fill={harmonies[1]} 
                    />
                    {/* Punto Inferior - Color Triada A */}
                    <path 
                        d="M 100 100 L 130 130 L 100 200 L 70 130 Z" 
                        fill={harmonies[2]} 
                    />
                    {/* Punto Izquierdo - Color Triada B */}
                    <path 
                        d="M 100 100 L 70 130 L 0 100 L 70 70 Z" 
                        fill={harmonies[3]} 
                    />
                    
                    {/* Efecto de brillo central */}
                    <circle cx="100" cy="100" r="10" fill="rgba(255,255,255,0.8)" />
                </svg>
            </div>
            
            <div className="labels">
                <div className="label-item"><span style={{backgroundColor: harmonies[0]}}></span> Base</div>
                <div className="label-item"><span style={{backgroundColor: harmonies[1]}}></span> Complementario</div>
                <div className="label-item"><span style={{backgroundColor: harmonies[2]}}></span> Tríada A</div>
                <div className="label-item"><span style={{backgroundColor: harmonies[3]}}></span> Tríada B</div>
            </div>
        </section>
    );
};

export default ColorHarmonizer;