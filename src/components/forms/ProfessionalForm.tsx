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
    <div className="bg-gray-50 rounded-3xl p-4 md:p-12 shadow-inner border border-gray-200">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solicitar Tarifas Mayoristas</h2>
            <p className="text-gray-600">Rellena este formulario y nuestro equipo comercial te enviará el catálogo con precios especiales.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input type="text" className="hidden" {...register("honeypot")} />

            <div className="space-y-2">
                <label htmlFor="businessName" className="font-bold text-gray-700">Nombre del Negocio / Razón Social</label>
                <input
                {...register("businessName")}
                id="businessName"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition ${errors.businessName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
                placeholder="Ej. Restaurante El Pino"
                />
                {errors.businessName && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.businessName.message}</p>}
            </div>

            <div className="space-y-2">
                <label htmlFor="sector" className="font-bold text-gray-700">Sector</label>
                <select
                {...register("sector")}
                id="sector"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition ${errors.sector ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
                >
                <option value="">Selecciona una opción...</option>
                <option value="Restauración">Restauración / Cafetería</option>
                <option value="Guachinche">Guachinche / Asador</option>
                <option value="Hotel">Hotel / Apartamentos</option>
                <option value="Comercio">Pequeño Comercio / Venta</option>
                <option value="Otro">Otro</option>
                </select>
                {errors.sector && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.sector.message}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="font-bold text-gray-700">Email</label>
                    <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
                    placeholder="tu@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="font-bold text-gray-700">Teléfono</label>
                    <input
                    {...register("phone")}
                    id="phone"
                    type="tel"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
                    placeholder="600 000 000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.phone.message}</p>}
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-green-800 transition shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <FileText size={24} />}
                {isSubmitting ? 'Enviando Solicitud...' : 'Solicitar Tarifas Ahora'}
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
                Al enviar este formulario aceptas nuestra <a href="/politica-privacidad" className="underline hover:text-brand-primary">política de privacidad</a>.
            </p>

            {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 text-center justify-center">
                    <CheckCircle size={24} />
                    <p className="font-bold">¡Solicitud recibida! Te enviaremos el catálogo muy pronto.</p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 text-center justify-center">
                    <AlertCircle size={24} />
                    <p>Hubo un error. Por favor, inténtalo de nuevo.</p>
                </div>
            )}
        </form>
    </div>
  );
}
