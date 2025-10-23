// ==========================================
// CONFIGURACIÓN GLOBAL Y DATOS BASE
// ==========================================

// Fecha de inicio del plan (ajústala según tu inicio real)
const FECHA_INICIO_PLAN = new Date('2025-11-04'); // 4 de noviembre de 2024

// Peso corporal del usuario (en kg) - AJUSTAR SEGÚN EL USUARIO
const PESO_USUARIO = 68.25;

// ==========================================
// ESTRUCTURA DEL PLAN COMPLETO
// ==========================================

const PLAN_COMPLETO = {
    fases: [
        {
            id: 'fase1',
            nombre: 'FASE 1: TRANSICIÓN Y MANTENIMIENTO',
            duracion: 28, // días (4 semanas: del 4 nov al 1 dic)
            descripcion: 'Recuperación y búsqueda del mantenimiento calórico',
            
            semanas: [
                {
                    numero: 1,
                    nombre: 'Semana 1-2: Descarga Activa',
                    semanaInicio: 0, // Semana 0-1 dentro de la fase
                    mesociclo: 'descarga',
                    rir: '3-4',
                    cardio: '1-2 sesiones de LISS (30-45 min de caminata)',
                    calorias: '2600-2800 kcal',
                    proteina: '1.8 g/kg',
                    grasas: '25% del total calórico',
                    nota: 'Empieza con las calorías de tu fase de volumen. Monitoriza tu peso.'
                },
                {
                    numero: 2,
                    nombre: 'Semana 3-4: Búsqueda del Mantenimiento',
                    semanaInicio: 2, // Semana 2-3 dentro de la fase
                    mesociclo: 'mesociclo1',
                    rir: '2-3',
                    cardio: '2 sesiones de LISS (30-45 min)',
                    calorias: '2600-2800 kcal (ajustar según peso)',
                    proteina: '1.8 g/kg',
                    grasas: '25% del total',
                    nota: 'Monitoriza tu peso promedio semanal para encontrar tu mantenimiento real.'
                }
            ]
        },
        {
            id: 'fase2',
            nombre: 'FASE 2: DEFINICIÓN PRINCIPAL',
            duracion: 147, // días (21 semanas: del 2 dic al 28 abril)
            descripcion: 'Pérdida de grasa sostenible preservando masa muscular',
            
            semanas: [
                {
                    numero: 1,
                    nombre: 'Diciembre-Enero: Inicio del Déficit',
                    semanaInicio: 0, // Primeras ~8 semanas
                    mesociclo: 'mesociclo2',
                    rir: '1-2',
                    cardio: '3 sesiones de LISS (30-45 min) a 130-140 ppm',
                    calorias: '2200-2400 kcal',
                    proteina: '2.0-2.5 g/kg',
                    grasas: '0.8-1.0 g/kg',
                    nota: 'Déficit de 300-500 kcal. Mantén la fuerza como prioridad.'
                },
                {
                    numero: 2,
                    nombre: 'Febrero: Descanso de Dieta',
                    semanaInicio: 8, // Semanas 8-9 (diet break)
                    mesociclo: 'descarga',
                    rir: '3-4',
                    cardio: '2 sesiones de LISS',
                    calorias: 'Volver a mantenimiento (2700 kcal aprox)',
                    proteina: '1.8-2.0 g/kg',
                    grasas: '25% del total',
                    nota: 'Diet Break: 1-2 semanas en mantenimiento para resetear metabolismo y hormona leptina.'
                },
                {
                    numero: 3,
                    nombre: 'Marzo-Abril: Continuación del Déficit',
                    semanaInicio: 10, // Semanas 10-21 hasta el final de la fase
                    mesociclo: 'mesociclo3',
                    rir: '1-2',
                    cardio: '4 sesiones de LISS (40 min) o 3 LISS + 1 HIIT (10-15 min)',
                    calorias: '2100-2300 kcal',
                    proteina: '2.0-2.5 g/kg',
                    grasas: '0.8-1.0 g/kg',
                    nota: 'Ajusta calorías según tu nuevo peso. Proteína muy alta para preservar músculo.'
                }
            ]
        },
        {
            id: 'fase3',
            nombre: 'FASE 3: PULIDO FINAL',
            duracion: 49, // días (7 semanas: del 29 abril al 15 junio)
            descripcion: 'Alcanzar el pico de definición',
            
            semanas: [
                {
                    numero: 1,
                    nombre: 'Abril-Junio: Pico de Definición',
                    semanaInicio: 0, // Todas las 7 semanas de esta fase
                    mesociclo: 'mesociclo3',
                    rir: '1-2',
                    cardio: '4-5 sesiones de LISS (45 min) o 3 LISS + 2 HIIT',
                    calorias: '2000-2200 kcal',
                    proteina: '2.5 g/kg',
                    grasas: '0.8 g/kg',
                    nota: 'Último empujón hacia el objetivo. Ajusta si es necesario reducir 100-150 kcal más.'
                }
            ]
        },
        {
            id: 'fase4',
            nombre: 'FASE 4: MANTENIMIENTO DE VERANO',
            duracion: 999, // indefinido (del 16 junio en adelante)
            descripcion: 'Mantener el físico alcanzado y recuperar metabolismo',
            
            semanas: [
                {
                    numero: 1,
                    nombre: 'Junio: Dieta Inversa',
                    semanaInicio: 0, // Primeras 2-4 semanas de la fase
                    mesociclo: 'mesociclo1',
                    rir: '2-3',
                    cardio: '2-3 sesiones de LISS (30 min) o actividades recreativas',
                    calorias: 'Aumenta +100-150 kcal/semana gradualmente',
                    proteina: '2.0 g/kg',
                    grasas: '1.0 g/kg',
                    nota: 'Reverse diet gradual: aumenta calorías semanalmente hasta volver a mantenimiento sin ganar grasa.'
                },
                {
                    numero: 2,
                    nombre: 'Julio en adelante: Mantenimiento',
                    semanaInicio: 4, // A partir de la semana 4 de la fase
                    mesociclo: 'mesociclo1',
                    rir: '2-3',
                    cardio: '1-2 sesiones por semana o actividades que disfrutes',
                    calorias: 'Mantenimiento (2600-2800 kcal aprox)',
                    proteina: '1.8-2.0 g/kg',
                    grasas: '25% del total',
                    nota: 'Disfruta de tu físico. Mantén un estilo de vida activo y flexible.'
                }
            ]
        }
    ]
};


// ==========================================
// DATOS DE MESOCICLOS (HEREDADOS DEL CÓDIGO ANTERIOR)
// ==========================================

