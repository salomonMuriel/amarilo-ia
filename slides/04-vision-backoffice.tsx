import React from 'react';
import { SlideData, SlideType } from '../types';
import { Clock, ArrowRight, Bot, Lightbulb } from 'lucide-react';

export const visionBackofficeSlide: SlideData = {
  id: 'vision-backoffice',
  title: "La Visión: Oficina",
  subtitle: "El Asistente de Oficina",
  type: SlideType.SPLIT,
  path: '/vision-backoffice',
  prevPath: '/whatsapp-interfaz',
  nextPath: '/copilot-studio',
  content: (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-3xl">
        {/* Tareas Repetitivas */}
        <div className="flex-1 p-5 bg-slate-100 border border-slate-300 rounded-xl text-center">
          <Clock className="w-12 h-12 text-slate-500 mx-auto mb-2" />
          <h3 className="font-bold text-xl text-slate-700 mb-1">Tareas Repetitivas</h3>
          <p className="text-base text-slate-600">Manual / Tedioso</p>
          <div className="mt-3 space-y-2">
            <div className="p-2 bg-slate-200 rounded-lg text-sm text-slate-600">Copiar datos entre sistemas</div>
            <div className="p-2 bg-slate-200 rounded-lg text-sm text-slate-600">Generar reportes</div>
            <div className="p-2 bg-slate-200 rounded-lg text-sm text-slate-600">Explicar documentación</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center">
          <ArrowRight className="w-8 h-8 text-emerald-600 rotate-90 md:rotate-0" />
          <div className="p-3 bg-emerald-100 border-2 border-emerald-300 rounded-full my-2">
            <Bot className="w-8 h-8 text-emerald-600" />
          </div>
          <span className="text-base font-bold text-emerald-600">Agente IA</span>
        </div>

        {/* Trabajo de Alto Valor */}
        <div className="flex-1 p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
          <Lightbulb className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
          <h3 className="font-bold text-xl text-emerald-700 mb-1">Trabajo de Alto Valor</h3>
          <p className="text-base text-slate-600">Estratégico / Creativo</p>
          <div className="mt-3 space-y-2">
            <div className="p-2 bg-emerald-100 rounded-lg text-sm text-emerald-700">Tomar decisiones</div>
            <div className="p-2 bg-emerald-100 rounded-lg text-sm text-emerald-700">Negociar contratos</div>
            <div className="p-2 bg-emerald-100 rounded-lg text-sm text-emerald-700">Innovar procesos</div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-lg text-slate-600 max-w-xl">
        Liberar a tu equipo de tareas repetitivas para que se enfoquen en lo que <strong>realmente importa</strong>.
      </p>
    </div>
  ),
  speakerNotes: "En la oficina hay tareas repetitivas que consumen horas: copiar datos entre sistemas, generar reportes manuales, explicar documentación. Un Agente puede hacer esto automáticamente, liberando a tu equipo para trabajo estratégico."
};
