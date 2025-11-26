import React from 'react';
import { SlideData, SlideType } from '../types';
import { Mic, Database, ArrowRight, Clock } from 'lucide-react';

export const casoBitacoraSlide: SlideData = {
  id: 'caso-bitacora',
  title: "Caso 1: La Bitácora 'Sin Escribir'",
  subtitle: "De nota de voz a fila de Excel",
  type: SlideType.SPLIT,
  path: '/caso-bitacora',
  prevPath: '/vision',
  nextPath: '/caso-fotos',
  content: (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-5">
        {/* Input */}
        <div className="flex-1 p-5 bg-green-50 border border-green-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-base text-green-700">WhatsApp</p>
              <p className="text-sm text-green-600">Nota de voz</p>
            </div>
          </div>
          <div className="p-3 bg-white rounded-lg border border-green-200 italic text-base text-slate-600">
            "Terminado muro norte. Retraso 2h por camión. Lluvia a las 4 PM."
          </div>
        </div>

        {/* Arrow */}
        <ArrowRight className="w-8 h-8 text-emerald-600 rotate-90 md:rotate-0 shrink-0" />

        {/* Output */}
        <div className="flex-1 p-5 bg-blue-50 border border-blue-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-base text-blue-700">ERP / Excel</p>
              <p className="text-sm text-blue-600">Estructurado</p>
            </div>
          </div>
          <table className="w-full text-base">
            <tbody>
              <tr className="border-b border-blue-200">
                <td className="py-2 font-semibold text-slate-600">Avance:</td>
                <td className="py-2 text-slate-700">Muro norte ✓</td>
              </tr>
              <tr className="border-b border-blue-200">
                <td className="py-2 font-semibold text-slate-600">Retraso:</td>
                <td className="py-2 text-slate-700">2 horas</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-slate-600">Clima:</td>
                <td className="py-2 text-slate-700">Lluvia 4 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3">
        <Clock className="w-6 h-6 text-emerald-600" />
        <p className="text-base text-slate-700">
          <strong>Resultado:</strong> El residente ahorra 30 min/día. Amarilo obtiene mejores datos.
        </p>
      </div>
    </div>
  ),
  speakerNotes: "Los residentes odian escribir. Tienen dedos grandes, pantallas pequeñas y está lloviendo. La Solución: El Residente envía una nota de voz. El Agente escucha, transcribe, extrae los datos y archiva el reporte en el ERP automáticamente. Ellos ahorran 30 minutos al día; nosotros obtenemos mejores datos."
};