const rutinasData = {
    mesociclo1: {
        nombre: "Mesociclo 1 - Acumulación/Hipertrofia",
        descripcion: "RIR 1-2, enfoque en volumen",
        dias: {
            1: {
                nombre: "Día 1: Pecho, Hombros y Tríceps",
                ejercicios: [
                    { nombre: "Press de Banca en Máquina", detalles: "3 series x 6-10 reps", descanso: 150, rir: "1-2" },
                    { nombre: "Press Inclinado en Máquina", detalles: "3 series x 8-12 reps", descanso: 105, rir: "1-2" },
                    { nombre: "Fondos en Paralelas", detalles: "3 series x 8-12 reps", descanso: 105, rir: "1-2" },
                    { nombre: "Press de Hombro en Máquina", detalles: "3 series x 6-10 reps", descanso: 150, rir: "1-2" },
                    { nombre: "Elevaciones Laterales con Mancuernas", detalles: "4 series x 10-15 reps", descanso: 75, rir: "1-2" },
                    { nombre: "Press de Tríceps en Máquina", detalles: "3 series x 8-12 reps", descanso: 105, rir: "1-2" },
                    { nombre: "Extensiones de Tríceps en Polea", detalles: "3 series x 12-15 reps", descanso: 75, rir: "1-2" }
                ],
                activate: "Rotaciones externas hombro (banda) 2x15, Bird-dog 2x10/lado, Plancha 30s",
                mobilize: "Círculos de brazos, Rotaciones de torso, Cat-camel"
            },
            2: {
                nombre: "Día 2: Espalda, Hombros Posteriores y Bíceps",
                ejercicios: [
                    { nombre: "Dominadas o Jalón al Pecho", detalles: "3 series x 6-10 reps", descanso: 150, rir: "1-2" },
                    { nombre: "Remo en Máquina Horizontal", detalles: "3 series x 6-10 reps", descanso: 150, rir: "1-2" },
                    { nombre: "Remo con Polea Baja (agarre neutro)", detalles: "3 series x 10-12 reps", descanso: 105, rir: "1-2" },
                    { nombre: "Vuelos Posteriores en Máquina", detalles: "4 series x 12-15 reps", descanso: 75, rir: "1-2" },
                    { nombre: "Encogimientos con Mancuernas", detalles: "3 series x 10-15 reps", descanso: 75, rir: "1-2" },
                    { nombre: "Curl de Bíceps en Máquina", detalles: "3 series x 8-12 reps", descanso: 105, rir: "1-2" },
                    { nombre: "Curl Martillo con Mancuernas", detalles: "3 series x 10-15 reps", descanso: 105, rir: "1-2" }
                ],
                activate: "Band pull-aparts 2x15, Remo con banda 2x15, Puente glúteo 2x15",
                mobilize: "Dislocaciones de hombro (banda), Elevaciones escapulares, Rotaciones de muñecas/codos"
            },
            3: {
                nombre: "Día 3: Piernas Completo y Abdominales",
                ejercicios: [
                    { nombre: "Sentadilla Hack en Máquina", detalles: "4 series x 8-12 reps", descanso: 150, rir: "1-2" },
                    { nombre: "Prensa de Piernas", detalles: "4 series x 8-15 reps", descanso: 150, rir: "1-2" },
                    { nombre: "Curl Femoral", detalles: "3 series x 10-15 reps", descanso: 75, rir: "1-2" },
                    { nombre: "Sentadilla Goblet con Mancuerna", detalles: "3-4 series x 8-15 reps", descanso: 150, rir: "1-2" },
                    { nombre: "Extensiones de Cuádriceps", detalles: "3 series x 12-20 reps", descanso: 75, rir: "1-2" },
                    { nombre: "Hip Thrust en Máquina", detalles: "3 series x 10-15 reps", descanso: 150, rir: "1-2" },
                    { nombre: "Elevación de Talones", detalles: "4 series x 10-20 reps", descanso: 75, rir: "1-2" },
                    { nombre: "Abdominales (Crunch o VKR)", detalles: "3-4 series x 12-15 reps", descanso: 60, rir: "1-2" }
                ],
                activate: "Puente glúteo 2x15, Patadas de glúteo 2x15/pierna, Sentadilla goblet ligera 2x10",
                mobilize: "Balanceos de pierna, Círculos de cadera, Movilidad de tobillo"
            },
            4: {
                nombre: "Día 4: Descanso",
                ejercicios: [],
                activate: "",
                mobilize: ""
            }
        }
    },
    
    mesociclo2: {
        nombre: "Mesociclo 2 - Intensificación/Fuerza",
        descripcion: "RIR 0-1 en principales, 1-2 en auxiliares",
        dias: {
            1: {
                nombre: "Día 1: Pecho, Hombros y Tríceps - FUERZA",
                ejercicios: [
                    { nombre: "Press de Banca en Máquina", detalles: "3 series x 6-8 reps", descanso: 210, rir: "0-1" },
                    { nombre: "Press Inclinado en Máquina", detalles: "3 series x 8-12 reps", descanso: 105, rir: "1-2" },
                    { nombre: "Fondos en Paralelas", detalles: "3 series x 8-12 reps", descanso: 105, rir: "1-2" },
                    { nombre: "Press de Hombro en Máquina", detalles: "3 series x 6-8 reps", descanso: 210, rir: "0-1" },
                    { nombre: "Elevaciones Laterales", detalles: "4 series x 10-15 reps", descanso: 75, rir: "1-2" },
                    { nombre: "Press de Tríceps en Máquina", detalles: "3 series x 8-12 reps", descanso: 105, rir: "1-2" },
                    { nombre: "Extensiones de Tríceps en Polea", detalles: "3 series x 12-15 reps", descanso: 75, rir: "1-2" }
                ],
                activate: "Rotaciones externas hombro 2x15, Bird-dog 2x10/lado, Plancha 30s",
                mobilize: "Círculos de brazos, Rotaciones de torso, Cat-camel"
            },
            2: {
                nombre: "Día 2: Espalda, Hombros Posteriores y Bíceps - FUERZA",
                ejercicios: [
                    { nombre: "Dominadas o Jalón al Pecho", detalles: "3 series x 6-8 reps", descanso: 210, rir: "0-1" },
                    { nombre: "Remo en Máquina Horizontal", detalles: "3 series x 6-8 reps", descanso: 210, rir: "0-1" },
                    { nombre: "Remo con Polea Baja (agarre prono)", detalles: "3 series x 8-10 reps", descanso: 150, rir: "0-1" },
                    { nombre: "Vuelos Posteriores en Máquina", detalles: "4 series x 12-15 reps", descanso: 75, rir: "1-2" },
                    { nombre: "Encogimientos con Mancuernas", detalles: "3 series x 10-15 reps", descanso: 75, rir: "1-2" },
                    { nombre: "Curl de Bíceps en Máquina", detalles: "3 series x 6-10 reps", descanso: 105, rir: "0-1" },
                    { nombre: "Curl Martillo", detalles: "3 series x 10-15 reps", descanso: 105, rir: "1-2" }
                ],
                activate: "Band pull-aparts 2x15, Remo con banda 2x15, Puente glúteo 2x15",
                mobilize: "Dislocaciones de hombro, Elevaciones escapulares, Rotaciones de muñecas"
            },
            3: {
                nombre: "Día 3: Piernas y Abdominales - FUERZA",
                ejercicios: [
                    { nombre: "Sentadilla Hack", detalles: "4 series x 6-10 reps", descanso: 210, rir: "0-1" },
                    { nombre: "Prensa de Piernas", detalles: "4 series x 8-12 reps", descanso: 150, rir: "0-1" },
                    { nombre: "Curl Femoral", detalles: "3 series x 6-10 reps", descanso: 105, rir: "0-1" },
                    { nombre: "Sentadilla Goblet", detalles: "3-4 series x 6-10 reps", descanso: 150, rir: "0-1" },
                    { nombre: "Extensiones de Cuádriceps", detalles: "3 series x 12-20 reps", descanso: 75, rir: "1-2" },
                    { nombre: "Hip Thrust", detalles: "3 series x 8-12 reps", descanso: 150, rir: "0-1" },
                    { nombre: "Elevación de Talones", detalles: "4 series x 10-20 reps", descanso: 75, rir: "1-2" },
                    { nombre: "Abdominales", detalles: "3-4 series x 10-15 reps", descanso: 60, rir: "0-1" }
                ],
                activate: "Puente glúteo 2x15, Patadas de glúteo 2x15/pierna, Sentadilla goblet 2x10",
                mobilize: "Balanceos de pierna, Círculos de cadera, Movilidad de tobillo"
            },
            4: {
                nombre: "Día 4: Descanso",
                ejercicios: [],
                activate: "",
                mobilize: ""
            }
        }
    },
    
    mesociclo3: {
        nombre: "Mesociclo 3 - Pico de Hipertrofia",
        descripcion: "RIR 0-2, máxima intensidad",
        dias: {
            1: {
                nombre: "Día 1: Pecho, Hombros y Tríceps - HIPERTROFIA MÁXIMA",
                ejercicios: [
                    { nombre: "Press de Banca en Máquina", detalles: "3 series x 8-12 reps", descanso: 150, rir: "0-2" },
                    { nombre: "Press Inclinado", detalles: "3 series x 8-12 reps", descanso: 105, rir: "0-2" },
                    { nombre: "Fondos en Paralelas", detalles: "3 series x 8-12 reps", descanso: 105, rir: "0-2" },
                    { nombre: "Press de Hombro", detalles: "3 series x 8-12 reps", descanso: 150, rir: "0-2" },
                    { nombre: "Elevaciones Laterales", detalles: "4 series x 10-15 reps", descanso: 75, rir: "0-2" },
                    { nombre: "Press de Tríceps", detalles: "3 series x 8-12 reps", descanso: 105, rir: "0-2" },
                    { nombre: "Extensiones de Tríceps", detalles: "3 series x 12-15 reps", descanso: 75, rir: "0-2" }
                ],
                activate: "Rotaciones externas 2x15, Bird-dog 2x10/lado, Plancha 30s",
                mobilize: "Círculos de brazos, Rotaciones de torso, Cat-camel"
            },
            2: {
                nombre: "Día 2: Espalda, Hombros Posteriores y Bíceps - HIPERTROFIA MÁXIMA",
                ejercicios: [
                    { nombre: "Dominadas o Jalón", detalles: "3 series x 8-12 reps", descanso: 150, rir: "0-2" },
                    { nombre: "Remo en Máquina", detalles: "3 series x 8-12 reps", descanso: 150, rir: "0-2" },
                    { nombre: "Remo con Polea Baja", detalles: "3 series x 10-12 reps", descanso: 105, rir: "0-2" },
                    { nombre: "Vuelos Posteriores", detalles: "4 series x 12-15 reps", descanso: 75, rir: "0-2" },
                    { nombre: "Encogimientos", detalles: "3 series x 10-15 reps", descanso: 75, rir: "0-2" },
                    { nombre: "Curl de Bíceps", detalles: "3 series x 8-12 reps", descanso: 105, rir: "0-2" },
                    { nombre: "Curl Martillo", detalles: "3 series x 10-15 reps", descanso: 105, rir: "0-2" }
                ],
                activate: "Band pull-aparts 2x15, Remo banda 2x15, Puente glúteo 2x15",
                mobilize: "Dislocaciones de hombro, Elevaciones escapulares"
            },
            3: {
                nombre: "Día 3: Piernas y Abdominales - HIPERTROFIA MÁXIMA",
                ejercicios: [
                    { nombre: "Sentadilla Hack", detalles: "4 series x 8-12 reps", descanso: 150, rir: "0-2" },
                    { nombre: "Prensa de Piernas", detalles: "4 series x 10-15 reps", descanso: 150, rir: "0-2" },
                    { nombre: "Curl Femoral", detalles: "3 series x 10-15 reps", descanso: 75, rir: "0-2" },
                    { nombre: "Sentadilla Goblet", detalles: "3-4 series x 8-12 reps", descanso: 150, rir: "0-2" },
                    { nombre: "Extensiones de Cuádriceps", detalles: "3 series x 12-20 reps", descanso: 75, rir: "0-2" },
                    { nombre: "Hip Thrust", detalles: "3 series x 10-15 reps", descanso: 150, rir: "0-2" },
                    { nombre: "Elevación de Talones", detalles: "4 series x 10-20 reps", descanso: 75, rir: "0-2" },
                    { nombre: "Abdominales", detalles: "3-4 series x 12-15 reps", descanso: 60, rir: "0-1" }
                ],
                activate: "Puente glúteo 2x15, Patadas 2x15/pierna, Sentadilla goblet 2x10",
                mobilize: "Balanceos de pierna, Círculos de cadera, Movilidad de tobillo"
            },
            4: {
                nombre: "Día 4: Descanso",
                ejercicios: [],
                activate: "",
                mobilize: ""
            }
        }
    },
    
    descarga: {
        nombre: "Semana de Descarga",
        descripcion: "RIR 3-4, volumen reducido",
        dias: {
            1: {
                nombre: "Día 1: Pecho, Hombros y Tríceps - DESCARGA",
                ejercicios: [
                    { nombre: "Press de Banca", detalles: "1-2 series x 8-10 reps", descanso: 120, rir: "3-4" },
                    { nombre: "Press Inclinado", detalles: "1-2 series x 10-12 reps", descanso: 90, rir: "3-4" },
                    { nombre: "Fondos", detalles: "1-2 series x 10-12 reps", descanso: 90, rir: "3-4" },
                    { nombre: "Press de Hombro", detalles: "1-2 series x 8-10 reps", descanso: 120, rir: "3-4" },
                    { nombre: "Elevaciones Laterales", detalles: "2 series x 12-15 reps", descanso: 60, rir: "3-4" },
                    { nombre: "Press de Tríceps", detalles: "1-2 series x 10-12 reps", descanso: 90, rir: "3-4" },
                    { nombre: "Extensiones de Tríceps", detalles: "1-2 series x 12-15 reps", descanso: 60, rir: "3-4" }
                ],
                activate: "Rotaciones suaves, movimientos ligeros",
                mobilize: "Círculos de brazos, estiramientos dinámicos"
            },
            2: {
                nombre: "Día 2: Espalda, Hombros Posteriores y Bíceps - DESCARGA",
                ejercicios: [
                    { nombre: "Dominadas o Jalón", detalles: "1-2 series x 8-10 reps", descanso: 120, rir: "3-4" },
                    { nombre: "Remo en Máquina", detalles: "1-2 series x 8-10 reps", descanso: 120, rir: "3-4" },
                    { nombre: "Remo con Polea", detalles: "1-2 series x 10-12 reps", descanso: 90, rir: "3-4" },
                    { nombre: "Vuelos Posteriores", detalles: "2 series x 12-15 reps", descanso: 60, rir: "3-4" },
                    { nombre: "Encogimientos", detalles: "1-2 series x 12-15 reps", descanso: 60, rir: "3-4" },
                    { nombre: "Curl de Bíceps", detalles: "1-2 series x 10-12 reps", descanso: 90, rir: "3-4" },
                    { nombre: "Curl Martillo", detalles: "1-2 series x 12-15 reps", descanso: 90, rir: "3-4" }
                ],
                activate: "Band pull-aparts ligeros, movimientos suaves",
                mobilize: "Movilidad escapular, rotaciones"
            },
            3: {
                nombre: "Día 3: Piernas y Abdominales - DESCARGA",
                ejercicios: [
                    { nombre: "Sentadilla Hack", detalles: "2 series x 10-12 reps", descanso: 120, rir: "3-4" },
                    { nombre: "Prensa de Piernas", detalles: "2 series x 10-15 reps", descanso: 120, rir: "3-4" },
                    { nombre: "Curl Femoral", detalles: "1-2 series x 12-15 reps", descanso: 60, rir: "3-4" },
                    { nombre: "Sentadilla Goblet", detalles: "2 series x 10-12 reps", descanso: 120, rir: "3-4" },
                    { nombre: "Extensiones de Cuádriceps", detalles: "1-2 series x 15-20 reps", descanso: 60, rir: "3-4" },
                    { nombre: "Hip Thrust", detalles: "1-2 series x 12-15 reps", descanso: 120, rir: "3-4" },
                    { nombre: "Elevación de Talones", detalles: "2 series x 15-20 reps", descanso: 60, rir: "3-4" },
                    { nombre: "Abdominales", detalles: "2 series x 15-20 reps", descanso: 60, rir: "2-3" }
                ],
                activate: "Movimientos ligeros de cadera y piernas",
                mobilize: "Movilidad de tobillo, círculos de cadera"
            },
            4: {
                nombre: "Día 4: Descanso",
                ejercicios: [],
                activate: "",
                mobilize: ""
            }
        }
    }
};

