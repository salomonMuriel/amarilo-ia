import { SlideData } from '../types';

import { introSlide } from './01-intro';
import { jerarquiaSlide } from './02-jerarquia';
import { ragSlide } from './03-rag';
import { whatsappInterfazSlide } from './03b-whatsapp-interfaz';
import { visionBackofficeSlide } from './04-vision-backoffice';
import { copilotStudioSlide } from './05-copilot-studio';
import { demoHseSlide } from './06-demo-hse';
import { verificarSlide } from './07-verificar';
import { datosOscurosSlide } from './08-datos-oscuros';
import { higieneDatosSlide } from './15-higiene-datos';
import { visionCampoSlide } from './09-vision-campo';
import { casoBitacoraSlide } from './10-caso-bitacora';
import { casoFotosSlide } from './11-caso-fotos';
import { casoComunidadSlide } from './12-caso-comunidad';
import { semaforoSlide } from './13-semaforo';
import { evangelizacionSlide } from './14-evangelizacion';
import { gobernanzaIASlide } from './14b-gobernanza-ia';
import { roadmapSlide } from './16-roadmap';
import { metricasExitoSlide } from './18-metricas-exito';
import { qaSlide } from './17-qa';

export const SLIDES: SlideData[] = [
  // PARTE 1: EL CINTURÓN DE HERRAMIENTAS DIGITAL
  introSlide,
  jerarquiaSlide,
  ragSlide,
  whatsappInterfazSlide,

  // PARTE 2: BACKOFFICE - EL ASISTENTE DE OFICINA
  visionBackofficeSlide,
  copilotStudioSlide,
  demoHseSlide,
  verificarSlide,

  // PARTE 3: IN-SITU - EL TRADUCTOR UNIVERSAL
  datosOscurosSlide,
  higieneDatosSlide,  // Moved earlier: clean data before building
  visionCampoSlide,

  // PARTE 4: CASOS DE USO IN-SITU
  casoBitacoraSlide,
  casoFotosSlide,
  casoComunidadSlide,

  // PARTE 5: IMPLEMENTACIÓN Y CULTURA
  semaforoSlide,
  evangelizacionSlide,
  gobernanzaIASlide,

  // PARTE 6: CONCLUSIÓN
  roadmapSlide,
  metricasExitoSlide,
  qaSlide,
];
