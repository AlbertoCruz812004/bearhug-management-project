const featudata = [ "5Gb de almacenamiento", "5Gb de almacenamiento","5Gb de almacenamiento", "5Gb de almacenamiento", "5Gb de almacenamiento", "5Gb de almacenamiento"]

type Plan = {
    title: string
    price: number
    featudata: string[]
    isPopular?: boolean
}

const BASIC_PLAN: Plan = {
    title: "Plan básico",
    price: 10,
    featudata: featudata
}

const PROFESIONAL_PLAN: Plan = {
    title: "Plan profesional",
    price: 15,
    featudata: featudata,
    isPopular: true
}

const ULTIMATE_PLAN: Plan = {
    title: "Plan ultimate",
    price: 18,
    featudata: featudata
}

export const plans = [BASIC_PLAN, PROFESIONAL_PLAN, ULTIMATE_PLAN]