// ==========================================
// CONTINUARÁ EN LA PARTE 2
// ==========================================
// ==========================================
// CONTINUACIÓN DE app.js - PARTE 2
// ==========================================

// ==========================================
// FUNCIONES DE CÁLCULO DE FASE Y SEMANA
// ==========================================

/**
 * Calcula qué fase del plan corresponde a la fecha actual
 */
function calcularFaseActual() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    const diasDesdeInicio = Math.floor((hoy - FECHA_INICIO_PLAN) / (1000 * 60 * 60 * 24));
    
    let diasAcumulados = 0;
    
    for (let fase of PLAN_COMPLETO.fases) {
        if (diasDesdeInicio < diasAcumulados + fase.duracion) {
            const diasEnFase = diasDesdeInicio - diasAcumulados;
            const semanaEnFase = Math.floor(diasEnFase / 7);
            
            // Determinar qué configuración de semana aplicar según semanaInicio
            let configSemana = fase.semanas[0]; // Por defecto la primera
            
            for (let i = fase.semanas.length - 1; i >= 0; i--) {
                if (semanaEnFase >= fase.semanas[i].semanaInicio) {
                    configSemana = fase.semanas[i];
                    break;
                }
            }
            
            return {
                fase: fase,
                configSemana: configSemana,
                diasEnFase: diasEnFase,
                semanaEnFase: semanaEnFase + 1,
                semanaGlobal: Math.floor(diasDesdeInicio / 7) + 1
            };
        }
        diasAcumulados += fase.duracion;
    }
    
    // Si superamos todas las fases, devolver la última (mantenimiento)
    const ultimaFase = PLAN_COMPLETO.fases[PLAN_COMPLETO.fases.length - 1];
    const diasEnFase = diasDesdeInicio - diasAcumulados + ultimaFase.duracion;
    const semanaEnFase = Math.floor(diasEnFase / 7);
    
    // En mantenimiento, después de 4 semanas cambiar a la segunda configuración
    let configSemana = semanaEnFase >= 4 ? ultimaFase.semanas[1] : ultimaFase.semanas[0];
    
    return {
        fase: ultimaFase,
        configSemana: configSemana,
        diasEnFase: diasEnFase,
        semanaEnFase: semanaEnFase + 1,
        semanaGlobal: Math.floor(diasDesdeInicio / 7) + 1
    };
}

/**
 * Obtiene qué día de entrenamiento corresponde a hoy
 */
function obtenerDiaEntrenamiento(diaSemana) {
    // Ciclo: D1, D2, D3, Descanso, D1, D2, D3, Descanso
    const mapeo = {
        0: 3,  // Domingo -> Día 3
        1: 1,  // Lunes -> Día 1
        2: 2,  // Martes -> Día 2
        3: 3,  // Miércoles -> Día 3
        4: 4,  // Jueves -> Descanso
        5: 1,  // Viernes -> Día 1
        6: 2   // Sábado -> Día 2
    };
    return mapeo[diaSemana];
}

/**
 * Obtiene la fecha formateada en español
 */
