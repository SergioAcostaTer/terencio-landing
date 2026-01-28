import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, CheckCircle, Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Introduce un email válido"),
  phone: z.string().min(9, "Introduce un teléfono válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  honeypot: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return; // Silent spam rejection

    setIsSubmitting(true);
    
    try {
      // Simulate API call or replace with actual Web3Forms fetch
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            access_key: "82d5137b-b53c-414f-9671-eadf139e9505", // Public key from source code
            subject: "Nuevo mensaje de contacto - Web Terencio",
            from_name: "Web Terencio Contacto",
            ...data
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        reset();
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      
      {/* Honeypot */}
      <input type="text" className="hidden" {...register("honeypot")} />

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-bold text-gray-700">Nombre Completo</label>
        <input
          {...register("name")}
          id="name"
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
          placeholder="Tu nombre y apellidos"
        />
        {errors.name && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.name.message}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-gray-700">Email</label>
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
            <label htmlFor="phone" className="text-sm font-bold text-gray-700">Teléfono</label>
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

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-gray-700">Mensaje</label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition resize-none ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
          placeholder="¿En qué podemos ayudarte?"
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} /> {errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-green-800 transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
            <CheckCircle size={20} />
            <p>¡Mensaje enviado correctamente! Te contactaremos pronto.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
            <AlertCircle size={20} />
            <p>Hubo un error al enviar. Por favor, inténtalo de nuevo o llámanos.</p>
        </div>
      )}
    </form>
  );
}
