const featuresBasic = [ "Gestión de productos", "Ver registros", "Gestión de 1 empleado","Gráficas simples"]
const featuresProfessional = ["Gestión de productos", "Ver registros en tiempo real", "Gestión de hasta 5 empleados","Filtrado de gráficas", "Exportación  de gráficas e informes", "Soporte dedicado en horario laboral", "Chat entre empleados"];
const featuresUltimate = ["Gestión de productos", "Ver detalles de los registros en tiempo real", "Gestión de empleados ilimitados","Personalización de gráficas", "Exportación  de gráficas e informes en diferente formato", "Soporte prioritario en horario laboral", "Chat entre empleados y muro de publicaciones"]

type Plan = {
    title: string
    price: number
    features: string[]
    isPopular?: boolean
}

const BASIC_PLAN: Plan = {
    title: "Plan básico",
    price: 0,
    features: featuresBasic
}

const PROFESIONAL_PLAN: Plan = {
    title: "Plan profesional",
    price: 25,
    features: featuresProfessional,
    isPopular: true
}

const ULTIMATE_PLAN: Plan = {
    title: "Plan ultimate",
    price: 50,
    features: featuresUltimate
}

export const plans = [BASIC_PLAN, PROFESIONAL_PLAN, ULTIMATE_PLAN]