function obtenerFechaFormateada() {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const fecha = new Date();
    const diaSemana = dias[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();
    
    return {
        completa: `${diaSemana}, ${dia} de ${mes} de ${anio}`,
        diaSemana: diaSemana,
        numeroSemana: fecha.getDay(),
        dia: dia,
        mes: mes
    };
}

function calcularCarbohidratos(caloriasStr, proteinaStr, grasasStr, pesoUsuario) {
    try {
        // Usamos el rango bajo de calorías para el cálculo (ej: "2600-2800" -> 2600)
        const calorias = parseFloat(caloriasStr.split('-')[0]); 
        const proteinaGramos = parseFloat(proteinaStr) * pesoUsuario;

        // Calculamos las grasas en gramos a partir del porcentaje calórico
        const grasasGramos = (calorias * (parseFloat(grasasStr) / 100)) / 9;

        const caloriasDeProteina = proteinaGramos * 4;
        const caloriasDeGrasas = grasasGramos * 9;

        const caloriasRestantes = calorias - (caloriasDeProteina + caloriasDeGrasas);
        const carbohidratosGramos = Math.round(caloriasRestantes / 4);

        return `${carbohidratosGramos} g`;
    } catch (e) {
        console.error("Error calculando carbohidratos:", e);
        return 'Cargando...'; // Devuelve un valor por defecto si hay error
    }
}

// ==========================================
// RENDERIZADO DE PANTALLA 1: TU PLAN DE HOY
// ==========================================

function renderizarPantallaHoy() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    const fecha = obtenerFechaFormateada();
    
    // ============================================
    // LÓGICA ESPECIAL: SI EL PLAN NO HA COMENZADO
    // ============================================
    if (hoy < FECHA_INICIO_PLAN) {
        const diasFaltantes = Math.ceil((FECHA_INICIO_PLAN - hoy) / (1000 * 60 * 60 * 24));
        
        document.getElementById('fecha-actual').textContent = fecha.completa;
        document.getElementById('fase-nombre').textContent = `🔜 EL PLAN COMIENZA EN ${diasFaltantes} DÍAS`;
        
        // Mostrar vista previa del primer día (Fase 1, Descarga, Día 1)
        const faseInicial = PLAN_COMPLETO.fases[0];
        const configInicial = faseInicial.semanas[0];
        
        // Título especial indicando que es vista previa
        document.getElementById('dia-entrenamiento-nombre').textContent = 
            '👀 Vista Previa: ' + rutinasData['descarga'].dias[1].nombre;
        document.getElementById('training-meta').textContent = 
            'Así será tu primer día de entrenamiento (Lunes 4 de Noviembre)';
        
        // Renderizar ejercicios de la primera semana
        const container = document.getElementById('exercise-list');
        container.innerHTML = '';
        
        rutinasData['descarga'].dias[1].ejercicios.forEach((ejercicio, index) => {
            const div = document.createElement('div');
            div.className = 'exercise-item';
            div.dataset.index = index;
            
            div.innerHTML = `
                <div class="exercise-header">
                    <div class="checkbox"></div>
                    <div class="exercise-content">
                        <div class="exercise-name">${ejercicio.nombre}</div>
                        <div class="exercise-meta">${ejercicio.detalles} | <strong>RIR ${ejercicio.rir}</strong></div>
                    </div>
                </div>
                <div class="exercise-actions">
                    <button class="btn-exercise" disabled style="opacity: 0.5;">
                        ⚖️ Peso
                    </button>
                    <button class="btn-exercise" onclick="iniciarTemporizador(${ejercicio.descanso})">
                        ⏱️ ${formatearTiempoBoton(ejercicio.descanso)}
                    </button>
                </div>
            `;
            
            container.appendChild(div);
        });
        
        document.getElementById('ver-calentamiento').style.display = 'block';
        
        // Cardio y nutrición de la primera semana (vista previa)
        document.getElementById('cardio-plan').innerHTML = 
            `<span class="cardio-highlight">📍 ${configInicial.cardio}</span>`;
        document.getElementById('calorias-objetivo').textContent = configInicial.calorias;
        document.getElementById('proteina-objetivo').textContent = configInicial.proteina;
        document.getElementById('grasas-objetivo').textContent = configInicial.grasas;
        document.getElementById('nutrition-note').textContent = `💡 ${configInicial.nota}`;
        document.getElementById('nutrition-note').style.display = 'block';
        
        return; // Detener aquí - no ejecutar el código normal
    }
    
    // ============================================
    // LÓGICA NORMAL: EL PLAN YA COMENZÓ
    // ============================================
    const faseInfo = calcularFaseActual();
    const diaEntrenamiento = obtenerDiaEntrenamiento(fecha.numeroSemana);
    
    // Actualizar encabezado
    document.getElementById('fecha-actual').textContent = fecha.completa;
    document.getElementById('fase-nombre').textContent = faseInfo.fase.nombre;
    
    // Renderizar módulo de entrenamiento
    renderizarModuloEntrenamiento(faseInfo, diaEntrenamiento);
    
    // Renderizar módulo de cardio
    renderizarModuloCardio(faseInfo);
    
    // Renderizar módulo de nutrición
    renderizarModuloNutricion(faseInfo);
}

function renderizarModuloEntrenamiento(faseInfo, diaEntrenamiento) {
    const mesociclo = faseInfo.configSemana.mesociclo;
    const rutinaDia = rutinasData[mesociclo].dias[diaEntrenamiento];
    
    document.getElementById('dia-entrenamiento-nombre').textContent = rutinaDia.nombre;
    
    if (diaEntrenamiento === 4) {
        // Día de descanso
        document.getElementById('training-meta').textContent = '';
        document.getElementById('exercise-list').innerHTML = `
            <div class="rest-day">
                <div class="rest-day-icon">😴</div>
                <h3>¡Hoy es Día de Descanso!</h3>
                <p>Recupera energías, haz movilidad ligera o estiramientos suaves. La recuperación es esencial para el progreso.</p>
            </div>
        `;
        document.getElementById('ver-calentamiento').style.display = 'none';
        return;
    }
    
    // Día de entrenamiento
    document.getElementById('training-meta').textContent = `${rutinasData[mesociclo].descripcion} | RIR objetivo: ${faseInfo.configSemana.rir}`;
    document.getElementById('ver-calentamiento').style.display = 'block';
    
    const container = document.getElementById('exercise-list');
    container.innerHTML = '';
    
    const progreso = cargarProgreso(mesociclo, diaEntrenamiento);
    
    rutinaDia.ejercicios.forEach((ejercicio, index) => {
        const completado = progreso[index] || false;
        
        const div = document.createElement('div');
        div.className = `exercise-item ${completado ? 'completed' : ''}`;
        div.dataset.index = index;

        // Dentro de renderizarModuloEntrenamiento, en el forEach de ejercicios:
        div.innerHTML = `
            <div class="exercise-header" onclick="toggleEjercicio(${index})">
                <div class="checkbox"></div>
                <div class="exercise-content">
                    <div class="exercise-name">${ejercicio.nombre}</div>
                    <div class="exercise-meta">${ejercicio.detalles} | <strong>RIR ${ejercicio.rir}</strong></div>
                </div>
            </div>
            <div class="exercise-actions">
                <button class="btn-exercise" onclick="abrirHistorialEjercicio(${index}, '${ejercicio.nombre}')">
                    📊 Historial
                </button>
                <button class="btn-exercise" onclick="abrirModalPeso(${index}, '${ejercicio.nombre}')">
                    ⚖️ Peso
                </button>
                <button class="btn-exercise" onclick="iniciarTemporizador(${ejercicio.descanso})">
                    ⏱️ ${formatearTiempoBoton(ejercicio.descanso)}
                </button>
            </div>
        `;
        
        container.appendChild(div);
    });
    
    actualizarProgreso();
}

function renderizarModuloCardio(faseInfo) {
    const cardioText = faseInfo.configSemana.cardio;
    const cardioEl = document.getElementById('cardio-plan');
    
    if (cardioText.toLowerCase().includes('sin cardio') || cardioText.toLowerCase().includes('no hay cardio')) {
        cardioEl.innerHTML = '✅ Hoy no hay cardio programado';
    } else {
        cardioEl.innerHTML = `<span class="cardio-highlight">📍 ${cardioText}</span>`;
    }
}

function renderizarModuloNutricion(faseInfo) {
    const config = faseInfo.configSemana;
    
    document.getElementById('calorias-objetivo').textContent = config.calorias;
    document.getElementById('proteina-objetivo').textContent = config.proteina;
    document.getElementById('grasas-objetivo').textContent = config.grasas;
    document.getElementById('carbos-objetivo').textContent = calcularCarbohidratos(config.calorias, config.proteina, config.grasas, PESO_USUARIO);
    
    if (config.nota) {
        document.getElementById('nutrition-note').textContent = `💡 ${config.nota}`;
        document.getElementById('nutrition-note').style.display = 'block';
    } else {
        document.getElementById('nutrition-note').style.display = 'none';
    }
}

