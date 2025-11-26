import React from 'react';
import { SlideData, SlideType } from '../types';
import { Brain, Radio, Wrench } from 'lucide-react';

export const jerarquiaSlide: SlideData = {
  id: 'jerarquia',
  title: "La Jerarquía",
  subtitle: "LLM vs. Chatbot vs. Agente",
  type: SlideType.SPLIT,
  path: '/jerarquia',
  prevPath: '/',
  nextPath: '/rag',
  content: (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl flex flex-col items-center text-center shadow-sm">
        <Brain className="w-14 h-14 text-purple-600 mb-3" />
        <h3 className="text-xl font-bold text-purple-700 mb-1">El LLM</h3>
        <p className="text-base text-purple-600 font-semibold mb-2">El Arquitecto</p>
        <p className="text-base text-slate-600 leading-relaxed">
          Brillante. Se ha leído cada código de construcción. Pero está en una habitación blanca. <strong>No tiene manos.</strong>
        </p>
      </div>
      <div className="p-5 bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-xl flex flex-col items-center text-center shadow-sm">
        <Radio className="w-14 h-14 text-amber-600 mb-3" />
        <h3 className="text-xl font-bold text-amber-700 mb-1">El Chatbot</h3>
        <p className="text-base text-amber-600 font-semibold mb-2">El Walkie-Talkie</p>
        <p className="text-base text-slate-600 leading-relaxed">
          Puede hablar contigo. Pero si le pides "arregla la fuga", solo puede <strong>decirte cómo</strong>. No puede actuar.
        </p>
      </div>
      <div className="p-5 bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl flex flex-col items-center text-center shadow-sm">
        <Wrench className="w-14 h-14 text-emerald-600 mb-3" />
        <h3 className="text-xl font-bold text-emerald-700 mb-1">El Agente</h3>
        <p className="text-base text-emerald-600 font-semibold mb-2">El Maestro de Obra</p>
        <p className="text-base text-slate-600 leading-relaxed">
          Tiene cerebro Y <strong>"manos" (herramientas)</strong>. Si le dices "Pide concreto", entra al ERP y envía la Orden.
        </p>
      </div>
    </div>
  ),
  speakerNotes: "Desglosemos las palabras de moda. El LLM es el Arquitecto—brillante pero sin manos. El Chatbot es el Walkie-Talkie—habla pero no actúa. El Agente es el Maestro de Obra—tiene cerebro Y manos. Hoy, vamos a pasar de Chatbots (Hablar) a Agentes (Hacer)."
};
