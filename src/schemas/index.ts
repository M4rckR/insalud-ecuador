import { z } from "zod";

export const formLeadsSchema = z.object({
    nombres: z.string().min(1, { message: "El nombre es requerido" }),
    telefono: z.string()
        .min(1, { message: "El teléfono es requerido" })
        .regex(/^\d+$/, { message: "Solo se permiten números" })
        .min(9, { message: "9-10 dígitos requeridos" })
        .max(10, { message: "9-10 dígitos requeridos" })
        .regex(/^(09\d{8}|0\d{8}|9\d{7,8})$/, { message: "Numero invalido" }),
    turno: z.string().min(1, { message: "El turno es requerido" }),
    // Campos opcionales para el gestor
    gestorEmail: z.string().optional(),
    gestorNombre: z.string().optional(),
    tratamiento: z.string().optional(),
    sede: z.string().optional(),
})