function formatearTiempoBoton(segundos) {
    const mins = Math.floor(segundos / 60);
    const secs = segundos % 60;
    if (secs === 0) return `${mins}min`;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ==========================================
// RENDERIZADO DE PANTALLA 2: VISTA SEMANAL
// ==========================================

function renderizarVistaSemanal() {
    const container = document.getElementById('week-calendar');
    container.innerHTML = '';
    
    const hoy = new Date();
    const diaActual = hoy.getDay();
    
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const faseInfo = calcularFaseActual();
    
    dias.forEach((nombreDia, index) => {
        const diaEntrenamiento = obtenerDiaEntrenamiento(index);
        const mesociclo = faseInfo.configSemana.mesociclo;
        const rutinaDia = rutinasData[mesociclo].dias[diaEntrenamiento];
        
        const esHoy = index === diaActual;
        
        const div = document.createElement('div');
        div.className = `day-card ${esHoy ? 'today' : ''}`;
        
        let resumenEntreno = '';
        if (diaEntrenamiento === 4) {
            resumenEntreno = '💤 Descanso';
        } else {
            const nombreCorto = rutinaDia.nombre.split(':')[1]?.trim() || rutinaDia.nombre;
            resumenEntreno = `🏋️ ${nombreCorto}`;
        }
        
        const cardioResumen = faseInfo.configSemana.cardio.toLowerCase().includes('sin') ? 
            '❌ Sin Cardio' : 
            '🏃 ' + faseInfo.configSemana.cardio.split(' ')[0] + ' ' + faseInfo.configSemana.cardio.split(' ')[1];
        
        div.innerHTML = `
            <div class="day-header">
                <div class="day-name">${nombreDia}</div>
                ${esHoy ? '<div class="day-badge">HOY</div>' : ''}
            </div>
            <div class="day-summary">
                <div>${resumenEntreno}</div>
                <div>${cardioResumen}</div>
            </div>
        `;
        
        container.appendChild(div);
    });
}

// ==========================================
// RENDERIZADO DE PANTALLA 3: PROGRESO
// ==========================================

function renderizarPantallaProgreso() {
    cargarGraficosPeso();
    cargarGaleriaFotos();
    renderizarVolumenSemanal(); // AÑADIR ESTA LÍNEA
}

function cargarGraficosPeso() {
    const registros = obtenerRegistrosMedidas();
    
    if (registros.length === 0) {
        const ctx = document.getElementById('peso-chart');
        if (ctx) {
            ctx.parentElement.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">Aún no hay datos registrados. ¡Comienza a medir tu progreso!</p>';
        }
        return;
    }
    
    // Gráfico de peso
    const labels = registros.map(r => {
        const fecha = new Date(r.fecha);
        return `${fecha.getDate()}/${fecha.getMonth() + 1}`;
    });
    
    const dataPeso = registros.map(r => r.peso);
    const dataCintura = registros.map(r => r.cintura || null);
    
    const ctxPeso = document.getElementById('peso-chart');
    if (ctxPeso) {
        if (window.pesoChart) window.pesoChart.destroy();
        
        window.pesoChart = new Chart(ctxPeso, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Peso Corporal (kg)',
                    data: dataPeso,
                    borderColor: '#e94560',
                    backgroundColor: 'rgba(233, 69, 96, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { labels: { color: '#ffffff' } },
                    title: {
                        display: true,
                        text: 'Evolución del Peso Corporal',
                        color: '#ffffff'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: { color: '#a8b2d1' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#a8b2d1' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });
    }
    
    // Gráfico de medidas
    const ctxMedidas = document.getElementById('medidas-chart');
    if (ctxMedidas && dataCintura.some(v => v !== null)) {
        if (window.medidasChart) window.medidasChart.destroy();
        
        window.medidasChart = new Chart(ctxMedidas, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Cintura (cm)',
                        data: dataCintura,
                        borderColor: '#00d4aa',
                        backgroundColor: 'rgba(0, 212, 170, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Cadera (cm)',
                        data: registros.map(r => r.cadera || null),
                        borderColor: '#ffa500',
                        backgroundColor: 'rgba(255, 165, 0, 0.1)',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: { labels: { color: '#ffffff' } },
                    title: {
                        display: true,
                        text: 'Medidas Corporales',
                        color: '#ffffff'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: { color: '#a8b2d1' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#a8b2d1' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });
    }
}

function cargarGaleriaFotos() {
    const fotos = JSON.parse(localStorage.getItem('fotos_progreso') || '[]');
    const container = document.getElementById('photo-gallery');
    
    if (fotos.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); text-align: center; grid-column: 1/-1;">No hay fotos aún</p>';
        return;
    }
    
    container.innerHTML = fotos.map((foto, index) => `
        <div class="photo-item">
            <img src="${foto.url}" alt="Progreso ${index + 1}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
        </div>
    `).join('');
}

// ==========================================
// FUNCIONES DE PROGRESO Y ALMACENAMIENTO
// ==========================================

function toggleEjercicio(index) {
    const faseInfo = calcularFaseActual();
    const fecha = obtenerFechaFormateada();
    const diaEntrenamiento = obtenerDiaEntrenamiento(fecha.numeroSemana);
    const mesociclo = faseInfo.configSemana.mesociclo;
    
    const ejercicioElement = document.querySelector(`.exercise-item[data-index="${index}"]`);
    ejercicioElement.classList.toggle('completed');
    
    guardarProgreso(mesociclo, diaEntrenamiento, index, ejercicioElement.classList.contains('completed'));
    actualizarProgreso();
}

function guardarProgreso(mesociclo, dia, indexEjercicio, completado) {
    const clave = `progreso_${mesociclo}_dia${dia}`;
    let progreso = JSON.parse(localStorage.getItem(clave) || '{}');
    progreso[indexEjercicio] = completado;
    localStorage.setItem(clave, JSON.stringify(progreso));
}

function cargarProgreso(mesociclo, dia) {
    const clave = `progreso_${mesociclo}_dia${dia}`;
    return JSON.parse(localStorage.getItem(clave) || '{}');
}

function actualizarProgreso() {
    // Esta función ya no actualiza una barra de progreso global
    // ya que el diseño no lo requiere, pero la dejamos por compatibilidad
}

function guardarMedidas() {
    const peso = parseFloat(document.getElementById('peso-input').value);
    const cintura = parseFloat(document.getElementById('cintura-input').value);
    const cadera = parseFloat(document.getElementById('cadera-input').value);
    const pecho = parseFloat(document.getElementById('pecho-input').value);
    
    if (!peso) {
        alert('Por favor ingresa al menos el peso corporal');
        return;
    }
    
    const registro = {
        fecha: new Date().toISOString(),
        peso: peso,
        cintura: cintura || null,
        cadera: cadera || null,
        pecho: pecho || null
    };
    
    let registros = JSON.parse(localStorage.getItem('registros_medidas') || '[]');
    registros.push(registro);
    localStorage.setItem('registros_medidas', JSON.stringify(registros));
    
    // Limpiar inputs
    document.getElementById('peso-input').value = '';
    document.getElementById('cintura-input').value = '';
    document.getElementById('cadera-input').value = '';
    document.getElementById('pecho-input').value = '';
    
    alert('✅ Medidas guardadas correctamente');
    cargarGraficosPeso();
}

function obtenerRegistrosMedidas() {
    return JSON.parse(localStorage.getItem('registros_medidas') || '[]');
}

function agregarFoto() {
    alert('📸 Funcionalidad de fotos: Toma fotos con tu cámara y guárdalas manualmente. En una versión futura implementaremos carga de imágenes.');
}

// ==========================================
// TEMPORIZADOR DE DESCANSO
// ==========================================

let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;

function iniciarTemporizador(segundos) {
    mostrarTemporizador();
    timerSeconds = segundos;
    actualizarDisplayTimer();
    iniciarTimer();
    
    // Solicitar permisos de notificación si no los tiene
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

function mostrarTemporizador() {
    document.getElementById('timer-float').style.display = 'block';
}

function ocultarTemporizador() {
    pararTimer();
    document.getElementById('timer-float').style.display = 'none';
}

function iniciarTimer() {
    if (timerRunning) return;
    
    timerRunning = true;
    document.getElementById('timer-start').style.display = 'none';
    document.getElementById('timer-pause').style.display = 'inline-block';
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        actualizarDisplayTimer();
        
        if (timerSeconds <= 0) {
            pararTimer();
            reproducirSonido();
            mostrarNotificacion();
        }
    }, 1000);
}

function pausarTimer() {
    if (!timerRunning) return;
    
    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('timer-start').style.display = 'inline-block';
    document.getElementById('timer-pause').style.display = 'none';
}

function resetearTimer() {
    pausarTimer();
    timerSeconds = 0;
    actualizarDisplayTimer();
}

function pararTimer() {
    pausarTimer();
    timerSeconds = 0;
    document.getElementById('timer-display').textContent = '¡Tiempo!';
}

function actualizarDisplayTimer() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    document.getElementById('timer-display').textContent = 
        `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function reproducirSonido() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Audio no disponible');
    }
}

function mostrarNotificacion() {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('⏱️ ¡Descanso Terminado!', {
            body: '¡Es hora de la siguiente serie!',
            icon: './icons/icon-192x192.png',
            vibrate: [200, 100, 200]
        });
    }
}

// ==========================================
// MODALES
// ==========================================

let ejercicioActualIndex = null;

function abrirModalCalentamiento() {
    const faseInfo = calcularFaseActual();
    const fecha = obtenerFechaFormateada();
    const diaEntrenamiento = obtenerDiaEntrenamiento(fecha.numeroSemana);
    const mesociclo = faseInfo.configSemana.mesociclo;
    const rutinaDia = rutinasData[mesociclo].dias[diaEntrenamiento];
    
    document.getElementById('activate-content').textContent = rutinaDia.activate || 'Ejercicios de activación específicos para hoy';
    document.getElementById('mobilize-content').textContent = rutinaDia.mobilize || 'Movilidad dinámica específica';
    
    document.getElementById('modal-calentamiento').classList.add('active');
}

function cerrarModalCalentamiento() {
    document.getElementById('modal-calentamiento').classList.remove('active');
}

function abrirModalPeso(index, nombreEjercicio) {
    ejercicioActualIndex = index;
    document.getElementById('peso-exercise-name').textContent = nombreEjercicio;
    document.getElementById('weight-input').value = '';
    document.getElementById('reps-input').value = '';
    document.getElementById('series-input').value = '1';
    document.getElementById('rir-input').value = ''; // AÑADIR ESTA LÍNEA
    document.getElementById('modal-peso').classList.add('active');
}

function cerrarModalPeso() {
    document.getElementById('modal-peso').classList.remove('active');
    ejercicioActualIndex = null;
}

function guardarPeso() {
    const peso = parseFloat(document.getElementById('weight-input').value);
    const reps = parseInt(document.getElementById('reps-input').value);
    const serie = parseInt(document.getElementById('series-input').value);
    const rir = parseInt(document.getElementById('rir-input').value);
    
    if (!peso || !reps) {
        alert('Por favor completa peso y repeticiones');
        return;
    }
    
    if (rir === undefined || rir === null || rir < 0 || rir > 4) {
        alert('⚠️ Por favor indica el RIR (Reps in Reserve) que experimentaste.\n\n0 = Fallo muscular\n1-2 = Zona óptima de hipertrofia\n3+ = Serie demasiado fácil');
        return;
    }
    
    const faseInfo = calcularFaseActual();
    const fecha = obtenerFechaFormateada();
    const diaEntrenamiento = obtenerDiaEntrenamiento(fecha.numeroSemana);
    const mesociclo = faseInfo.configSemana.mesociclo;
    
    const registro = {
        fecha: new Date().toISOString(),
        peso: peso,
        reps: reps,
        serie: serie,
        rir: rir,
        volumen: peso * reps
    };
    
    const clave = `pesos_${mesociclo}_dia${diaEntrenamiento}_ex${ejercicioActualIndex}`;
    let historial = JSON.parse(localStorage.getItem(clave) || '[]');
    historial.push(registro);
    localStorage.setItem(clave, JSON.stringify(historial));
    
    // Feedback según RIR
    let mensaje = `✅ Registrado: ${peso}kg × ${reps} reps (Serie ${serie})\n\n`;
    if (rir === 0) {
        mensaje += '💪 Llegaste al fallo. Perfecto para última serie.';
    } else if (rir >= 1 && rir <= 2) {
        mensaje += '🎯 RIR óptimo para hipertrofia. ¡Excelente!';
    } else if (rir === 3) {
        mensaje += '⚠️ Un poco fácil. Considera subir peso la próxima vez.';
    } else {
        mensaje += '⬆️ Demasiado fácil. Debes aumentar el peso significativamente.';
    }
    
    alert(mensaje);
    cerrarModalPeso();
}


// ==========================================
// NAVEGACIÓN ENTRE PANTALLAS
// ==========================================

function cambiarPantalla(nombrePantalla) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    // Mostrar la pantalla seleccionada
    document.getElementById(`screen-${nombrePantalla}`).classList.add('active');
    
    // Actualizar navegación
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`[data-screen="${nombrePantalla}"]`).classList.add('active');
    
    // Renderizar contenido según la pantalla
    if (nombrePantalla === 'hoy') {
        renderizarPantallaHoy();
    } else if (nombrePantalla === 'semana') {
        renderizarVistaSemanal();
    } else if (nombrePantalla === 'progreso') {
        renderizarPantallaProgreso();
    }
}

// ==========================================
// VISUALIZACIÓN DE PROGRESO POR EJERCICIO
// ==========================================

let ejercicioHistorialActual = null;

function abrirHistorialEjercicio(indexEjercicio, nombreEjercicio) {
    ejercicioHistorialActual = indexEjercicio;
    document.getElementById('historial-exercise-name').textContent = nombreEjercicio;
    
    const faseInfo = calcularFaseActual();
    const fecha = obtenerFechaFormateada();
    const diaEntrenamiento = obtenerDiaEntrenamiento(fecha.numeroSemana);
    const mesociclo = faseInfo.configSemana.mesociclo;
    
    const clave = `pesos_${mesociclo}_dia${diaEntrenamiento}_ex${indexEjercicio}`;
    const historial = JSON.parse(localStorage.getItem(clave) || '[]');
    
    // Renderizar tabla
    renderizarTablaHistorial(historial);
    
    // Renderizar gráfico
    renderizarGraficoProgreso(historial, nombreEjercicio);
    
    document.getElementById('modal-historial').classList.add('active');
}

function cerrarHistorialEjercicio() {
    document.getElementById('modal-historial').classList.remove('active');
    if (window.exerciseProgressChart) {
        window.exerciseProgressChart.destroy();
    }
}

function renderizarTablaHistorial(historial) {
    const tbody = document.getElementById('history-table-body');
    
    if (historial.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--text-secondary);">Sin datos aún</td></tr>';
        return;
    }
    
    const ultimas10 = historial.slice(-10).reverse();
    
    tbody.innerHTML = ultimas10.map(registro => {
        const fecha = new Date(registro.fecha);
        const fechaCorta = `${fecha.getDate()}/${fecha.getMonth() + 1}`;
        
        let rirClass = 'rir-good';
        if (registro.rir >= 3) rirClass = 'rir-warning';
        if (registro.rir >= 4) rirClass = 'rir-danger';
        
        return `
            <tr>
                <td>${fechaCorta}</td>
                <td>S${registro.serie}</td>
                <td><strong>${registro.peso}kg</strong></td>
                <td>${registro.reps}</td>
                <td><span class="rir-badge ${rirClass}">RIR ${registro.rir}</span></td>
                <td class="volume-highlight">${registro.volumen}kg</td>
            </tr>
        `;
    }).join('');
}

function renderizarGraficoProgreso(historial, nombreEjercicio) {
    const ctx = document.getElementById('exercise-progress-chart');
    
    if (historial.length === 0) {
        ctx.parentElement.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">Registra tu primera sesión para ver el progreso</p>';
        return;
    }
    
    // Agrupar por fecha y obtener la mejor serie de cada día
    const mejoresPorDia = {};
    historial.forEach(reg => {
        const fecha = new Date(reg.fecha).toLocaleDateString('es-ES');
        if (!mejoresPorDia[fecha] || reg.volumen > mejoresPorDia[fecha].volumen) {
            mejoresPorDia[fecha] = reg;
        }
    });
    
    const datos = Object.values(mejoresPorDia);
    const labels = datos.map(d => {
        const f = new Date(d.fecha);
        return `${f.getDate()}/${f.getMonth() + 1}`;
    });
    
    if (window.exerciseProgressChart) {
        window.exerciseProgressChart.destroy();
    }
    
    window.exerciseProgressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Peso (kg)',
                data: datos.map(d => d.peso),
                borderColor: '#e94560',
                backgroundColor: 'rgba(233, 69, 96, 0.1)',
                tension: 0.4,
                fill: true,
                yAxisID: 'y'
            }, {
                label: 'Repeticiones',
                data: datos.map(d => d.reps),
                borderColor: '#00d4aa',
                backgroundColor: 'rgba(0, 212, 170, 0.1)',
                tension: 0.4,
                fill: true,
                yAxisID: 'y1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: { labels: { color: '#ffffff' } },
                title: {
                    display: true,
                    text: `Evolución de ${nombreEjercicio}`,
                    color: '#ffffff'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    beginAtZero: false,
                    ticks: { color: '#a8b2d1' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    title: {
                        display: true,
                        text: 'Peso (kg)',
                        color: '#e94560'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: { drawOnChartArea: false },
                    ticks: { color: '#a8b2d1' },
                    title: {
                        display: true,
                        text: 'Repeticiones',
                        color: '#00d4aa'
                    }
                },
                x: {
                    ticks: { color: '#a8b2d1' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });
}

// ==========================================
// EXPORTACIÓN DE DATOS SEMANALES
// ==========================================

function exportarDatosSemana() {
    const hoy = new Date();
    const inicioSemana = new Date(hoy);
    inicioSemana.setDate(hoy.getDate() - hoy.getDay() + 1); // Lunes
    inicioSemana.setHours(0, 0, 0, 0);
    
    const finSemana = new Date(inicioSemana);
    finSemana.setDate(inicioSemana.getDate() + 6); // Domingo
    finSemana.setHours(23, 59, 59, 999);
    
    // Generar contenido del archivo
    let contenido = generarReporteSemanal(inicioSemana, finSemana);
    
    // Crear blob y descargar
    const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    
    const nombreArchivo = `rutina_semana_${formatearFechaArchivo(inicioSemana)}_${formatearFechaArchivo(finSemana)}.txt`;
    link.download = nombreArchivo;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert('✅ Datos exportados correctamente:\n' + nombreArchivo);
}

function formatearFechaArchivo(fecha) {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
    return `${dia}-${mes}-${anio}`;
}

function generarReporteSemanal(inicioSemana, finSemana) {
    const faseInfo = calcularFaseActual();
    const mesociclo = faseInfo.configSemana.mesociclo;
    
    let reporte = '';
    
    // ============================================
    // ENCABEZADO
    // ============================================
    reporte += '═══════════════════════════════════════════════════════════════\n';
    reporte += '             REPORTE DE ENTRENAMIENTO SEMANAL                  \n';
    reporte += '═══════════════════════════════════════════════════════════════\n\n';
    
    reporte += `📅 Período: ${formatearFechaLegible(inicioSemana)} - ${formatearFechaLegible(finSemana)}\n`;
    reporte += `📊 Fase Actual: ${faseInfo.fase.nombre}\n`;
    reporte += `🏋️ Mesociclo: ${rutinasData[mesociclo].nombre}\n`;
    reporte += `🎯 RIR Objetivo: ${faseInfo.configSemana.rir}\n`;
    reporte += `🍽️ Calorías: ${faseInfo.configSemana.calorias}\n`;
    reporte += `🏃 Cardio: ${faseInfo.configSemana.cardio}\n\n`;
    
    // ============================================
    // RESUMEN DE VOLUMEN POR GRUPO MUSCULAR
    // ============================================
    const volumen = calcularVolumenSemanal();
    const volumenTotal = Object.values(volumen).reduce((sum, v) => sum + v, 0);
    
    reporte += '═══════════════════════════════════════════════════════════════\n';
    reporte += '                   VOLUMEN POR GRUPO MUSCULAR                  \n';
    reporte += '═══════════════════════════════════════════════════════════════\n\n';
    
    Object.entries(volumen).forEach(([grupo, vol]) => {
        const porcentaje = volumenTotal > 0 ? ((vol / volumenTotal) * 100).toFixed(1) : 0;
        reporte += `${grupo.padEnd(15)} ${vol.toLocaleString().padStart(10)} kg  (${porcentaje}%)\n`;
    });
    
    reporte += `\n${'TOTAL'.padEnd(15)} ${volumenTotal.toLocaleString().padStart(10)} kg\n\n`;
    
    // ============================================
    // DETALLE DE ENTRENAMIENTOS POR DÍA
    // ============================================
    reporte += '═══════════════════════════════════════════════════════════════\n';
    reporte += '              DETALLE DE ENTRENAMIENTOS POR DÍA                \n';
    reporte += '═══════════════════════════════════════════════════════════════\n\n';
    
    for (let dia = 1; dia <= 3; dia++) {
        const rutinaDia = rutinasData[mesociclo].dias[dia];
        if (!rutinaDia || !rutinaDia.ejercicios) continue;
        
        reporte += `───────────────────────────────────────────────────────────────\n`;
        reporte += `  ${rutinaDia.nombre}\n`;
        reporte += `───────────────────────────────────────────────────────────────\n\n`;
        
        let haySesionesDia = false;
        
        rutinaDia.ejercicios.forEach((ejercicio, index) => {
            const clave = `pesos_${mesociclo}_dia${dia}_ex${index}`;
            const historial = JSON.parse(localStorage.getItem(clave) || '[]');
            
            // Filtrar solo registros de esta semana
            const registrosSemana = historial.filter(reg => {
                const fechaReg = new Date(reg.fecha);
                return fechaReg >= inicioSemana && fechaReg <= finSemana;
            });
            
            if (registrosSemana.length > 0) {
                haySesionesDia = true;
                reporte += `📍 ${ejercicio.nombre}\n`;
                reporte += `   Objetivo: ${ejercicio.detalles} | RIR ${ejercicio.rir}\n\n`;
                
                // Agrupar por fecha
                const porFecha = {};
                registrosSemana.forEach(reg => {
                    const fecha = new Date(reg.fecha).toLocaleDateString('es-ES');
                    if (!porFecha[fecha]) porFecha[fecha] = [];
                    porFecha[fecha].push(reg);
                });
                
                Object.entries(porFecha).forEach(([fecha, sesiones]) => {
                    reporte += `   🗓️  ${fecha}\n`;
                    
                    sesiones.forEach(reg => {
                        const rirIndicador = obtenerIndicadorRIR(reg.rir);
                        reporte += `      Serie ${reg.serie}: ${reg.peso}kg × ${reg.reps} reps `;
                        reporte += `| RIR ${reg.rir} ${rirIndicador} | Vol: ${reg.volumen}kg\n`;
                    });
                    
                    const volTotal = sesiones.reduce((sum, r) => sum + r.volumen, 0);
                    const rirPromedio = (sesiones.reduce((sum, r) => sum + r.rir, 0) / sesiones.length).toFixed(1);
                    reporte += `      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
                    reporte += `      Volumen sesión: ${volTotal}kg | RIR promedio: ${rirPromedio}\n\n`;
                });
                
                reporte += '\n';
            }
        });
        
        if (!haySesionesDia) {
            reporte += '   ❌ No se registraron entrenamientos este día\n\n';
        }
    }
    
    // ============================================
    // ESTADÍSTICAS GENERALES
    // ============================================
    reporte += '═══════════════════════════════════════════════════════════════\n';
    reporte += '                    ESTADÍSTICAS GENERALES                     \n';
    reporte += '═══════════════════════════════════════════════════════════════\n\n';
    
    const estadisticas = calcularEstadisticasSemanales(inicioSemana, finSemana, mesociclo);
    
    reporte += `📊 Series totales completadas: ${estadisticas.seriesTotal}\n`;
    reporte += `💪 Repeticiones totales: ${estadisticas.repsTotal}\n`;
    reporte += `⚖️  Peso promedio levantado: ${estadisticas.pesoPromedio.toFixed(1)} kg\n`;
    reporte += `🎯 RIR promedio registrado: ${estadisticas.rirPromedio.toFixed(1)}\n`;
    reporte += `📈 Volumen total de la semana: ${volumenTotal.toLocaleString()} kg\n`;
    reporte += `🏋️ Ejercicios únicos entrenados: ${estadisticas.ejerciciosUnicos}\n`;
    reporte += `📅 Días de entrenamiento: ${estadisticas.diasEntrenados}\n\n`;
    
    // ============================================
    // ANÁLISIS Y RECOMENDACIONES
    // ============================================
    reporte += '═══════════════════════════════════════════════════════════════\n';
    reporte += '                 ANÁLISIS Y RECOMENDACIONES                    \n';
    reporte += '═══════════════════════════════════════════════════════════════\n\n';
    
    const analisis = generarAnalisis(estadisticas, faseInfo);
    reporte += analisis;
    
    // ============================================
    // FOOTER
    // ============================================
    reporte += '\n═══════════════════════════════════════════════════════════════\n';
    reporte += '          Generado por Tu Plan Gym PWA - ' + new Date().toLocaleString('es-ES') + '\n';
    reporte += '═══════════════════════════════════════════════════════════════\n';
    
    return reporte;
}

