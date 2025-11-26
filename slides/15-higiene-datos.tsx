import React from 'react';
import { SlideData, SlideType } from '../types';
import { Trash2, CloudUpload, ArrowRight } from 'lucide-react';

export const higieneDatosSlide: SlideData = {
  id: 'higiene-datos',
  title: "Preparación del Terreno",
  subtitle: "Higiene de Datos",
  type: SlideType.SPLIT,
  path: '/higiene-datos',
  prevPath: '/datos-oscuros',
  nextPath: '/vision',
  content: (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-3xl">
        <div className="flex-1 p-5 bg-red-50 border border-red-200 rounded-xl text-center">
          <Trash2 className="w-10 h-10 text-red-500 mx-auto mb-2" />
          <p className="font-bold text-lg text-red-700 mb-2">Antes</p>
          <ul className="text-sm text-slate-500 space-y-1">
            <li>• Contratos vencidos</li>
            <li>• Versiones duplicadas</li>
            <li>• Sin nombres claros</li>
          </ul>
          <p className="mt-3 text-sm text-red-600 font-semibold">"Escombros Digitales"</p>
        </div>

        <ArrowRight className="w-8 h-8 text-emerald-600 rotate-90 md:rotate-0 shrink-0" />

        <div className="flex-1 p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
          <CloudUpload className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
          <p className="font-bold text-lg text-emerald-700 mb-2">Después</p>
          <ul className="text-sm text-slate-500 space-y-1">
            <li>• Solo docs vigentes</li>
            <li>• Carpetas claras</li>
            <li>• Nomenclatura estándar</li>
          </ul>
          <p className="mt-3 text-sm text-emerald-600 font-semibold">"Cimientos Limpios"</p>
        </div>
      </div>

      <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-lg max-w-xl">
        <p className="text-center text-base text-slate-700">
          <strong>Advertencia:</strong> La IA es tan buena como los datos que lee.
        </p>
      </div>
    </div>
  ),
  speakerNotes: "Advertencia final: La IA es tan buena como los datos que lee. Si nuestro SharePoint está lleno de contratos viejos y vencidos ('Escombros'), la IA se confundirá. Antes de escalar, debemos limpiar nuestro sitio digital. Archiva los archivos viejos."
};
