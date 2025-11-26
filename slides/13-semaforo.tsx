import React from 'react';
import { SlideData, SlideType } from '../types';

export const semaforoSlide: SlideData = {
  id: 'semaforo',
  title: "La Política del Semáforo",
  subtitle: "Reglas claras para la IA",
  type: SlideType.SPLIT,
  path: '/semaforo',
  prevPath: '/caso-comunidad',
  nextPath: '/evangelizacion',
  content: (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {/* Red Light */}
        <div className="p-5 bg-red-50 border-2 border-red-300 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🔴</span>
            </div>
            <div>
              <p className="font-bold text-lg text-red-700">LUZ ROJA</p>
              <p className="text-sm text-red-600">Sitio Inseguro</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-red-200">
            <p className="text-base text-slate-700">
              <strong>ChatGPT Público</strong><br/>
              <span className="text-red-600">✗</span> No contratos<br/>
              <span className="text-red-600">✗</span> No datos de clientes
            </p>
          </div>
        </div>

        {/* Green Light */}
        <div className="p-5 bg-emerald-50 border-2 border-emerald-300 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🟢</span>
            </div>
            <div>
              <p className="font-bold text-lg text-emerald-700">LUZ VERDE</p>
              <p className="text-sm text-emerald-600">Sitio Seguro</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-emerald-200">
            <p className="text-base text-slate-700">
              <strong>Copilot de Amarilo</strong><br/>
              <span className="text-emerald-600">✓</span> Es seguro y nuestro<br/>
              <span className="text-emerald-600">✓</span> Conoce nuestros datos
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-lg max-w-xl">
        <p className="text-center text-base text-slate-700">
          <strong>Clave:</strong> No prohibimos la IA—damos reglas claras.
        </p>
      </div>
    </div>
  ),
  speakerNotes: "¿Cómo gestionamos esto? No prohibimos la IA; eso crea 'IA en la Sombra'. Damos reglas de seguridad claras. Luz Roja: No pongas contratos en el ChatGPT gratuito. Es un sitio inseguro. Luz Verde: Usa nuestro Copilot interno. Es seguro, es nuestro y conoce nuestros datos."
};