function formatearFechaLegible(fecha) {
    return fecha.toLocaleDateString('es-ES', { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
    });
}

function obtenerIndicadorRIR(rir) {
    if (rir === 0) return '🔥'; // Fallo
    if (rir >= 1 && rir <= 2) return '✅'; // Óptimo
    if (rir === 3) return '⚠️'; // Fácil
    return '❌'; // Muy fácil
}

function calcularEstadisticasSemanales(inicioSemana, finSemana, mesociclo) {
    let seriesTotal = 0;
    let repsTotal = 0;
    let pesosAcumulados = 0;
    let rirAcumulado = 0;
    let contadorRegistros = 0;
    const ejerciciosSet = new Set();
    const diasSet = new Set();
    
    for (let dia = 1; dia <= 3; dia++) {
        const rutinaDia = rutinasData[mesociclo].dias[dia];
        if (!rutinaDia || !rutinaDia.ejercicios) continue;
        
        rutinaDia.ejercicios.forEach((ejercicio, index) => {
            const clave = `pesos_${mesociclo}_dia${dia}_ex${index}`;
            const historial = JSON.parse(localStorage.getItem(clave) || '[]');
            
            const registrosSemana = historial.filter(reg => {
                const fechaReg = new Date(reg.fecha);
                return fechaReg >= inicioSemana && fechaReg <= finSemana;
            });
            
            if (registrosSemana.length > 0) {
                ejerciciosSet.add(ejercicio.nombre);
                registrosSemana.forEach(reg => {
                    diasSet.add(new Date(reg.fecha).toLocaleDateString());
                    seriesTotal++;
                    repsTotal += reg.reps;
                    pesosAcumulados += reg.peso;
                    rirAcumulado += reg.rir;
                    contadorRegistros++;
                });
            }
        });
    }
    
    return {
        seriesTotal,
        repsTotal,
        pesoPromedio: contadorRegistros > 0 ? pesosAcumulados / contadorRegistros : 0,
        rirPromedio: contadorRegistros > 0 ? rirAcumulado / contadorRegistros : 0,
        ejerciciosUnicos: ejerciciosSet.size,
        diasEntrenados: diasSet.size
    };
}

