import React from 'react';
import { SlideData, SlideType } from '../types';
import { CheckCircle } from 'lucide-react';

export const verificarSlide: SlideData = {
  id: 'verificar',
  title: "Confiar pero Verificar",
  subtitle: "El Nivel Láser",
  type: SlideType.CONTENT,
  path: '/verificar',
  prevPath: '/demo-hse',
  nextPath: '/datos-oscuros',
  bullets: [
    "La nota al pie es lo más importante en la pantalla",
    "Haz clic y te abre el PDF en la página exacta",
    "En construcción usamos nivel láser para verificar",
    "En IA usamos Citas—si no hay fuente, no confíes"
  ],
  visual: (
    <div className="flex flex-col items-center">
      <div className="p-4 bg-white rounded-xl border-2 border-emerald-300 shadow-lg">
        <p className="text-base text-slate-600 mb-2">Respuesta del Bot:</p>
        <p className="text-base text-slate-700 mb-3">Se requiere arnés de cuerpo completo...</p>
        <div className="flex items-center gap-2 p-2 bg-emerald-50 rounded-lg border border-emerald-200">
          <CheckCircle className="w-5 h-5 text-emerald-600" />
          <span className="text-sm text-emerald-700 font-semibold">📎 Manual_Seguridad.pdf, p.42</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-500">↑ La cita es tu nivel láser</p>
    </div>
  ),
  speakerNotes: "¿Ves esa pequeña nota al pie? Eso es lo más importante en la pantalla. Haz clic ahí y te abre el PDF en la página exacta. En construcción, usamos un nivel láser para verificar nuestro trabajo. En IA, usamos Citas. Si el Agente no puede mostrarte la fuente, no confíes en la respuesta. Así resolvemos el 'Problema de Confianza' con Legal."
};
