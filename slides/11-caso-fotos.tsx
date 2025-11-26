import React from 'react';
import { SlideData, SlideType } from '../types';
import { Camera, ArrowRight, Bot } from 'lucide-react';

export const casoFotosSlide: SlideData = {
  id: 'caso-fotos',
  title: "Caso 2: El Analista de Fotos",
  subtitle: "Lista de Remates automática",
  type: SlideType.SPLIT,
  path: '/caso-fotos',
  prevPath: '/caso-bitacora',
  nextPath: '/caso-comunidad',
  content: (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-5">
        {/* Input */}
        <div className="flex-1 p-5 bg-slate-100 border border-slate-300 rounded-xl text-center">
          <Camera className="w-10 h-10 text-slate-500 mx-auto mb-2" />
          <p className="font-bold text-base text-slate-700 mb-2">Foto del Defecto</p>
          <div className="w-full h-24 bg-slate-200 rounded-lg flex items-center justify-center">
            <span className="text-4xl">🧱</span>
            <span className="text-red-500 text-2xl ml-1">⚡</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center">
          <ArrowRight className="w-8 h-8 text-emerald-600 rotate-90 md:rotate-0" />
          <Bot className="w-8 h-8 text-emerald-600 my-1" />
        </div>

        {/* Output */}
        <div className="flex-1 p-5 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="font-bold text-base text-blue-700 mb-3">Análisis Automático</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-white rounded border border-blue-200">
              <span className="text-sm text-slate-600">Tipo:</span>
              <span className="text-sm font-semibold text-slate-700">Drywall - Menor</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded border border-blue-200">
              <span className="text-sm text-slate-600">Ubicación:</span>
              <span className="text-sm font-semibold text-slate-700">Torre 3 → U.402</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-emerald-100 rounded border border-emerald-200">
              <span className="text-sm text-slate-600">Destino:</span>
              <span className="text-sm font-semibold text-emerald-700">📁 SharePoint</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-base text-slate-700">
          <strong>Resuelto:</strong> Las fotos se pierden en WhatsApp. El Agente las archiva automáticamente.
        </p>
      </div>
    </div>
  ),
  speakerNotes: "Las fotos se pierden en los grupos de WhatsApp. La Solución: Un ingeniero toma una foto de un defecto y se la envía al bot. El Agente 've' la grieta, la identifica como 'Drywall - Menor' y la guarda en la carpeta correcta de SharePoint (Torre 3 > Unidad 402). Hace el archivo por ti."
};