function generarAnalisis(estadisticas, faseInfo) {
    let analisis = '';
    
    // Análisis de adherencia
    if (estadisticas.diasEntrenados >= 3) {
        analisis += '✅ Adherencia excelente: completaste al menos 3 días de entrenamiento.\n';
    } else if (estadisticas.diasEntrenados >= 2) {
        analisis += '⚠️  Adherencia moderada: solo ' + estadisticas.diasEntrenados + ' días entrenados esta semana.\n';
    } else {
        analisis += '❌ Adherencia baja: menos de 2 días de entrenamiento. Intenta mejorar la próxima semana.\n';
    }
    
    // Análisis de RIR
    const rirObjetivo = faseInfo.configSemana.rir;
    if (estadisticas.rirPromedio >= 0 && estadisticas.rirPromedio <= 2) {
        analisis += '✅ RIR promedio en zona óptima para hipertrofia (0-2).\n';
    } else if (estadisticas.rirPromedio > 2 && estadisticas.rirPromedio <= 3) {
        analisis += '⚠️  RIR promedio algo elevado. Considera aumentar cargas la próxima semana.\n';
    } else if (estadisticas.rirPromedio > 3) {
        analisis += '❌ RIR promedio demasiado alto. Debes incrementar significativamente los pesos.\n';
    }
    
    // Análisis de volumen
    if (estadisticas.seriesTotal >= 40) {
        analisis += '💪 Volumen de entrenamiento alto: ' + estadisticas.seriesTotal + ' series totales.\n';
    } else if (estadisticas.seriesTotal >= 30) {
        analisis += '📊 Volumen moderado: ' + estadisticas.seriesTotal + ' series. Suficiente para mantener.\n';
    } else {
        analisis += '⚠️  Volumen bajo: solo ' + estadisticas.seriesTotal + ' series. Aumenta frecuencia o ejercicios.\n';
    }
    
    analisis += '\n💡 Recuerda: la sobrecarga progresiva es clave. Busca mejorar peso o reps cada semana.\n';
    
    return analisis;
}

