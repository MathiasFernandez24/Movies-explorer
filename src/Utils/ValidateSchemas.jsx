const Joi = require('joi');
import { TextEncoder } from 'text-encoding';



export const schemaEmail = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .empty()
        .messages({
            "string.email": "Debe ser un Email",
            "string.empty": "Campo obligatorio"
        })
})

export const schemaPassword = Joi.object({
    password: Joi.string()
        .empty()
        .min(6)
        .alphanum()
        .messages({
            "string.min": "Minimo 6 caracteres",
            "string.alphanum": "Debe ser alfanumerica",
            "string.empty": "Campo obligatorio",
        })
})