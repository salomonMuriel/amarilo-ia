import React from 'react';
import { SlideData, SlideType } from '../types';
import { Home, Bot, CheckCircle, Users } from 'lucide-react';

export const casoComunidadSlide: SlideData = {
  id: 'caso-comunidad',
  title: "Caso 3: El Conserje Comunitario",
  subtitle: "Post-Venta para 50,000 residentes",
  type: SlideType.SPLIT,
  path: '/caso-comunidad',
  prevPath: '/caso-fotos',
  nextPath: '/semaforo',
  content: (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-3xl">
          {/* Resident */}
          <div className="flex-1 p-5 bg-slate-50 border border-slate-200 rounded-xl text-center">
            <Home className="w-10 h-10 text-slate-500 mx-auto mb-2" />
            <p className="font-bold text-base text-slate-700">Residente</p>
            <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-base text-slate-700 italic">
                "La luz de mi calle está apagada"
              </p>
            </div>
          </div>

          {/* Bot Process */}
          <div className="flex-1 p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
            <Bot className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
            <p className="font-bold text-base text-emerald-700 text-center mb-3">Agente IA</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 p-2 bg-white rounded border border-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Verificar dirección</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white rounded border border-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Revisar garantía</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white rounded border border-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Despachar cuadrilla</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="flex-1 p-5 bg-blue-50 border border-blue-200 rounded-xl text-center">
            <Users className="w-10 h-10 text-blue-600 mx-auto mb-2" />
            <p className="font-bold text-base text-blue-700">Resultado</p>
            <p className="text-base text-slate-600 mt-2">
              Servicio 5 estrellas<br/>
              <strong>sin call center</strong>
            </p>
          </div>
        </div>

        <div className="mt-5 p-4 bg-slate-100 border border-slate-200 rounded-lg max-w-xl">
          <p className="text-center text-base text-slate-700">
            <strong>Lagos de Torca:</strong> 50,000 residentes. El Agente automatiza el servicio.
          </p>
        </div>
      </div>
    </div>
  ),
  speakerNotes: "Gestionar 50,000 residentes en Lagos de Torca es difícil. La Solución: Un residente le escribe al bot por WhatsApp: 'La luz de mi calle está apagada'. El Agente revisa la dirección, verifica la garantía y despacha a la cuadrilla de mantenimiento automáticamente. Brindamos un servicio 5 estrellas sin un call center de 500 personas."
};
