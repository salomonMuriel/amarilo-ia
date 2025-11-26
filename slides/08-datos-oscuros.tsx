import React from 'react';
import { SlideData, SlideType } from '../types';
import { Eye, EyeOff } from 'lucide-react';

export const datosOscurosSlide: SlideData = {
  id: 'datos-oscuros',
  title: "Los Cimientos de 'Datos Oscuros'",
  subtitle: "El 80% invisible",
  type: SlideType.SPLIT,
  path: '/datos-oscuros',
  prevPath: '/verificar',
  nextPath: '/higiene-datos',
  content: (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-md">
        {/* Iceberg visual */}
        <svg viewBox="0 0 400 280" className="w-full h-auto max-h-52">
          {/* Sky background */}
          <rect x="0" y="0" width="400" height="75" fill="#7dd3fc" />

          {/* Water / ocean background */}
          <rect x="0" y="75" width="400" height="205" fill="#0369a1" opacity="0.4" />

          {/* Water line */}
          <line x1="0" y1="75" x2="400" y2="75" stroke="#0284c7" strokeWidth="3" />

          {/* Visible part (20%) - bright white ice above water */}
          <polygon points="200,12 175,35 160,55 150,75 250,75 240,50 225,30 210,20" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
          <polygon points="200,12 175,35 160,55 150,75 180,75 175,60 190,40" fill="#e2e8f0" />

          {/* Hidden part (80%) - darker blue-teal ice underwater */}
          <polygon points="150,75 135,120 120,180 140,240 200,265 260,240 280,180 265,120 250,75" fill="#0e7490" />
          <polygon points="150,75 135,120 120,180 140,240 180,250 170,180 160,120" fill="#06b6d4" opacity="0.4" />

          {/* Orca swimming */}
          <g transform="translate(30, 200) scale(0.5)">
            {/* Body */}
            <ellipse cx="60" cy="30" rx="50" ry="20" fill="#1e293b" />
            {/* White belly patch */}
            <ellipse cx="55" cy="35" rx="30" ry="10" fill="#f8fafc" />
            {/* White eye patch */}
            <ellipse cx="90" cy="25" rx="8" ry="5" fill="#f8fafc" />
            {/* Dorsal fin */}
            <polygon points="55,10 60,30 50,30" fill="#1e293b" />
            {/* Tail fluke */}
            <polygon points="10,25 0,15 5,30 0,45 10,35" fill="#1e293b" />
            {/* Pectoral fin */}
            <ellipse cx="70" cy="45" rx="12" ry="5" fill="#1e293b" transform="rotate(-20 70 45)" />
          </g>

          {/* Labels on the side */}
          <text x="320" y="50" textAnchor="start" fill="#0c4a6e" fontSize="24" fontWeight="bold">20%</text>
          <text x="320" y="72" textAnchor="start" fill="#0c4a6e" fontSize="18">Visible</text>

          <text x="320" y="160" textAnchor="start" fill="#164e63" fontSize="24" fontWeight="bold">80%</text>
          <text x="320" y="182" textAnchor="start" fill="#164e63" fontSize="18">Invisible</text>

          {/* Connector lines */}
          <line x1="255" y1="45" x2="315" y2="45" stroke="#0c4a6e" strokeWidth="2" strokeDasharray="4,2" />
          <line x1="280" y1="165" x2="315" y2="165" stroke="#164e63" strokeWidth="2" strokeDasharray="4,2" />
        </svg>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Eye className="w-4 h-4 text-emerald-600" />
              <span className="font-bold text-base text-emerald-700">Visible</span>
            </div>
            <ul className="text-base text-slate-600 space-y-0.5">
              <li>• ERP / SAP</li>
              <li>• Cronogramas en P6</li>
              <li>• Contratos formales</li>
            </ul>
          </div>
          <div className="p-3 bg-slate-100 border border-slate-300 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <EyeOff className="w-4 h-4 text-slate-600" />
              <span className="font-bold text-base text-slate-700">Invisible</span>
            </div>
            <ul className="text-base text-slate-600 space-y-0.5">
              <li>• Notas de voz WhatsApp</li>
              <li>• Fotos de obra</li>
              <li>• Bitácoras diarias</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  speakerNotes: "No construiríamos una torre sobre cimientos que no hemos inspeccionado. Sin embargo, manejamos Amarilo basándonos en el 20% de los datos que podemos ver. El otro 80% son 'Datos Oscuros': la nota de voz de las 4 PM sobre el concreto aguado, la foto de la baldosa agrietada. Vamos a usar Agentes para capturar este barro y convertirlo en oro."
};
