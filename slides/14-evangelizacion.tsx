import React from 'react';
import { SlideData, SlideType } from '../types';
import { Lightbulb, Users } from 'lucide-react';

export const evangelizacionSlide: SlideData = {
  id: 'evangelizacion',
  title: "El 'Maestro de Obra Aumentado'",
  subtitle: "Evangelización desde abajo",
  type: SlideType.CONTENT,
  path: '/evangelizacion',
  prevPath: '/semaforo',
  nextPath: '/gobernanza-ia',
  bullets: [
    "No impongas desde arriba. TI no puede obligar a nadie.",
    "Encuentra al entusiasta de tecnología en cada obra o equipo de oficina.",
    "Dale la herramienta a él primero.",
    "Cuando resuelva en 5 minutos lo que a otros les toma una hora...",
    "...la cultura cambiará de la noche a la mañana."
  ],
  visual: (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center">
          <Lightbulb className="w-12 h-12 text-amber-500" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
          <Users className="w-5 h-5 text-white" />
        </div>
      </div>
      <p className="mt-4 text-base text-center text-slate-600 max-w-xs">
        Usa la <strong>envidia</strong> para la adopción
      </p>
    </div>
  ),
  speakerNotes: "No impongas esto desde arriba. TI no puede obligar a nadie a usar un bot. La Estrategia: Encuentra al 'Maestro de Obra Aumentado'. En cada obra o equipo de oficina hay alguien a quien le encantan los gadgets. Dale la herramienta a él primero. Cuando resuelva consultas en 5 minutos que a otros les toman una hora buscando en manuales, la cultura cambiará de la noche a la mañana. Usa la envidia como herramienta para la adopción."
};
