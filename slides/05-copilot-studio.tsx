import React from 'react';
import { SlideData, SlideType } from '../types';
import { Bot } from 'lucide-react';

export const copilotStudioSlide: SlideData = {
  id: 'copilot-studio',
  title: "Microsoft Copilot Studio",
  subtitle: "La Fábrica de Prefabricados",
  type: SlideType.CONTENT,
  path: '/copilot-studio',
  prevPath: '/vision-backoffice',
  nextPath: '/demo-hse',
  bullets: [
    "Seguro: Datos dentro del tenant de Microsoft 365 de Amarilo",
    "Gestionado: Sin servidores propios, sin código complejo",
    "Nativo: Se conecta directo a SharePoint, Teams, Dynamics",
    "Escalable: Un bot → miles de usuarios sin esfuerzo"
  ],
  visual: (
    <div className="flex flex-col items-center justify-center">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
        <Bot className="w-14 h-14 text-white" />
      </div>
      <p className="mt-4 text-base font-semibold text-slate-600">Copilot Studio</p>
    </div>
  ),
  speakerNotes: "Vamos a construir un Agente ahora mismo. Usamos Copilot Studio porque es como nuestra Fábrica de Prefabricados. Construimos el 'Cerebro' aquí en un entorno seguro y controlado antes de enviarlo a la obra."
};
