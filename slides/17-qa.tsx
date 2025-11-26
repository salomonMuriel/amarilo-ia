import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { SlideData, SlideType } from '../types';
import { Linkedin } from 'lucide-react';

export const qaSlide: SlideData = {
  id: 'qa',
  title: "Preguntas y Respuestas",
  subtitle: "¿Qué dudas tienen?",
  type: SlideType.CONTENT,
  path: '/qa',
  prevPath: '/metricas-exito',
  bullets: [
    "¿Cómo se integra con nuestro ERP actual?",
    "¿Qué pasa con la seguridad de los datos?",
    "¿Cuánto tiempo toma implementar el primer bot?",
    "¿Cómo medimos el éxito?",
    "¿Qué nivel de conocimiento técnico se necesita para crear agentes?",
    "¿Cómo manejamos la resistencia al cambio del equipo?",
    "¿Qué pasa si el bot da una respuesta incorrecta?",
    "¿Podemos personalizar las respuestas por proyecto u obra?"
  ],
  visual: (
    <div className="flex flex-col items-center">
      <div className="p-8 bg-white border-2 border-slate-200 rounded-2xl shadow-lg">
        <QRCodeSVG
          value="https://www.linkedin.com/in/smuriel/"
          size={220}
          level="M"
        />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
          <Linkedin className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  ),
  speakerNotes: "Ahora es el momento de sus preguntas. Hemos cubierto mucho terreno hoy—desde las definiciones básicas hasta casos de uso concretos y la estrategia de implementación. ¿Qué dudas tienen?"
};
