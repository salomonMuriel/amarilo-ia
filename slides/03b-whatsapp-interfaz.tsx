import React from 'react';
import { SlideData, SlideType } from '../types';
import { MessageSquare, Monitor, Smartphone, HardHat, Sun, CloudRain, Coffee, Clock, FileStack } from 'lucide-react';

export const whatsappInterfazSlide: SlideData = {
  id: 'whatsapp-interfaz',
  title: "La Interfaz Universal",
  subtitle: "WhatsApp como Puerta de Entrada",
  type: SlideType.SPLIT,
  path: '/whatsapp-interfaz',
  prevPath: '/rag',
  nextPath: '/vision-backoffice',
  content: (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        {/* Traditional Interface */}
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Monitor className="w-8 h-8 text-red-500" />
            <h3 className="font-bold text-lg text-red-700">Interfaz Tradicional</h3>
          </div>
          <ul className="text-sm text-slate-600 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-red-500">✗</span>
              Requiere portátil o tablet
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">✗</span>
              Login, contraseñas, capacitación
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">✗</span>
              Dedos grandes + pantalla pequeña
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">✗</span>
              No funciona con guantes de obra
            </li>
          </ul>
          <p className="mt-3 text-sm text-red-600 font-semibold italic">
            "Darle un ERP al maestro es como darle un teclado al soldador"
          </p>
        </div>

        {/* WhatsApp Interface */}
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare className="w-8 h-8 text-emerald-600" />
            <h3 className="font-bold text-lg text-emerald-700">WhatsApp + Voz</h3>
          </div>
          <ul className="text-sm text-slate-600 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              Obra y oficina ya lo usan 4+ h/día
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              Cero capacitación necesaria
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              Nota de voz = sin escribir
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              Funciona bajo el sol, la lluvia, con guantes
            </li>
          </ul>
          <p className="mt-3 text-sm text-emerald-600 font-semibold italic">
            "La mejor herramienta es la que ya tienen en el bolsillo"
          </p>
        </div>
      </div>

      {/* Two context rows */}
      <div className="mt-4 space-y-2 max-w-2xl w-full">
        {/* Construction context */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-center gap-4 justify-center flex-wrap">
            <span className="text-xs font-bold text-amber-700">OBRA:</span>
            <div className="flex items-center gap-1">
              <HardHat className="w-4 h-4 text-amber-600" />
              <span className="text-xs text-slate-600">Casco</span>
            </div>
            <div className="flex items-center gap-1">
              <Sun className="w-4 h-4 text-amber-500" />
              <span className="text-xs text-slate-600">Sol</span>
            </div>
            <div className="flex items-center gap-1">
              <CloudRain className="w-4 h-4 text-blue-500" />
              <span className="text-xs text-slate-600">Lluvia</span>
            </div>
            <div className="flex items-center gap-1">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span className="text-xs text-slate-600 font-semibold">→ WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Office context */}
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-4 justify-center flex-wrap">
            <span className="text-xs font-bold text-blue-700">OFICINA:</span>
            <div className="flex items-center gap-1">
              <Coffee className="w-4 h-4 text-blue-600" />
              <span className="text-xs text-slate-600">En reunión</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-xs text-slate-600">Sin tiempo</span>
            </div>
            <div className="flex items-center gap-1">
              <FileStack className="w-4 h-4 text-blue-500" />
              <span className="text-xs text-slate-600">20 sistemas</span>
            </div>
            <div className="flex items-center gap-1">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span className="text-xs text-slate-600 font-semibold">→ WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  speakerNotes: "Antes de hablar de tecnología, hablemos de realidad. Tanto el maestro de obra como el analista en oficina ya usan WhatsApp 4+ horas al día para coordinar. El maestro tiene guantes, casco, sol en los ojos—darle un ERP es como darle un teclado al soldador. Y la oficina ya coordina por WhatsApp aunque tenga el ERP al lado. La nota de voz es el teclado universal. La mejor interfaz es la que ya tienen en el bolsillo."
};