// ==========================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Renderizar la pantalla inicial (solo una vez)
    renderizarPantallaHoy();

    // 2. Asignar eventos de navegación (un listener por cada item)
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const pantalla = e.currentTarget.dataset.screen;
            cambiarPantalla(pantalla);
        });
    });

    // 3. Asignar eventos del historial (solo una vez para toda la página)
    // ESTA ES LA PARTE CORREGIDA
    document.getElementById('close-historial').addEventListener('click', cerrarHistorialEjercicio);
    
    document.getElementById('modal-historial').addEventListener('click', (e) => {
        // Esta lógica para cerrar el modal al hacer clic fuera es correcta
        if (e.target.id === 'modal-historial') {
            cerrarHistorialEjercicio();
        }
    });

    // PEGA AQUÍ EL CÓDIGO CORTADO
    document.getElementById('export-week-btn').addEventListener('click', exportarDatosSemana);
    
    // Eventos de temporizador
    document.getElementById('timer-start').addEventListener('click', iniciarTimer);
    document.getElementById('timer-pause').addEventListener('click', pausarTimer);
    document.getElementById('timer-reset').addEventListener('click', resetearTimer);
    document.getElementById('close-timer').addEventListener('click', ocultarTemporizador);
    
    // Eventos de modales
    document.getElementById('ver-calentamiento').addEventListener('click', abrirModalCalentamiento);
    document.getElementById('close-calentamiento').addEventListener('click', cerrarModalCalentamiento);
    document.getElementById('close-peso').addEventListener('click', cerrarModalPeso);
    document.getElementById('save-weight').addEventListener('click', guardarPeso);
    
    // Cerrar modales al hacer clic fuera
    document.getElementById('modal-calentamiento').addEventListener('click', (e) => {
        if (e.target.id === 'modal-calentamiento') cerrarModalCalentamiento();
    });
    document.getElementById('modal-peso').addEventListener('click', (e) => {
        if (e.target.id === 'modal-peso') cerrarModalPeso();

});
    
    // Eventos de registro de progreso
    document.getElementById('guardar-medidas').addEventListener('click', guardarMedidas);
    document.getElementById('agregar-foto').addEventListener('click', agregarFoto);
    
    console.log('✅ Aplicación inicializada correctamente');
    console.log('📅 Fecha de inicio del plan:', FECHA_INICIO_PLAN.toLocaleDateString('es-ES'));
    console.log('📊 Fase actual:', calcularFaseActual().fase.nombre);
});

// ==========================================
// CÁLCULO DE VOLUMEN SEMANAL
// ==========================================

const GRUPOS_MUSCULARES = {
    'Pecho': ['Press de Banca', 'Press Inclinado', 'Fondos'],
    'Espalda': ['Dominadas', 'Jalón', 'Remo'],
    'Hombros': ['Press de Hombro', 'Elevaciones Laterales', 'Vuelos Posteriores'],
    'Brazos': ['Curl', 'Martillo', 'Tríceps', 'Extensiones'],
    'Piernas': ['Sentadilla', 'Prensa', 'Femoral', 'Cuádriceps', 'Hip Thrust', 'Talones', 'Goblet']
};

function calcularVolumenSemanal() {
    const hoy = new Date();
    const inicioSemana = new Date(hoy);
    inicioSemana.setDate(hoy.getDate() - hoy.getDay() + 1); // Lunes
    inicioSemana.setHours(0, 0, 0, 0);
    
    const volumenPorGrupo = {};
    Object.keys(GRUPOS_MUSCULARES).forEach(grupo => {
        volumenPorGrupo[grupo] = 0;
    });
    
    // Recorrer todos los ejercicios de la semana
    const faseInfo = calcularFaseActual();
    const mesociclo = faseInfo.configSemana.mesociclo;
    
    for (let dia = 1; dia <= 3; dia++) {
        const rutinaDia = rutinasData[mesociclo].dias[dia];
        if (!rutinaDia || !rutinaDia.ejercicios) continue;
        
        rutinaDia.ejercicios.forEach((ejercicio, index) => {
            const clave = `pesos_${mesociclo}_dia${dia}_ex${index}`;
            const historial = JSON.parse(localStorage.getItem(clave) || '[]');
            
            // Filtrar solo registros de esta semana
            const registrosSemana = historial.filter(reg => {
                const fechaReg = new Date(reg.fecha);
                return fechaReg >= inicioSemana;
            });
            
            // Sumar volumen al grupo muscular correspondiente
            const volumenEjercicio = registrosSemana.reduce((sum, reg) => sum + reg.volumen, 0);
            
            for (let [grupo, palabrasClave] of Object.entries(GRUPOS_MUSCULARES)) {
                if (palabrasClave.some(palabra => ejercicio.nombre.includes(palabra))) {
                    volumenPorGrupo[grupo] += volumenEjercicio;
                    break;
                }
            }
        });
    }
    
    return volumenPorGrupo;
}

function renderizarVolumenSemanal() {
    const volumen = calcularVolumenSemanal();
    const volumenSemanaAnterior = obtenerVolumenSemanaAnterior();
    
    const container = document.getElementById('volume-stats');
    
    container.innerHTML = Object.entries(volumen).map(([grupo, vol]) => {
        const volAnterior = volumenSemanaAnterior[grupo] || 0;
        const cambio = vol - volAnterior;
        const porcentaje = volAnterior > 0 ? ((cambio / volAnterior) * 100).toFixed(1) : 0;
        
        let claseCard = '';
        let textoCambio = '';
        if (cambio > 0) {
            claseCard = 'increase';
            textoCambio = `<span class="volume-up">+${porcentaje}% vs semana anterior</span>`;
        } else if (cambio < 0) {
            claseCard = 'decrease';
            textoCambio = `<span class="volume-down">${porcentaje}% vs semana anterior</span>`;
        } else {
            textoCambio = '<span style="color: var(--text-secondary);">Sin cambios</span>';
        }
        
        return `
            <div class="volume-card ${claseCard}">
                <div class="volume-card-title">${grupo}</div>
                <div class="volume-card-value">
                    ${vol.toLocaleString()} 
                    <span class="volume-card-suffix">kg</span>
                </div>
                <div class="volume-card-change">${textoCambio}</div>
            </div>
        `;
    }).join('');
    
    // Renderizar gráfico
    renderizarGraficoVolumen(volumen);
}

function obtenerVolumenSemanaAnterior() {
    // Implementación simplificada: buscar registros de hace 7-14 días
    const hace7dias = new Date();
    hace7dias.setDate(hace7dias.getDate() - 7);
    const hace14dias = new Date();
    hace14dias.setDate(hace14dias.getDate() - 14);
    
    const volumenPorGrupo = {};
    Object.keys(GRUPOS_MUSCULARES).forEach(grupo => {
        volumenPorGrupo[grupo] = 0;
    });
    
    const faseInfo = calcularFaseActual();
    const mesociclo = faseInfo.configSemana.mesociclo;
    
    for (let dia = 1; dia <= 3; dia++) {
        const rutinaDia = rutinasData[mesociclo].dias[dia];
        if (!rutinaDia || !rutinaDia.ejercicios) continue;
        
        rutinaDia.ejercicios.forEach((ejercicio, index) => {
            const clave = `pesos_${mesociclo}_dia${dia}_ex${index}`;
            const historial = JSON.parse(localStorage.getItem(clave) || '[]');
            
            const registrosSemanaAnterior = historial.filter(reg => {
                const fechaReg = new Date(reg.fecha);
                return fechaReg >= hace14dias && fechaReg < hace7dias;
            });
            
            const volumenEjercicio = registrosSemanaAnterior.reduce((sum, reg) => sum + reg.volumen, 0);
            
            for (let [grupo, palabrasClave] of Object.entries(GRUPOS_MUSCULARES)) {
                if (palabrasClave.some(palabra => ejercicio.nombre.includes(palabra))) {
                    volumenPorGrupo[grupo] += volumenEjercicio;
                    break;
                }
            }
        });
    }
    
    return volumenPorGrupo;
}

function renderizarGraficoVolumen(volumen) {
    const ctx = document.getElementById('volume-chart-weekly');
    if (!ctx) return;
    
    if (window.volumeChartWeekly) {
        window.volumeChartWeekly.destroy();
    }
    
    const labels = Object.keys(volumen);
    const data = Object.values(volumen);
    
    window.volumeChartWeekly = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Volumen Total (kg)',
                data: data,
                backgroundColor: [
                    'rgba(233, 69, 96, 0.7)',
                    'rgba(0, 212, 170, 0.7)',
                    'rgba(255, 165, 0, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    '#e94560',
                    '#00d4aa',
                    '#ffa500',
                    '#36a2eb',
                    '#9966ff'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Distribución de Volumen por Grupo Muscular (Esta Semana)',
                    color: '#ffffff'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#a8b2d1' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    title: {
                        display: true,
                        text: 'Volumen Total (kg)',
                        color: '#ffffff'
                    }
                },
                x: {
                    ticks: { color: '#a8b2d1' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });
}
