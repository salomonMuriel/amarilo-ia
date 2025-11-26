import React from 'react';
import { SlideData, SlideType } from '../types';
import { HelpCircle, ExternalLink } from 'lucide-react';

export const demoHseSlide: SlideData = {
  id: 'demo-hse',
  title: "Demo en Vivo",
  subtitle: "El Oficial de Seguridad (SG-SST)",
  type: SlideType.SPLIT,
  path: '/demo-hse',
  prevPath: '/copilot-studio',
  nextPath: '/verificar',
  content: (
    <div className="w-full space-y-4">
      <a
        href="https://copilotstudio.microsoft.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition mb-2"
      >
        Abrir Copilot Studio
        <ExternalLink className="w-4 h-4" />
      </a>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
              <span className="text-emerald-600 font-bold">1</span>
            </div>
            <div>
              <p className="font-semibold text-base text-slate-700">Crear Agente</p>
              <p className="text-sm text-slate-500">Nombrarlo "Bot HSE Amarilo"</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
              <span className="text-emerald-600 font-bold">2</span>
            </div>
            <div>
              <p className="font-semibold text-base text-slate-700">Cargar Conocimiento</p>
              <p className="text-sm text-slate-500">Arrastrar el Manual de Seguridad (PDF)</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
              <span className="text-emerald-600 font-bold">3</span>
            </div>
            <div>
              <p className="font-semibold text-base text-slate-700">El Prompt</p>
              <p className="text-sm text-slate-500 italic">"Eres un Oficial de Seguridad estricto..."</p>
            </div>
          </div>
        </div>
        <div className="p-5 bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl">
          <h4 className="font-bold text-base text-amber-700 mb-3 flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            La Prueba
          </h4>
          <div className="p-3 bg-white rounded-lg border border-amber-200">
            <p className="text-base text-slate-700">
              "Mis muchachos trabajan a <strong>1.8m</strong>. ¿Qué arnés necesitan?"
            </p>
          </div>
          <div className="mt-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
            <p className="text-sm text-emerald-600 font-semibold mb-1">Respuesta:</p>
            <p className="text-base text-slate-700">
              Según el Manual, p.42: arnés de cuerpo completo con línea de vida...
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  speakerNotes: "Mira esto. No estoy programando. Solo le estoy dando al Maestro de Obra sus instrucciones y sus planos. Está indexando el manual en tiempo real. Ahora, cuando le hago una pregunta, no adivina. Lee la página 42, párrafo 3, y me da el estándar exacto de Amarilo."
};
