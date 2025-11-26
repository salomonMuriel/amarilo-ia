import React from 'react';
import { SlideData, SlideType } from '../types';
import { HardHat, MessageSquare, ArrowRight, Bot, Building2, Database, Cloud, Languages } from 'lucide-react';

export const visionCampoSlide: SlideData = {
  id: 'vision',
  title: "La Visión: Campo",
  subtitle: "El Traductor Universal",
  type: SlideType.SPLIT,
  path: '/vision',
  prevPath: '/higiene-datos',
  nextPath: '/caso-bitacora',
  content: (
    <div className="w-full flex flex-col items-center">
      {/* Main flow diagram */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full max-w-4xl">
        {/* Obra */}
        <div className="flex-1 p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
          <HardHat className="w-10 h-10 text-amber-600 mx-auto mb-1" />
          <h3 className="font-bold text-lg text-amber-700 mb-1">Obra</h3>
          <p className="text-sm text-slate-600">Voz / Fotos</p>
          <div className="mt-2 p-2 bg-amber-100 rounded-lg">
            <MessageSquare className="w-6 h-6 text-amber-600 mx-auto" />
            <p className="text-xs text-amber-700 mt-1">WhatsApp</p>
          </div>
        </div>

        <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 md:rotate-0 shrink-0" />

        {/* Azure ACS */}
        <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl text-center">
          <Cloud className="w-8 h-8 text-sky-600 mx-auto mb-1" />
          <p className="text-xs font-semibold text-sky-700">Azure ACS</p>
          <p className="text-xs text-slate-500">Puente seguro</p>
        </div>

        <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 md:rotate-0 shrink-0" />

        {/* Agent */}
        <div className="p-3 bg-emerald-100 border-2 border-emerald-300 rounded-xl text-center">
          <Bot className="w-8 h-8 text-emerald-600 mx-auto mb-1" />
          <p className="text-xs font-bold text-emerald-700">Agente IA</p>
          <p className="text-xs text-slate-500">Copilot Studio</p>
        </div>

        <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 md:rotate-0 shrink-0" />

        {/* Oficina */}
        <div className="flex-1 p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
          <Building2 className="w-10 h-10 text-blue-600 mx-auto mb-1" />
          <h3 className="font-bold text-lg text-blue-700 mb-1">Oficina</h3>
          <p className="text-sm text-slate-600">Estructurado</p>
          <div className="mt-2 p-2 bg-blue-100 rounded-lg">
            <Database className="w-6 h-6 text-blue-600 mx-auto" />
            <p className="text-xs text-blue-700 mt-1">ERP / SharePoint</p>
          </div>
        </div>
      </div>

      {/* Colombian slang note */}
      <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg max-w-2xl flex items-center gap-3">
        <Languages className="w-6 h-6 text-purple-600 shrink-0" />
        <p className="text-sm text-slate-700">
          <strong>¿Y el lenguaje de obra?</strong> Los LLMs modernos entienden errores gramaticales y jerga de construcción sin problemas.
        </p>
      </div>

      <p className="mt-3 text-center text-base text-slate-600 max-w-xl">
        La meta: que usen <strong>WhatsApp</strong> y el Agente traduzca sus notas de voz en datos estructurados.
      </p>
    </div>
  ),
  speakerNotes: "La meta no es obligar a 5,000 obreros a usar un portátil. No lo harán. La meta es dejar que usen la herramienta que aman—WhatsApp—y usar un Agente de IA para traducir sus notas de voz en los datos estructurados que nuestra oficina necesita. La arquitectura es simple: WhatsApp se conecta a Azure Communication Services (el puente seguro de Microsoft), que alimenta al agente en Copilot Studio, y este escribe en nuestros sistemas. Y sí, el modelo entiende errores gramaticales y jerga de construcción sin problemas—los LLMs modernos están entrenados con todo tipo de variantes del español."
};
