import React from 'react';
import { SlideData, SlideType } from '../types';
import { TrendingUp, Clock, Database, Users } from 'lucide-react';

export const metricasExitoSlide: SlideData = {
  id: 'metricas-exito',
  title: "Midiendo el Éxito",
  subtitle: "KPIs del Maestro Aumentado",
  type: SlideType.SPLIT,
  path: '/metricas-exito',
  prevPath: '/roadmap',
  nextPath: '/qa',
  content: (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-8 h-8 text-blue-600" />
            <h3 className="font-bold text-lg text-blue-700">Adopción</h3>
          </div>
          <ul className="text-base text-slate-600 space-y-2">
            <li>• <strong>% usuarios activos</strong> vs. licencias</li>
            <li>• <strong>Consultas/semana</strong> por bot</li>
            <li>• <strong>Tasa de retorno</strong> (usuarios recurrentes)</li>
          </ul>
        </div>

        <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-8 h-8 text-emerald-600" />
            <h3 className="font-bold text-lg text-emerald-700">Eficiencia</h3>
          </div>
          <ul className="text-base text-slate-600 space-y-2">
            <li>• <strong>Tiempo ahorrado</strong> por consulta</li>
            <li>• <strong>Reducción</strong> de llamadas a TI/HSE</li>
            <li>• <strong>Minutos/día</strong> en bitácoras</li>
          </ul>
        </div>

        <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Database className="w-8 h-8 text-amber-600" />
            <h3 className="font-bold text-lg text-amber-700">Calidad de Datos</h3>
          </div>
          <ul className="text-base text-slate-600 space-y-2">
            <li>• <strong>% captura</strong> de datos oscuros</li>
            <li>• <strong>Completitud</strong> de registros</li>
            <li>• <strong>Errores</strong> de transcripción</li>
          </ul>
        </div>

        <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-8 h-8 text-purple-600" />
            <h3 className="font-bold text-lg text-purple-700">Impacto Negocio</h3>
          </div>
          <ul className="text-base text-slate-600 space-y-2">
            <li>• <strong>Satisfacción</strong> de residentes</li>
            <li>• <strong>Tiempo de respuesta</strong> PQR</li>
            <li>• <strong>Costo por consulta</strong> vs. call center</li>
          </ul>
        </div>
      </div>

      <div className="mt-5 p-4 bg-slate-100 border border-slate-200 rounded-xl text-center">
        <p className="text-base text-slate-700">
          <strong>Meta Mes 3:</strong> 500+ consultas/semana • 80% satisfacción • 30 min ahorrados/usuario/día
        </p>
      </div>
    </div>
  ),
  speakerNotes: "No podemos mejorar lo que no medimos. Estos cuatro cuadrantes nos dan una vista completa: ¿La gente lo usa? ¿Les ahorra tiempo? ¿Mejora nuestros datos? ¿Impacta el negocio? La meta para el mes 3 es tener más de 500 consultas semanales, 80% de satisfacción, y 30 minutos ahorrados por usuario por día."
};
