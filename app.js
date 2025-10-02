// ==========================================
// CONFIGURACIÓN GLOBAL Y DATOS BASE
// ==========================================

// Fecha de inicio del plan (ajústala según tu inicio real)
const FECHA_INICIO_PLAN = new Date('2024-11-04'); // 4 de noviembre de 2024

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
            duracion: 28, // días
            descripcion: 'Recuperación y búsqueda del mantenimiento calórico',
            
            semanas: [
                {
                    numero: 1,
                    nombre: 'Semana 1-2: Descarga Activa',
                    mesociclo: 'descarga',
                    rir: '3-4',
                    cardio: '1-2 sesiones de LISS (30-45 min de caminata)',
                    calorias: '2600-2800 kcal',
                    proteina: '1.8 g/kg',
                    grasas: '25% del total calórico',
                    nota: 'Empieza con las calorías de tu fase de volumen'
                },
                {
                    numero: 2,
                    nombre: 'Semana 3-4: Búsqueda del Mantenimiento',
                    mesociclo: 'mesociclo1',
                    rir: '2-3',
                    cardio: '2 sesiones de LISS (30-45 min)',
                    calorias: '2600-2800 kcal (ajustar según peso)',
                    proteina: '1.8 g/kg',
                    grasas: '25% del total',
                    nota: 'Monitoriza tu peso promedio semanal para encontrar tu mantenimiento'
                }
            ]
        },
        {
            id: 'fase2',
            nombre: 'FASE 2: DEFINICIÓN PRINCIPAL',
            duracion: 119, // días (17 semanas aprox)
            descripcion: 'Pérdida de grasa sostenible preservando masa muscular',
            
            semanas: [
                {
                    numero: 1,
                    nombre: 'Diciembre-Enero: Inicio del Déficit',
                    mesociclo: 'mesociclo2',
                    rir: '1-2',
                    cardio: '3 sesiones de LISS (30-45 min) a 130-140 ppm',
                    calorias: '2200-2400 kcal',
                    proteina: '2.0-2.5 g/kg',
                    grasas: '0.8-1.0 g/kg',
                    nota: 'Déficit de 300-500 kcal. Mantén la fuerza como prioridad'
                },
                {
                    numero: 2,
                    nombre: 'Febrero: Descanso de Dieta',
                    mesociclo: 'descarga',
                    rir: '3-4',
                    cardio: '2 sesiones de LISS',
                    calorias: 'Volver a mantenimiento (2700 kcal aprox)',
                    proteina: '1.8-2.0 g/kg',
                    grasas: '25% del total',
                    nota: 'Diet Break: 1-2 semanas en mantenimiento para resetear metabolismo'
                },
                {
                    numero: 3,
                    nombre: 'Marzo: Continuación del Déficit',
                    mesociclo: 'mesociclo3',
                    rir: '1-2',
                    cardio: '4 sesiones de LISS (40 min) o 3 LISS + 1 HIIT (10-15 min)',
                    calorias: '2100-2300 kcal',
                    proteina: '2.0-2.5 g/kg',
                    grasas: '0.8-1.0 g/kg',
                    nota: 'Ajusta calorías según tu nuevo peso. Protena muy alta'
                }
            ]
        },
        {
            id: 'fase3',
            nombre: 'FASE 3: PULIDO FINAL',
            duracion: 76, // días (11 semanas aprox hasta 15 junio)
            descripcion: 'Alcanzar el pico de definición',
            
            semanas: [
                {
                    numero: 1,
                    nombre: 'Abril-Mayo: Pico de Definición',
                    mesociclo: 'mesociclo3',
                    rir: '1-2',
                    cardio: '4-5 sesiones de LISS (45 min) o 3 LISS + 2 HIIT',
                    calorias: '2000-2200 kcal',
                    proteina: '2.5 g/kg',
                    grasas: '0.8 g/kg',
                    nota: 'Último empujón. Ajusta si es necesario reducir 100-150 kcal más'
                },
                {
                    numero: 2,
                    nombre: 'Junio: Dieta Inversa',
                    mesociclo: 'mesociclo1',
                    rir: '2-3',
                    cardio: '1-2 sesiones de LISS',
                    calorias: 'Aumenta +100-150 kcal/semana',
                    proteina: '2.0 g/kg',
                    grasas: '1.0 g/kg',
                    nota: 'Reverse diet gradual hasta volver a mantenimiento sin ganar grasa'
                }
            ]
        },
        {
            id: 'fase4',
            nombre: 'FASE 4: MANTENIMIENTO DE VERANO',
            duracion: 999, // indefinido
            descripcion: 'Mantener el físico alcanzado',
            
            semanas: [
                {
                    numero: 1,
                    nombre: 'Verano: Mantenimiento',
                    mesociclo: 'mesociclo1',
                    rir: '2-3',
                    cardio: '1-2 sesiones por semana o actividades que disfrutes',
                    calorias: 'Mantenimiento (2600-2800 kcal aprox)',
                    proteina: '1.8-2.0 g/kg',
                    grasas: '25% del total',
                    nota: 'Disfruta de tu físico y mantén un estilo de vida activo'
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
            
            // Determinar qué configuración de semana aplicar
            let configSemana = fase.semanas[0];
            for (let sem of fase.semanas) {
                if (semanaEnFase >= (sem.numero - 1)) {
                    configSemana = sem;
                }
            }
            
            return {
                fase: fase,
                configSemana: configSemana,
                diasEnFase: diasEnFase,
                semanaEnFase: semanaEnFase + 1
            };
        }
        diasAcumulados += fase.duracion;
    }
    
    // Si superamos todas las fases, devolver la última (mantenimiento)
    const ultimaFase = PLAN_COMPLETO.fases[PLAN_COMPLETO.fases.length - 1];
    return {
        fase: ultimaFase,
        configSemana: ultimaFase.semanas[0],
        diasEnFase: 0,
        semanaEnFase: 1
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

// ==========================================
// RENDERIZADO DE PANTALLA 1: TU PLAN DE HOY
// ==========================================

function renderizarPantallaHoy() {
    const fecha = obtenerFechaFormateada();
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
        
        div.innerHTML = `
            <div class="exercise-header" onclick="toggleEjercicio(${index})">
                <div class="checkbox"></div>
                <div class="exercise-content">
                    <div class="exercise-name">${ejercicio.nombre}</div>
                    <div class="exercise-meta">${ejercicio.detalles} | <strong>RIR ${ejercicio.rir}</strong></div>
                </div>
            </div>
            <div class="exercise-actions">
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
    cargarGaleriaTroFotos();
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
    
    if (!peso || !reps) {
        alert('Por favor completa peso y repeticiones');
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
        volumen: peso * reps
    };
    
    const clave = `pesos_${mesociclo}_dia${diaEntrenamiento}_ex${ejercicioActualIndex}`;
    let historial = JSON.parse(localStorage.getItem(clave) || '[]');
    historial.push(registro);
    localStorage.setItem(clave, JSON.stringify(historial));
    
    alert(`✅ Registrado: ${peso}kg × ${reps} reps (Serie ${serie})`);
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
// INICIALIZACIÓN DE LA APLICACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Renderizar pantalla inicial
    renderizarPantallaHoy();
    
    // Eventos de navegación
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const pantalla = e.currentTarget.dataset.screen;
            cambiarPantalla(pantalla);
        });
    });
    
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
