import React from 'react';
import { SlideData, SlideType } from '../types';
import { Shield, Users, Lightbulb, Building2 } from 'lucide-react';

export const gobernanzaIASlide: SlideData = {
  id: 'gobernanza-ia',
  title: "Estructura de Adopción IA",
  subtitle: "70% Personas, 20% Tecnología, 10% Algoritmos",
  type: SlideType.SPLIT,
  path: '/gobernanza-ia',
  prevPath: '/evangelizacion',
  nextPath: '/roadmap',
  content: (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Comité Central */}
        <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <h3 className="font-bold text-lg text-blue-700">Comité IA Central</h3>
          </div>
          <ul className="text-base text-slate-600 space-y-1">
            <li>• <strong>TI:</strong> Seguridad y arquitectura</li>
            <li>• <strong>Legal:</strong> Políticas de uso de datos</li>
            <li>• <strong>RRHH:</strong> Capacitación y cambio</li>
            <li>• <strong>Negocio:</strong> Priorización de casos</li>
          </ul>
        </div>

        {/* Campeones */}
        <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="w-8 h-8 text-amber-600" />
            <h3 className="font-bold text-lg text-amber-700">Campeones de IA</h3>
          </div>
          <ul className="text-base text-slate-600 space-y-1">
            <li>• 1 por cada área/obra grande</li>
            <li>• Primer usuario de nuevos bots</li>
            <li>• Retroalimentación al Comité</li>
            <li>• Entrena a sus colegas</li>
          </ul>
        </div>

        {/* Usuarios */}
        <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-8 h-8 text-emerald-600" />
            <h3 className="font-bold text-lg text-emerald-700">Gestión del Cambio</h3>
          </div>
          <ul className="text-base text-slate-600 space-y-1">
            <li>• Comunicación clara del "por qué"</li>
            <li>• Entrenamientos cortos (15 min)</li>
            <li>• Celebrar victorias tempranas</li>
            <li>• Canal de soporte rápido</li>
          </ul>
        </div>

        {/* Escalamiento */}
        <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Building2 className="w-8 h-8 text-purple-600" />
            <h3 className="font-bold text-lg text-purple-700">Escalamiento</h3>
          </div>
          <ul className="text-base text-slate-600 space-y-1">
            <li>• Empezar con 2-3 casos de alto impacto</li>
            <li>• Medir antes de expandir</li>
            <li>• Gobernanza centralizada</li>
            <li>• Ejecución descentralizada</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-100 border border-slate-200 rounded-lg text-center">
        <p className="text-sm text-slate-600">
          <strong>BCG 2024:</strong> 74% de empresas luchan por escalar IA. El 70% de los problemas son de personas y procesos, no tecnología.
        </p>
      </div>
    </div>
  ),
  speakerNotes: "Según BCG 2024, el 74% de las empresas luchan por escalar IA. El secreto: 70% del esfuerzo debe ir a personas y procesos, 20% a tecnología, solo 10% a algoritmos. Necesitamos un Comité Central que defina políticas, Campeones de IA en cada área que sean los primeros usuarios y entrenen a otros, y una gestión del cambio que comunique el 'por qué' y celebre victorias tempranas."
};
