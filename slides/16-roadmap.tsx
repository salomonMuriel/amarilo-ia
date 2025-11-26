import React from 'react';
import { SlideData, SlideType } from '../types';
import { Calendar } from 'lucide-react';

export const roadmapSlide: SlideData = {
  id: 'roadmap',
  title: "Mirada a 90 Días",
  subtitle: "El plan de acción",
  type: SlideType.SPLIT,
  path: '/roadmap',
  prevPath: '/gobernanza-ia',
  nextPath: '/metricas-exito',
  content: (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">1</span>
            </div>
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="font-bold text-lg text-blue-700 mb-1">Mes 1</h3>
          <p className="text-base text-slate-600">Bot de Seguridad</p>
          <p className="text-sm text-slate-500 mt-2 italic">Oficina Central</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">2</span>
            </div>
            <Calendar className="w-5 h-5 text-amber-600" />
          </div>
          <h3 className="font-bold text-lg text-amber-700 mb-1">Mes 2</h3>
          <p className="text-base text-slate-600">Conectar WhatsApp</p>
          <p className="text-sm text-slate-500 mt-2 italic">Prueba de Campo</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">3</span>
            </div>
            <Calendar className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="font-bold text-lg text-emerald-700 mb-1">Mes 3</h3>
          <p className="text-base text-slate-600">Revisar y Escalar</p>
          <p className="text-sm text-slate-500 mt-2 italic">Más obras</p>
        </div>
      </div>

      <div className="mt-5 p-5 bg-slate-100 border border-slate-200 rounded-xl text-center">
        <p className="text-lg text-slate-700">
          <strong>Un bot, una obra, un problema.</strong>
        </p>
        <p className="text-base text-emerald-600 font-semibold mt-2">
          Construyamos el primer "Maestro de Obra Aumentado" hoy.
        </p>
      </div>
    </div>
  ),
  speakerNotes: "No necesitamos abarcar todo de una vez. Empezamos con un bot, en una obra, resolviendo un problema. Construyamos el primer 'Maestro de Obra Aumentado' hoy mismo."
};
