import React from 'react';
import { SlideData, SlideType } from '../types';
import { Brain, FileText } from 'lucide-react';

export const ragSlide: SlideData = {
  id: 'rag',
  title: "La Red de Seguridad: RAG",
  subtitle: "Generación Aumentada por Recuperación",
  type: SlideType.SPLIT,
  path: '/rag',
  prevPath: '/jerarquia',
  nextPath: '/whatsapp-interfaz',
  content: (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex flex-col items-center text-center shadow-sm">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2 opacity-50">
          <Brain className="w-7 h-7 text-red-400" />
        </div>
        <h3 className="text-lg font-bold text-red-700 mb-1">Sin RAG</h3>
        <p className="text-sm text-red-600 font-semibold mb-1">Construir de Memoria</p>
        <p className="text-sm text-slate-600">
          La IA "adivina" basándose en internet. <strong>Alucina.</strong> En construcción, nunca adivinamos.
        </p>
      </div>
      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col items-center text-center shadow-sm">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
          <FileText className="w-7 h-7 text-emerald-600" />
        </div>
        <h3 className="text-lg font-bold text-emerald-700 mb-1">Con RAG</h3>
        <p className="text-sm text-emerald-600 font-semibold mb-1">Construir con los Planos</p>
        <p className="text-sm text-slate-600">
          Forzamos a la IA a mirar <strong>solo nuestros PDFs</strong>. Si no está en los planos, dice "No sé".
        </p>
      </div>
    </div>
  ),
  speakerNotes: "Has escuchado que la IA 'alucina'. Eso pasa cuando el Arquitecto intenta construir de memoria. RAG es simplemente 'Revisar los Planos'. Si la respuesta no está en los planos, la IA dice 'No sé'. Así es como lo hacemos seguro para Amarilo."
};
