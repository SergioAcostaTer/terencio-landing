import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, CheckCircle, FileText, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const professionalSchema = z.object({
  businessName: z.string().min(2, "El nombre del negocio es obligatorio"),
  sector: z.string().min(1, "Selecciona un sector"),
  email: z.string().email("Introduce un email válido"),
  phone: z.string().min(9, "Introduce un teléfono válido"),
  honeypot: z.string().optional(),
});

type ProfessionalFormData = z.infer<typeof professionalSchema>;

export default function ProfessionalForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProfessionalFormData>({
    resolver: zodResolver(professionalSchema),
  });

  const onSubmit = async (data: ProfessionalFormData) => {
    if (data.honeypot) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            access_key: "82d5137b-b53c-414f-9671-eadf139e9505",
            subject: "Nueva solicitud de tarifas mayoristas - Terencio Profesionales",
            from_name: "Web Terencio Profesionales",
            ...data
        })
      });

      const result = await response.json();

      if (result.success) {
        // Redirect to Thank You Page
        window.location.href = '/gracias';
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input type="text" className="hidden" {...register("honeypot")} />

        <div className="space-y-1">
            <label htmlFor="businessName" className="font-bold text-gray-700 text-sm">Nombre del Negocio</label>
            <input
            {...register("businessName")}
            id="businessName"
            autoComplete="organization"
            className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:outline-none transition ${errors.businessName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
            placeholder="Ej. Restaurante El Pino"
            />
            {errors.businessName && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.businessName.message}</p>}
        </div>

        <div className="space-y-1">
            <label htmlFor="sector" className="font-bold text-gray-700 text-sm">Sector</label>
            <select
            {...register("sector")}
            id="sector"
            autoComplete="organization-title"
            className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:outline-none transition ${errors.sector ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
            >
            <option value="">Selecciona una opción...</option>
            <option value="Restauración">Restauración / Cafetería</option>
            <option value="Guachinche">Guachinche / Asador</option>
            <option value="Hotel">Hotel / Apartamentos</option>
            <option value="Comercio">Pequeño Comercio / Venta</option>
            <option value="Catering">Catering / Eventos</option>
            <option value="Otro">Otro</option>
            </select>
            {errors.sector && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.sector.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
                <label htmlFor="email" className="font-bold text-gray-700 text-sm">Email</label>
                <input
                {...register("email")}
                id="email"
                type="email"
                autoComplete="email"
                className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:outline-none transition ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
                placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.email.message}</p>}
            </div>

            <div className="space-y-1">
                <label htmlFor="phone" className="font-bold text-gray-700 text-sm">Teléfono</label>
                <input
                {...register("phone")}
                id="phone"
                type="tel"
                autoComplete="tel"
                className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:outline-none transition ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
                placeholder="600 000 000"
                />
                {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.phone.message}</p>}
            </div>
        </div>

        <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#185d26] text-white font-bold text-lg py-3 rounded-xl hover:bg-green-800 transition shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
        >
            {isSubmitting ? <Loader2 className="animate-spin" /> : <FileText size={20} />}
            {isSubmitting ? 'Enviando...' : 'Solicitar Tarifas'}
        </button>

        <p className="text-[10px] text-center text-gray-500 mt-2">
            Acepto la <a href="/politica-privacidad" className="underline hover:text-green-700">política de privacidad</a>.
        </p>

        {submitStatus === 'success' && (
            <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 text-center justify-center text-sm border border-green-200">
                <CheckCircle size={16} />
                <p className="font-bold">¡Solicitud recibida!</p>
            </div>
        )}

        {submitStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 text-center justify-center text-sm border border-red-200">
                <AlertCircle size={16} />
                <p>Hubo un error. Inténtalo de nuevo.</p>
            </div>
        )}
    </form>
  );
}
