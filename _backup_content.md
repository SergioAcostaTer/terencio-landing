

--- START OF FILE: src/pages/alternativa-a-hiperdino-la-laguna.astro ---


---
import LocationMap from "../components/LocationMap.astro";
import LocalBusinessSchema from "../components/SEO/LocalBusinessSchema.astro";
import Button from "../components/ui/Button.astro";
import Section from "../components/ui/Section.astro";
import Layout from "../layouts/Layout.astro";


const title = "Alternativa a Hiperdino y Mercadona en La Laguna | Ahorra en Terencio";
const description = "¿Buscas el supermercado más barato cerca de La Laguna? Compara precios y descubre por qué Terencio Cash Market es la alternativa inteligente a Hiperdino y Mercadona. Sin carnet, precios de mayorista.";
---

<LocalBusinessSchema />
<Layout title={title} description={description}>
  
  <!-- Hero Contra-Intuitivo -->
  <header class="bg-gray-900 text-white py-24 relative overflow-hidden">
     <!-- Abstract shapes background -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-900 rounded-full opacity-50 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900 rounded-full opacity-50 blur-3xl"></div>
    
    <div class="container mx-auto px-4 text-center max-w-5xl relative z-10">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            ¿Por qué sigues comprando en <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">el súper de siempre</span>?
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-3xl mx-auto">
            La Laguna tiene una alternativa a Hiperdino y Mercadona que quizá no conoces. 
            Mismo carro, mismas marcas, pero a <strong>precio de mayorista</strong> y sin problemas de aparcamiento.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#comparativa" class="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2">
                💰 Ver la Comparativa Real
            </a>
            <a href="https://maps.google.com/?q=Terencio+Cash+Market" target="_blank" class="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2">
                📍 Estamos a 5 min del centro
            </a>
        </div>
    </div>
  </header>

  <!-- Section 1: El Mito del Mayorista -->
  <Section class="bg-white">
      <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Rompiendo el mito: "Eso es solo para empresas"</h2>
          <p class="text-lg text-gray-600 leading-relaxed">
              Mucha gente en La Laguna piensa que Terencio es "como Makro", donde necesitas un carnet de empresa o pagar cuota. 
              <strong>Falso.</strong> Somos un Cash & Carry abierto al público. Puedes venir comprar la leche, el pan y la carne para tu casa, pagando lo mismo que paga un restaurante.
          </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center bg-green-50 rounded-3xl p-8 md:p-12">
          <div>
              <h3 class="text-2xl font-bold mb-4 text-green-900">Tu Cesta de la Compra Inteligente</h3>
              <p class="text-gray-700 mb-6">
                  La diferencia está en el formato. En un supermercado tradicional pagas mucho packaging y marketing. Aquí compras de forma eficiente.
              </p>
              <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                      <span class="bg-white p-2 rounded-full shadow-sm text-xl">🧴</span>
                      <div>
                          <p class="font-bold text-gray-900">Detergentes y Limpieza</p>
                          <p class="text-sm text-gray-600">Lleva garrafas de 5L profesionales. Duran meses y el litro sale a mitad de precio que la botellita del súper.</p>
                      </div>
                  </li>
                  <li class="flex items-start gap-3">
                      <span class="bg-white p-2 rounded-full shadow-sm text-xl">🥫</span>
                      <div>
                          <p class="font-bold text-gray-900">Despensa</p>
                          <p class="text-sm text-gray-600">Arroz, pasta, aceite. Formatos un poco más grandes, ideales para familias, con un ahorro directo en el ticket.</p>
                      </div>
                  </li>
                  <li class="flex items-start gap-3">
                      <span class="bg-white p-2 rounded-full shadow-sm text-xl">🥩</span>
                      <div>
                          <p class="font-bold text-gray-900">Frescos</p>
                          <p class="text-sm text-gray-600">Carne cortada al momento, no envasada en atmósfera modificada días antes. Más sabor, menos plástico.</p>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-xl rotate-1">
              <div class="border-b-2 border-dashed border-gray-200 pb-4 mb-4">
                  <p class="text-center text-gray-400 text-sm uppercase tracking-widest">Ejemplo de Ahorro</p>
              </div>
              <div class="space-y-4">
                  <div class="flex justify-between items-center text-gray-500 text-sm px-4 py-2 bg-red-50 rounded line-through">
                      <span>Aceite Oliva Súper (1L)</span>
                      <span>12,50€</span>
                  </div>
                  <div class="flex justify-between items-center font-bold text-green-700 px-4 py-2 bg-green-100 rounded text-lg">
                      <span>Terencio Oliva (5L)</span>
                      <span>Consultar Oferta</span>
                  </div>
                  <p class="text-xs text-center text-gray-500 mt-2">*Precios pueden variar según mercado, pero el ahorro por litro es constante.</p>
              </div>
              <div class="mt-8 text-center">
                  <span class="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">Ahorro Medio: 20-30%</span>
              </div>
          </div>
      </div>
  </Section>

  <!-- Section 2: La Comparativa -->
  <Section id="comparativa" class="bg-white">
    <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-16 text-gray-900">Terencio vs. Grandes Cadenas</h2>
        
        <div class="overflow-x-auto shadow-xl rounded-2xl border border-gray-100">
            <table class="w-full text-left border-collapse min-w-[600px]">
                <thead>
                    <tr class="bg-gray-50">
                        <th class="p-6 text-gray-500 font-semibold w-1/3">¿Qué buscas?</th>
                        <th class="p-6 bg-green-600 text-white font-bold w-1/3 border-t-4 border-green-400">Terencio Cash Market</th>
                        <th class="p-6 text-gray-500 font-medium w-1/3 bg-gray-100">Hiperdino / Mercadona</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                    <tr class="hover:bg-gray-50 transition">
                        <td class="p-6 font-bold text-gray-800">Ahorro Real</td>
                        <td class="p-6 text-green-700 font-bold bg-green-50/30">Precio Mayorista desde la unidad 1</td>
                        <td class="p-6 text-gray-600 bg-gray-50/30">Ofertas gancho puntuales (3x2)</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition">
                        <td class="p-6 font-bold text-gray-800">Carnicería</td>
                        <td class="p-6 text-green-700 font-bold bg-green-50/30">Mostrador tradicional con carniceros</td>
                        <td class="p-6 text-gray-600 bg-gray-50/30">Bandejas de libre servicio</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition">
                        <td class="p-6 font-bold text-gray-800">Marcas</td>
                        <td class="p-6 text-green-700 font-bold bg-green-50/30">Marcas líderes y Marcas locales</td>
                        <td class="p-6 text-gray-600 bg-gray-50/30">Dominio de Marca Blanca propia</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition">
                        <td class="p-6 font-bold text-gray-800">Experiencia de Compra</td>
                        <td class="p-6 text-green-700 font-bold bg-green-50/30">Carga directa al maletero</td>
                        <td class="p-6 text-gray-600 bg-gray-50/30">Colas, parking subterráneo, tickets</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </Section>

  <!-- Section 3: El Factor Tráfico -->
  <Section class="bg-gray-50">
    <div class="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div class="order-2 md:order-1">
            <h2 class="text-3xl font-bold mb-6">Olvídate de los atascos de La Laguna</h2>
            <p class="text-gray-600 mb-6 text-lg">
                Ir a comprar al centro de La Laguna o a los centros comerciales de la autopista suele significar:
            </p>
            <ul class="space-y-4 mb-8">
                <li class="flex items-center gap-3 text-gray-700">
                    <span class="text-red-500 text-xl">⛔</span> Atascos en la TF-5
                </li>
                <li class="flex items-center gap-3 text-gray-700">
                    <span class="text-red-500 text-xl">🅿️</span> Pagar parking o dar vueltas
                </li>
                <li class="flex items-center gap-3 text-gray-700">
                    <span class="text-red-500 text-xl">😓</span> Cargar bolsas pesadas hasta lejos
                </li>
            </ul>
            <p class="text-green-800 font-bold text-lg bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                En Terencio (Carretera La Esperanza), llegas, aparcas en la puerta gratis, cargas y te vas. Sin estrés.
            </p>
        </div>
        <div class="order-1 md:order-2 h-64 md:h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-lg relative">
            <LocationMap title="Ubicación sin Atascos" />
             <div class="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-bold text-gray-800">
                🚗 Parking Gratuito Clientes
            </div>
        </div>
    </div>
  </Section>

  <!-- Section 4: Testimonios Locales (Social Proof) -->
  <Section class="bg-white">
      <div class="text-center max-w-4xl mx-auto mb-12">
          <h2 class="text-3xl font-bold mb-6">Lo que dicen tus vecinos</h2>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div class="flex text-yellow-400 mb-4">★★★★★</div>
              <p class="text-gray-600 italic mb-4">"Vivo en San Benito y bajaba siempre al Hiperdino. Desde que descubrí Terencio subo en un momento, compro la carne para todo el mes y me ahorro un dinero curioso."</p>
              <p class="font-bold text-gray-900">— María C.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div class="flex text-yellow-400 mb-4">★★★★★</div>
              <p class="text-gray-600 italic mb-4">"Para organizar los cumpleaños de los niños es lo mejor. Los paquetes grandes de papas, refrescos y los perritos salen tirados de precio."</p>
              <p class="font-bold text-gray-900">— Pedro G.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div class="flex text-yellow-400 mb-4">★★★★★</div>
              <p class="text-gray-600 italic mb-4">"La carnicería no tiene nada que envidiar a una boutique de carne, pero con precios de mayorista. 100% recomendado."</p>
              <p class="font-bold text-gray-900">— Laura M.</p>
          </div>
      </div>
  </Section>

  <!-- CTA -->
  <Section class="bg-blue-900 text-white text-center">
    <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Haz la prueba este fin de semana</h2>
        <p class="text-xl text-blue-100 mb-8">
            Ven a hacer tu compra semanal. Guarda el ticket y compáralo con el de tu súper habitual. Te convencerás solo.
        </p>
        <Button href="https://www.google.com/maps/search/?api=1&query=Terencio+Cash+Market" target="_blank" variant="primary" class="gap-2 bg-white text-blue-900 hover:bg-blue-50">
            📍 Cómo llegar a Terencio
        </Button>
    </div>
  </Section>

</Layout>


--- START OF FILE: src/pages/carniceria-cerca-de-mi-la-laguna.astro ---


---
import LocationMap from "../components/LocationMap.astro";
import LocalBusinessSchema from "../components/SEO/LocalBusinessSchema.astro";
import Button from "../components/ui/Button.astro";
import Section from "../components/ui/Section.astro";
import Layout from "../layouts/Layout.astro";

const title = "Carnicería en La Laguna | Carne Fresca y Carne de Fiesta al Mejor Precio";
const description = "La mejor carnicería cerca de La Laguna y La Esperanza. Especialistas en Carne de Fiesta, chuletones madurados, costillas y preparados para barbacoa. Calidad de carnicero a precio de almacén.";
---

<LocalBusinessSchema type="GroceryStore" name="Carnicería Terencio" description={description} />
<Layout title={title} description={description}>
  
  <!-- Hero Section -->
  <header class="relative bg-red-900 text-white py-24 overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
    <div class="container mx-auto px-4 text-center relative z-10">
        <span class="bg-red-700 text-red-100 py-1 px-4 rounded-full text-sm font-bold tracking-wider uppercase mb-6 inline-block shadow-lg">
            Calidad Artesana
        </span>
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Tu Carnicería de Confianza<br/>
            <span class="text-red-300">muy cerca de La Laguna</span>
        </h1>
        <p class="text-xl text-red-50 max-w-3xl mx-auto mb-10 font-light">
            Recuperamos el sabor de siempre. Olvida las bandejas de plástico del supermercado y redescubre el placer de pedir tu corte favorito al carnicero de toda la vida.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#productos" variant="primary" class="bg-white text-red-900 hover:bg-gray-100 shadow-xl border-none">
                Ver Qué Ofrecemos
            </Button>
            <Button href="https://maps.google.com/?q=Terencio+Cash+Market" target="_blank" variant="outline" class="border-red-300 text-red-100 hover:bg-red-800 hover:border-red-400">
                📍 Cómo llegar desde La Laguna
            </Button>
        </div>
    </div>
  </header>

  <!-- Value Proposition -->
  <Section class="bg-white">
    <div class="text-center md:max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold mb-6 text-gray-900">¿Por qué venir hasta Terencio a por carne?</h2>
        <p class="text-gray-600 text-lg">
            Muchos clientes vienen desde el centro de La Laguna, Geneto o San Benito solo por nuestra carnicería. ¿El secreto? <strong>Rotación y Oficio</strong>. Al vender grandes volúmenes a restaurantes, nuestra carne siempre es fresca del día.
        </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="p-8 border rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition bg-gray-50 group">
            <span class="text-6xl block mb-6 group-hover:scale-110 transition duration-300">🔪</span>
            <h3 class="font-bold text-xl mb-3 text-gray-900">Corte a Cuchillo</h3>
            <p class="text-gray-600 leading-relaxed">Ni máquinas industriales ni gas inerte. Cortamos la pieza delante de ti, quitamos la grasa que sobra y te llevas 100% producto.</p>
        </div>
        <div class="p-8 border rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition bg-gray-50 group">
            <span class="text-6xl block mb-6 group-hover:scale-110 transition duration-300">🏪</span>
            <h3 class="font-bold text-xl mb-3 text-gray-900">Precios de Almacén</h3>
            <p class="text-gray-600 leading-relaxed">Al ser Cash & Carry, aplicamos precios de mayorista tanto si te llevas un filete como si te llevas una pieza entera. Ahorras en cada kilo.</p>
        </div>
        <div class="p-8 border rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition bg-gray-50 group">
            <span class="text-6xl block mb-6 group-hover:scale-110 transition duration-300">🚗</span>
            <h3 class="font-bold text-xl mb-3 text-gray-900">Sin Agobios</h3>
            <p class="text-gray-600 leading-relaxed">Aparca en la puerta. Sin dar vueltas buscando parking en La Laguna. Llegas, compras calidad y vuelves a casa.</p>
        </div>
    </div>
  </Section>

  <!-- Star Products Section -->
  <Section id="productos" class="bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Nuestros Cortes Estrella</h2>
          
          <div class="grid md:grid-cols-2 gap-12">
              <!-- Carne de Fiesta -->
              <div class="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-2xl shadow-lg border border-red-50 relative overflow-hidden">
                  <div class="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">Top Ventas</div>
                  <div class="w-full md:w-1/3 aspect-square bg-red-100 rounded-xl flex items-center justify-center text-5xl">
                      🥩
                  </div>
                  <div class="w-full md:w-2/3">
                      <h3 class="text-2xl font-bold text-gray-900 mb-2">La Auténtica Carne de Fiesta</h3>
                      <p class="text-gray-600 mb-4 text-sm">
                          El clásico de las romerías de La Laguna. Dados de cerdo marinados con nuestra receta tradicional de mojo, vino y especias. Lista para freír y triunfar.
                      </p>
                  </div>
              </div>

              <!-- Chuletón -->
              <div class="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-2xl shadow-lg border border-red-50">
                   <div class="w-full md:w-1/3 aspect-square bg-red-100 rounded-xl flex items-center justify-center text-5xl">
                      🍖
                  </div>
                  <div class="w-full md:w-2/3">
                      <h3 class="text-2xl font-bold text-gray-900 mb-2">Chuletones y Lomo Alto</h3>
                      <p class="text-gray-600 mb-4 text-sm">
                          Para los amantes de la brasa. Piezas seleccionadas con buena infiltración de grasa. Te cortamos el grosor que pidas: de dos dedos, de tres... tú mandas.
                      </p>
                  </div>
              </div>

              <!-- Elaborados -->
              <div class="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-2xl shadow-lg border border-red-50">
                   <div class="w-full md:w-1/3 aspect-square bg-red-100 rounded-xl flex items-center justify-center text-5xl">
                      🌭
                  </div>
                  <div class="w-full md:w-2/3">
                      <h3 class="text-2xl font-bold text-gray-900 mb-2">Elaborados Caseros</h3>
                      <p class="text-gray-600 mb-4 text-sm">
                          Hamburguesas hechas aquí (no congeladas industriales), salchichas frescas, pinchos morunos y nuestros famosos chorizos parrilleros.
                      </p>
                  </div>
              </div>

              <!-- Barbacoa Pack -->
              <div class="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-2xl shadow-lg border border-yellow-200 bg-yellow-50">
                   <div class="w-full md:w-1/3 aspect-square bg-yellow-200 rounded-xl flex items-center justify-center text-5xl">
                      🔥
                  </div>
                  <div class="w-full md:w-2/3">
                      <h3 class="text-2xl font-bold text-gray-900 mb-2">Packs para Barbacoa</h3>
                      <p class="text-gray-600 mb-4 text-sm">
                          ¿Plan de fin de semana en el monte o la terraza? Llévate todo lo necesario: costillas, panceta, chistorra y el carbón en una sola parada.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </Section>

  <!-- Location Map & Local SEO Focus -->
  <Section class="bg-gray-900 text-white">
    <div class="grid md:grid-cols-2 gap-12 items-center">
         <div>
             <h2 class="text-3xl font-bold mb-6">Tu Carnicería cerca de casa</h2>
             <p class="text-gray-300 mb-6 leading-relaxed">
                 Aunque estamos en la Carretera de La Esperanza, somos la carnicería de referencia para muchos vecinos de:
             </p>
             <ul class="grid grid-cols-2 gap-4 mb-8">
                 <li class="flex items-center gap-2"><span class="text-green-400">✓</span> La Laguna Centro</li>
                 <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Los Baldíos</li>
                 <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Llano del Moro</li>
                 <li class="flex items-center gap-2"><span class="text-green-400">✓</span> El Centenero</li>
                 <li class="flex items-center gap-2"><span class="text-green-400">✓</span> San Miguel de Geneto</li>
                 <li class="flex items-center gap-2"><span class="text-green-400">✓</span> La Esperanza</li>
             </ul>
             <p class="text-sm text-gray-400 italic">
                 "Vale la pena subir 5 minutos desde La Laguna por la calidad y el precio que encuentras aquí."
             </p>
         </div>
         <div class="h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
             <LocationMap title="Cómo llegar a Carnicería Terencio" />
        </div>
    </div>
  </Section>

  <!-- FAQ Section with Schema Markup possibility -->
  <Section class="bg-white">
      <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-10">Preguntas Frecuentes en la Carnicería</h2>
          
          <div class="divide-y divide-gray-100">
              <div class="py-6">
                  <h3 class="font-bold text-lg mb-2">¿Puedo encargar carne para una fiesta grande?</h3>
                  <p class="text-gray-600">
                      Sí, por supuesto. Si vas a celebrar un cumpleaños, una boda o una comida de empresa, puedes llamarnos un par de días antes y te preparamos el pedido completo (cortado y envasado si lo prefieres) para que solo tengas que venir a recogerlo sin esperas.
                  </p>
              </div>
              <div class="py-6">
                  <h3 class="font-bold text-lg mb-2">¿Vendéis carne madurada?</h3>
                  <p class="text-gray-600">
                      Disponemos de piezas de lomo alto y bajo con diferentes puntos de maduración. Pregunta a nuestros carniceros qué piezas están en su punto óptimo esa semana.
                  </p>
              </div>
              <div class="py-6">
                  <h3 class="font-bold text-lg mb-2">¿Envasáis al vacío?</h3>
                  <p class="text-gray-600">
                      Sí. Si quieres comprar cantidad para congelar o conservar mejor en la nevera, pídenos que te lo envasemos al vacío. Es un servicio gratuito y la mejor forma de mantener la frescura de la carne.
                  </p>
              </div>
              <div class="py-6">
                  <h3 class="font-bold text-lg mb-2">¿Tenéis opciones para intolerancias?</h3>
                  <p class="text-gray-600">
                      Elaboramos nuestras propias hamburguesas y preparados. Consulta siempre con el carnicero sobre los alérgenos, ya que al ser un obrador artesano podemos informarte con total precisión de los ingredientes de cada preparado.
                  </p>
              </div>
          </div>
      </div>
  </Section>

  <!-- CTA Final -->
  <Section class="bg-gray-100 text-center">
    <h2 class="text-3xl font-bold mb-6">¿Qué apetece comer hoy?</h2>
    <p class="text-xl text-gray-600 mb-8 md:px-20">
        Ven a vernos y deja que te recomendemos el mejor corte del día.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
         <Button href="tel:922550067" variant="primary">
            📞 Llamar a Carnicería
        </Button>
         <Button href="/terencio-cash-market" variant="ghost">
            Ver Ofertas Generales
        </Button>
    </div>
  </Section>

</Layout>


--- START OF FILE: src/pages/cash-carry-tenerife.astro ---


---
import LocationMap from "../components/LocationMap.astro";
import Layout from "../layouts/Layout.astro";

const title = "Cash & Carry Tenerife | Mayorista de Alimentación y Bebidas";
const description = "Tu Cash & Carry en Tenerife para hostelería y particulares. Encuentra los mejores precios en alimentación, bebidas y limpieza en Terencio Cash Market.";
const canonical = "https://terencio.es/cash-carry-tenerife";
---

<Layout title={title} description={description} canonical={canonical} image="/store-local.jpg">
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-green-800 to-green-900 text-white py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">Tu Cash & Carry de Confianza en Tenerife</h1>
      <p class="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-10">
        Miles de productos al mejor precio para tu negocio de hostelería o para tu hogar. Sin necesidad de tarjeta de socio.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
         <a href="/profesionales" class="bg-white text-green-900 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition shadow-lg">
            Soy Profesional
         </a>
         <a href="/ofertas" class="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
            Ver Ofertas
         </a>
      </div>
    </div>
  </section>

  <!-- Value Props -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
       <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
             <span class="material-icons-outlined text-5xl text-green-600 mb-4">storefront</span>
             <h3 class="text-xl font-bold mb-3">Venta Directa</h3>
             <p class="text-gray-600">Compra directa en nuestro almacén. Ven, elige lo que necesitas y llévatelo al momento.</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
             <span class="material-icons-outlined text-5xl text-green-600 mb-4">local_shipping</span>
             <h3 class="text-xl font-bold mb-3">Formatos Ahorro</h3>
             <p class="text-gray-600">Envases grandes y formatos industriales pensados para la rentabilidad de tu negocio.</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
             <span class="material-icons-outlined text-5xl text-green-600 mb-4">verified</span>
             <h3 class="text-xl font-bold mb-3">Calidad Garantizada</h3>
             <p class="text-gray-600">Trabajamos con las mejores marcas y proveedores locales de Tenerife.</p>
          </div>
       </div>
    </div>
  </section>

  <!-- SEO Content -->
  <section class="py-16 bg-gray-50">
     <div class="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
           <img 
             src="/store-local.jpg" 
             alt="Pasillo de Terencio Cash Market" 
             class="rounded-xl shadow-lg w-full h-auto object-cover"
           />
        </div>
        <div class="prose prose-green">
           <h2 class="text-3xl font-bold text-gray-900">¿Por qué elegir nuestro Cash & Carry?</h2>
           <p class="text-gray-600 text-lg">
             Ubicados estratégicamente en la carretera de La Esperanza, somos el punto de referencia para cientos de negocios del área metropolitana de Tenerife (Santa Cruz y La Laguna).
           </p>
           <p class="text-gray-600">
             En <strong>Terencio Cash Market</strong> nos diferenciamos por ofrecer un trato cercano y personalizado. No somos una gran multinacional impersonal; somos tu socio local. Entendemos los retos de la hostelería en Canarias y adaptamos nuestro surtido para ofrecerte soluciones reales.
           </p>
           <ul class="not-prose space-y-2 mt-4">
              <li class="flex items-center gap-2 font-medium text-gray-700">
                 <span class="text-green-600">✓</span> Amplio stock permanente
              </li>
              <li class="flex items-center gap-2 font-medium text-gray-700">
                 <span class="text-green-600">✓</span> Parking gratuito y fácil carga
              </li>
              <li class="flex items-center gap-2 font-medium text-gray-700">
                 <span class="text-green-600">✓</span> Atención rápida y sin colas
              </li>
           </ul>
        </div>
     </div>
  </section>

  <!-- Location -->
  <section class="py-16">
    <div class="container mx-auto px-4 text-center mb-8">
       <h2 class="text-3xl font-bold mb-4">Visítanos en La Esperanza</h2>
       <p class="text-gray-600">Estamos muy cerca de ti, con fácil acceso desde la autopista.</p>
    </div>
    <LocationMap />
  </section>

</Layout>


--- START OF FILE: src/pages/mayorista-hosteleria-la-laguna.astro ---


---
import bgImage from "../assets/supermercados-terencio.jpg";
import ProfessionalForm from "../components/forms/ProfessionalForm";
import Button from "../components/ui/Button.astro";
import PageHeader from "../components/ui/PageHeader.astro";
import Section from "../components/ui/Section.astro";
import Layout from "../layouts/Layout.astro";

const title = "Mayorista Hostelería La Laguna | Proveedor Nº1 para Bares y Restaurantes";
const description = "El mayorista de hostelería líder en el área metropolitana de La Laguna. Precios directos de fábrica en bebidas, alcohol, alimentación seca y limpieza. Servicio express y parking gratuito.";
const canonical = "https://terencio.es/mayorista-hosteleria-la-laguna";
---

<Layout title={title} description={description} canonical={canonical} image={bgImage.src}>
  
  <!-- Hero Section con Copywriting Persuasivo -->
  <PageHeader 
    title="Tu Negocio en La Laguna Merece Más Margen" 
    subtitle="Deja de pagar sobrecostes en distribución. En Terencio Cash Market somos el pulmón logístico de cientos de bares, cafeterías y restaurantes de San Cristóbal de La Laguna."
    badge="Distribución HORECA La Laguna"
    backgroundImage={bgImage.src}
    bgClass="bg-green-900"
  >
     <div class="flex flex-col sm:flex-row gap-4 justify-center">
         <Button href="#catalogo" variant="primary" class="text-lg px-8 py-4 shadow-xl hover:-translate-y-1 transition-all">
             Ver Catálogo HORECA
         </Button>
         <Button href="/contacto" variant="outline" class="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-green-900 shadow-xl hover:-translate-y-1 transition-all">
             Hablar con un Comercial
         </Button>
     </div>
  </PageHeader>

  <!-- Problem/Solution Section -->
  <Section class="bg-white">
    <div class="max-w-4xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">El Problema de la Hostelería en La Laguna</h2>
        <p class="text-xl text-gray-600 leading-relaxed">
            Sabemos lo difícil que es gestionar un local en el centro o alrededores. 
            Proveedores que llegan tarde, precios que suben sin avisar, y la pesadilla del <strong>aparcamiento y la carga/descarga</strong> en el casco histórico o el Cuadrilátero.
        </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div class="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h3 class="font-bold text-red-800 text-xl mb-3">❌ Márgenes Asfixiantes</h3>
            <p class="text-gray-700">Comprar en supermercados convencionales o depender de preventistas caros se come tu beneficio por plato.</p>
        </div>
        <div class="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h3 class="font-bold text-red-800 text-xl mb-3">❌ Roturas de Stock</h3>
            <p class="text-gray-700">"Te lo traigo mañana" no le sirve a tus clientes hoy. Quedarse sin ginebra un viernes noche es perder dinero.</p>
        </div>
        <div class="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h3 class="font-bold text-red-800 text-xl mb-3">❌ Logística Imposible</h3>
            <p class="text-gray-700">Camiones atascados, horarios de entrega rígidos y multas de tráfico en zonas peatonales.</p>
        </div>
    </div>

    <div class="text-center">
        <h3 class="text-3xl font-bold text-green-800 mb-4">La Solución Terencio</h3>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos estratégicamente ubicados en la <strong>Carretera de La Esperanza</strong>, a solo 5 minutos del centro de La Laguna pero fuera del caos. 
            Ven, carga en nuestro parking gigante y vuelve a tu negocio en tiempo récord. O te lo llevamos nosotros. Tú eliges.
        </p>
    </div>
  </Section>

  <!-- Segmentación por Tipo de Negocio en La Laguna -->
  <Section class="bg-gray-50">
      <div class="container mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Soluciones Específicas para tu Local</h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Ocio Nocturno -->
              <div class="bg-white rounded-2xl shadow-lg overflow-hidden group">
                  <div class="h-48 bg-purple-900 flex items-center justify-center">
                      <span class="text-6xl">🍸</span>
                  </div>
                  <div class="p-8">
                      <h3 class="text-2xl font-bold mb-4 text-gray-900">Ocio Nocturno & Pubs</h3>
                      <p class="text-gray-600 mb-6 text-sm">Para los locales del <strong>Cuadrilátero</strong> y la zona de marcha.</p>
                      <ul class="space-y-3 mb-8">
                          <li class="flex items-center gap-2 text-gray-700"><span class="text-green-500">✔</span> Ginebras y Vodkas Premium</li>
                          <li class="flex items-center gap-2 text-gray-700"><span class="text-green-500">✔</span> Tónicas y Mixers exclusivos</li>
                          <li class="flex items-center gap-2 text-gray-700"><span class="text-green-500">✔</span> Hielo, pajitas y cristalería</li>
                          <li class="flex items-center gap-2 text-gray-700"><span class="text-green-500">✔</span> Snacks salados a granel</li>
                      </ul>
                      <a href="#contacto" class="block w-full text-center bg-purple-100 text-purple-700 font-bold py-3 rounded-lg hover:bg-purple-200 transition">Tarifas de Alcohol</a>
                  </div>
              </div>

              <!-- Cafeterías -->
              <div class="bg-white rounded-2xl shadow-lg overflow-hidden group">
                  <div class="h-48 bg-orange-100 flex items-center justify-center">
                      <span class="text-6xl">☕</span>
                  </div>
                  <div class="p-8">
                      <h3 class="text-2xl font-bold mb-4 text-gray-900">Cafeterías y Desayunos</h3>
                      <p class="text-gray-600 mb-6 text-sm">Desde <strong>La Cuesta</strong> hasta <strong>San Benito</strong>.</p>
                      <ul class="space-y-3 mb-8">
                          <li class="flex items-center gap-2 text-gray-700"><span class="text-green-500">✔</span> Café en grano de alta calidad</li>
                          <li class="flex items-center gap-2 text-gray-700"><span class="text-green-500">✔</span> Leches especiales y vegetales</li>
                          <li class="flex items-center gap-2 text-gray-700"><span class="text-green-500">✔</span> Bollería congelada y pan</li>
                          <li class="flex items-center gap-2 text-gray-700"><span class="text-green-500">✔</span> Azucarillos y edulcorantes</li>
                      </ul>
                      <a href="#contacto" class="block w-full text-center bg-orange-100 text-orange-700 font-bold py-3 rounded-lg hover:bg-orange-200 transition">Tarifas de Desayuno</a>
                  </div>
              </div>

              <!-- Restauración -->
              <div class="bg-white rounded-2xl shadow-lg overflow-hidden group">
                  <div class="h-48 bg-red-100 flex items-center justify-center">
                      <span class="text-6xl">🥘</span>
                  </div>
                  <div class="p-8">
                      <h3 class="text-2xl font-bold mb-4 text-gray-900">Restaurantes y Guachinches</h3>
                      <p class="text-gray-600 mb-6 text-sm">Para la cocina tradicional de <strong>Los Baldíos, Geneto y Guamasa</strong>.</p>
                      <ul class="space-y-3 mb-8">
                          <li class="flex items-center gap-2 text-gray-700"><span class="text-green-500">✔</span> Aceites (Oliva, Girasol) 25L</li>
                          <li class="flex items-center gap-2 text-gray-700"><span class="text-green-500">✔</span> Conservas formato HORECA</li>
                          <li class="flex items-center gap-2 text-gray-700"><span class="text-green-500">✔</span> Carne fresca al corte</li>
                          <li class="flex items-center gap-2 text-gray-700"><span class="text-green-500">✔</span> Vinos de la casa (Bag in Box)</li>
                      </ul>
                      <a href="#contacto" class="block w-full text-center bg-red-100 text-red-700 font-bold py-3 rounded-lg hover:bg-red-200 transition">Tarifas de Restauración</a>
                  </div>
              </div>
          </div>
      </div>
  </Section>

  <!-- Catálogo Detallado -->
  <Section id="catalogo" class="bg-white">
      <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-16">Un Catálogo Diseñado para el Profesional</h2>
          
          <!-- Category 1 -->
          <div class="flex flex-col md:flex-row gap-12 mb-20 items-center">
              <div class="md:w-1/2">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Bodega y Licores: Tu Margen está Aquí</h3>
                  <p class="text-gray-600 mb-6">
                      El alcohol es una de las partidas más importantes para la rentabilidad de un bar nocturno en La Laguna. Trabajamos directamente con distribuidoras nacionales e internacionales para ofrecerte precios netos imbatibles.
                  </p>
                  <div class="grid grid-cols-2 gap-4">
                      <div class="bg-gray-50 p-4 rounded-lg">
                          <h4 class="font-bold text-sm uppercase text-gray-500 mb-2">Destilados</h4>
                          <p class="text-sm font-medium">Beefeater, Tanqueray, Puerto de Indias, Arehucas, Havana Club, White Label, Cardhu...</p>
                      </div>
                      <div class="bg-gray-50 p-4 rounded-lg">
                          <h4 class="font-bold text-sm uppercase text-gray-500 mb-2">Vinos</h4>
                          <p class="text-sm font-medium">Riojas, Riberas, Vinos Canarios (Abona, Tacoronte, Valle de La Orotava, El Hierro).</p>
                      </div>
                  </div>
              </div>
              <div class="md:w-1/2">
                   <!-- Placeholder for bottle grid image -->
                   <div class="aspect-video bg-gradient-to-tr from-purple-100 to-blue-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                       <span class="text-6xl">🍷🥃</span>
                   </div>
              </div>
          </div>

          <!-- Category 2 -->
           <div class="flex flex-col md:flex-row-reverse gap-12 mb-20 items-center">
              <div class="md:w-1/2">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Limpieza e Higiene Industrial</h3>
                  <p class="text-gray-600 mb-6">
                      La seguridad alimentaria y la imagen de tu local dependen de la limpieza. Ofrecemos soluciones profesionales concentradas que reducen el coste por uso.
                  </p>
                  <ul class="space-y-2">
                      <li class="flex items-center gap-3">
                          <span class="bg-green-100 p-1 rounded text-green-700 text-xs">Ahorro</span>
                          <span class="text-gray-700">Lavavajillas y abrillantadores industriales (Bidones 10L/20L).</span>
                      </li>
                      <li class="flex items-center gap-3">
                          <span class="bg-green-100 p-1 rounded text-green-700 text-xs">Calidad</span>
                          <span class="text-gray-700">Celulosa: Papel higiénico jumbo, toallas secamanos, servilletas.</span>
                      </li>
                      <li class="flex items-center gap-3">
                          <span class="bg-green-100 p-1 rounded text-green-700 text-xs">Seguridad</span>
                          <span class="text-gray-700">Desinfectantes APPCC y productos específicos para planchas y hornos.</span>
                      </li>
                  </ul>
              </div>
              <div class="md:w-1/2">
                   <div class="aspect-video bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                       <span class="text-6xl">🧼🧻</span>
                   </div>
              </div>
          </div>
          
          <!-- Category 3 -->
          <div class="flex flex-col md:flex-row gap-12 items-center">
              <div class="md:w-1/2">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Alimentación Seca y Conservas</h3>
                  <p class="text-gray-600 mb-6">
                      La base de tu cocina. No pagues por packaging doméstico cuando puedes comprar formatos HORECA eficientes.
                  </p>
                  <div class="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h4 class="font-bold text-orange-900 mb-2">Top Ventas Restauración:</h4>
                      <ul class="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                          <li>• Aceites 5L y 25L</li>
                          <li>• Atún en bolsa 1kg</li>
                          <li>• Mayonesas y Salsas 3L</li>
                          <li>• Harinas Especiales</li>
                          <li>• Especias 1kg</li>
                          <li>• Frutos Secos 1kg</li>
                      </ul>
                  </div>
              </div>
              <div class="md:w-1/2">
                   <div class="aspect-video bg-gradient-to-tr from-orange-100 to-yellow-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                       <span class="text-6xl">🥫🥣</span>
                   </div>
              </div>
          </div>

      </div>
  </Section>

  <!-- Comparative Table -->
  <Section class="bg-gray-900 text-white">
      <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Por qué cambiar a Terencio</h2>
          <div class="overflow-x-auto">
              <table class="w-full max-w-4xl mx-auto text-left border-collapse">
                  <thead>
                      <tr class="border-b border-gray-700">
                          <th class="p-4 text-gray-400 font-normal uppercase tracking-wider text-sm">Característica</th>
                          <th class="p-4 bg-green-900 text-white font-bold text-lg border-t-4 border-green-500 rounded-t-lg">Terencio HORECA</th>
                          <th class="p-4 text-gray-500 font-medium">Mayorista Típico</th>
                          <th class="p-4 text-gray-500 font-medium">Supermercado</th>
                      </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-800">
                      <tr>
                          <td class="p-4">Precios</td>
                          <td class="p-4 bg-green-900/50 font-bold text-green-400">Escalados por Volumen</td>
                          <td class="p-4 text-gray-400">Negociados (Ocultos)</td>
                          <td class="p-4 text-gray-400">PVP Alto</td>
                      </tr>
                      <tr>
                          <td class="p-4">Flexibilidad</td>
                          <td class="p-4 bg-green-900/50 font-bold text-green-400">Sin pedido mínimo</td>
                          <td class="p-4 text-gray-400">Pedido mínimo alto</td>
                          <td class="p-4 text-gray-400">Bandejas pequeñas</td>
                      </tr>
                      <tr>
                          <td class="p-4">Disponibilidad</td>
                          <td class="p-4 bg-green-900/50 font-bold text-green-400">Inmediata (Cash & Carry)</td>
                          <td class="p-4 text-gray-400">24-48 horas</td>
                          <td class="p-4 text-gray-400">Stock limitado</td>
                      </tr>
                      <tr>
                          <td class="p-4">Atención</td>
                          <td class="p-4 bg-green-900/50 font-bold text-green-400">Personalizado</td>
                          <td class="p-4 text-gray-400">Preventista</td>
                          <td class="p-4 text-gray-400">Cajera</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </Section>

  <!-- FAQ Section (SEO Gold) -->
  <Section class="bg-white">
      <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-10">Preguntas Frecuentes de Hosteleros de La Laguna</h2>
          
          <div class="space-y-6">
              <details class="group bg-gray-50 p-6 rounded-xl cursor-pointer shadow-sm">
                  <summary class="flex justify-between items-center font-bold text-lg list-none text-gray-900">
                      <span>¿Hacéis reparto en La Laguna centro (zona peatonal)?</span>
                      <span class="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p class="text-gray-600 mt-4 leading-relaxed">
                      Sí. Entendemos las restricciones de tráfico del casco histórico de La Laguna. Coordinamos nuestras rutas de reparto en los horarios permitidos para carga y descarga en vías peatonales para que recibas tu mercancía sin multas ni problemas.
                  </p>
              </details>

              <details class="group bg-gray-50 p-6 rounded-xl cursor-pointer shadow-sm">
                  <summary class="flex justify-between items-center font-bold text-lg list-none text-gray-900">
                      <span>¿Tengo que comprar cajas enteras o puedo llevar unidades sueltas?</span>
                      <span class="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p class="text-gray-600 mt-4 leading-relaxed">
                      En Terencio tienes total libertad. Puedes comprar unidades sueltas para probar un producto o reponer una rotura puntual, y cajas completas para tus productos de alta rotación con un mejor precio unitario. Nos adaptamos a tu necesidad de stock.
                  </p>
              </details>

              <details class="group bg-gray-50 p-6 rounded-xl cursor-pointer shadow-sm">
                  <summary class="flex justify-between items-center font-bold text-lg list-none text-gray-900">
                      <span>¿Qué documentación necesito para la ficha de cliente?</span>
                      <span class="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p class="text-gray-600 mt-4 leading-relaxed">
                      Solo necesitas presentar tu modelo 036/037 donde conste tu epígrafe de actividad (IAE) relacionado con hostelería o alimentación, y el DNI/CIF del titular. Te damos de alta en el momento y puedes empezar a comprar con tarifa profesional inmediatamente.
                  </p>
              </details>

              <details class="group bg-gray-50 p-6 rounded-xl cursor-pointer shadow-sm">
                  <summary class="flex justify-between items-center font-bold text-lg list-none text-gray-900">
                      <span>¿Tenéis servicio técnico para cafeteras o grifos?</span>
                      <span class="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p class="text-gray-600 mt-4 leading-relaxed">
                      Nos centramos 100% en la venta de producto para garantizarte el mejor precio. No instalamos maquinaria, lo que nos permite no atarte con contratos de permanencia ni consumos mínimos obligatorios. Eres libre de comprar lo que quieras, cuando quieras.
                  </p>
              </details>

              <details class="group bg-gray-50 p-6 rounded-xl cursor-pointer shadow-sm">
                  <summary class="flex justify-between items-center font-bold text-lg list-none text-gray-900">
                      <span>¿Abrís los fines de semana si me quedo sin stock?</span>
                      <span class="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p class="text-gray-600 mt-4 leading-relaxed">
                      ¡Por supuesto! Es nuestra gran ventaja. Abrimos Sábados y Domingos. Si te quedas sin bebida en mitad de un servicio fuerte de fin de semana, estamos abiertos para salvarte. Consulta nuestros horarios actualizados en la web.
                  </p>
              </details>
          </div>
      </div>
  </Section>

  <!-- Final CTA -->
  <Section id="contacto" class="bg-gradient-to-br from-green-900 to-green-800 text-white">
      <div class="container mx-auto px-4 text-center max-w-4xl">
          <h2 class="text-4xl font-bold mb-6">Empieza a optimizar tus compras hoy</h2>
          <p class="text-xl text-green-100 mb-10">
              Únete a la red de hosteleros de La Laguna que ya confían en Terencio. Solicita tu visita comercial o ven a vernos.
          </p>
          <div class="bg-white rounded-2xl p-8 shadow-2xl text-left">
              <ProfessionalForm client:visible />
          </div>
      </div>
  </Section>

</Layout>


--- START OF FILE: src/pages/profesionales-eventos.astro ---


---
import ProfessionalForm from "../components/forms/ProfessionalForm";
import LocalBusinessSchema from "../components/SEO/LocalBusinessSchema.astro";
import PageHeader from "../components/ui/PageHeader.astro";
import Section from "../components/ui/Section.astro";
import Layout from "../layouts/Layout.astro";

const title = "Proveedores para Catering y Eventos en Tenerife - Terencio";
const description = "Todo lo que necesitas para tu catering o evento. Bebidas, menaje desechable, snacks y alimentación por mayor. Precios especiales por volumen.";
---

<LocalBusinessSchema type="WholesaleStore" />
<Layout title={title} description={description}>
  
  <PageHeader 
    title="El Éxito de tu Evento empieza aquí" 
    subtitle="Desde grandes bodas hasta fiestas privadas. Tenemos el stock y la variedad que necesitas para sorprender."
    badge="Eventos & Catering"
    bgClass="bg-purple-900"
    gradientClass="bg-gradient-to-b from-purple-900/90 via-purple-900/80 to-purple-900/90"
    badgeClass="bg-purple-800 text-purple-100 border-purple-400"
  />

  <Section class="bg-white">
    <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
            <div class="flex gap-4 items-start">
                <span class="text-3xl bg-purple-100 p-3 rounded-lg">🥂</span>
                <div>
                    <h3 class="font-bold text-xl mb-2">Bodega y Licores</h3>
                    <p class="text-gray-600">Amplia gama de vinos, cavas, refrescos y alcoholes para barra libre. Precios escalados por volumen de compra.</p>
                </div>
            </div>
            <div class="flex gap-4 items-start">
                <span class="text-3xl bg-purple-100 p-3 rounded-lg">🍽️</span>
                <div>
                    <h3 class="font-bold text-xl mb-2">Menaje Desechable</h3>
                    <p class="text-gray-600">Platos, vasos, cubiertos y servilletas de todas las calidades, desde lo económico hasta opciones premium y ecológicas.</p>
                </div>
            </div>
            <div class="flex gap-4 items-start">
                <span class="text-3xl bg-purple-100 p-3 rounded-lg">🧀</span>
                <div>
                    <h3 class="font-bold text-xl mb-2">Aperitivos y Quesos</h3>
                    <p class="text-gray-600">Quesos enteros, embutidos ibéricos y snacks en formatos gigantes para cócteles y recepciones.</p>
                </div>
            </div>
        </div>
        
        <div class="bg-purple-900 text-white p-8 rounded-2xl shadow-xl">
            <h2 class="text-2xl font-bold mb-4">¿Planificando un evento grande?</h2>
            <p class="text-purple-100 mb-6">
                Si necesitas grandes cantidades de una referencia específica, avísanos con antelación y reservaremos tu stock para que no falte nada el día D.
            </p>
            <ProfessionalForm client:visible />
        </div>
    </div>
  </Section>

</Layout>


--- START OF FILE: src/pages/profesionales-hoteles.astro ---


---
import ProfessionalForm from "../components/forms/ProfessionalForm";
import LocalBusinessSchema from "../components/SEO/LocalBusinessSchema.astro";
import Button from "../components/ui/Button.astro";
import PageHeader from "../components/ui/PageHeader.astro";
import Section from "../components/ui/Section.astro";
import Layout from "../layouts/Layout.astro";

const title = "Proveedores para Hoteles y Apartamentos - Terencio Mayorista";
const description = "Suministros integrales para hoteles y apartamentos turísticos en Tenerife. Desayunos buffet, amenities, limpieza y mantenimiento.";
---

<LocalBusinessSchema type="WholesaleStore" />
<Layout title={title} description={description}>
  
  <PageHeader 
    title="Excelencia para tus Huéspedes" 
    subtitle="Soluciones integrales para Hoteles, Casas Rurales y Viviendas Vacacionales en Tenerife Norte y El Hierro."
    badge="Sector Hotelero"
    bgClass="bg-blue-900"
    gradientClass="bg-gradient-to-b from-blue-900/90 via-blue-900/80 to-blue-900/90"
    badgeClass="bg-blue-800 text-blue-100 border-blue-400"
  />

  <Section class="bg-white">
    <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div class="text-5xl mb-4">🥐</div>
            <h3 class="font-bold text-xl mb-2">Desayunos Buffet</h3>
            <p class="text-gray-600 text-sm">Bollería, mermeladas individuales, cafés y zumos en grandes formatos para optimizar tu buffet.</p>
        </div>
        <div class="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div class="text-5xl mb-4">🧹</div>
            <h3 class="font-bold text-xl mb-2">Limpieza y Amenities</h3>
            <p class="text-gray-600 text-sm">Productos de limpieza profesional y reposición de básicos para habitaciones y baños.</p>
        </div>
        <div class="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div class="text-5xl mb-4">🍷</div>
            <h3 class="font-bold text-xl mb-2">Bienvenida</h3>
            <p class="text-gray-600 text-sm">Vinos canarios y quesadillas de El Hierro para crear packs de bienvenida inolvidables.</p>
        </div>
    </div>
  </Section>

  <Section class="bg-gray-50">
    <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="text-3xl font-bold mb-6">Logística Eficiente a El Hierro</h2>
        <p class="text-gray-600 mb-8">
            Si gestionas alojamientos rurales en El Hierro, somos tu puente logístico. Consolidamos tu pedido de alimentación y limpieza para que recibas todo en un solo envío semanal.
        </p>
        <Button href="/contacto" variant="primary">
            Consultar Envíos a El Hierro
        </Button>
    </div>
  </Section>

  <Section id="contacto" class="bg-white">
    <div class="max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold text-center mb-8">Date de alta como cliente profesional</h2>
        <ProfessionalForm client:visible />
    </div>
  </Section>

</Layout>


--- START OF FILE: src/pages/profesionales-restaurantes.astro ---


---
import ProfessionalForm from "../components/forms/ProfessionalForm";
import LocalBusinessSchema from "../components/SEO/LocalBusinessSchema.astro";
import Button from "../components/ui/Button.astro";
import PageHeader from "../components/ui/PageHeader.astro";
import Section from "../components/ui/Section.astro";
import Layout from "../layouts/Layout.astro";

const title = "Proveedores para Restaurantes en Tenerife - Terencio Cash Market";
const description = "Suministros de hostelería para restaurantes y guachinches. Carne fresca, aceites, conservas y vinos con precios de mayorista. Distribución en Tenerife y El Hierro.";
---

<LocalBusinessSchema type="WholesaleStore" image="/assets/images/restaurante-bg.webp" />
<Layout title={title} description={description} image="/assets/images/restaurante-bg.webp">
  
  <PageHeader 
    title="Tu Socio en la Cocina" 
    subtitle="Abastecemos a los mejores guachinches y restaurantes del norte con productos frescos y formatos rentables."
    badge="HORECA Tenerife"
    bgClass="bg-orange-900"
    gradientClass="bg-gradient-to-b from-orange-900/90 via-orange-900/80 to-orange-900/90"
    badgeClass="bg-orange-800 text-orange-100 border-orange-400"
  />

  <Section class="bg-white">
    <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h2 class="text-3xl font-bold mb-6">¿Por qué cientos de restaurantes confían en nosotros?</h2>
            <ul class="space-y-6">
                <li class="flex gap-4">
                    <span class="text-4xl">🥩</span>
                    <div>
                        <h3 class="font-bold text-lg">Carne Fresca al Corte</h3>
                        <p class="text-gray-600">Nada de envasado industrial. Nuestros carniceros preparan tus chuletones, solomillos y carne de fiesta al momento y a tu gusto.</p>
                    </div>
                </li>
                <li class="flex gap-4">
                    <span class="text-4xl">🥘</span>
                    <div>
                        <h3 class="font-bold text-lg">Escandallos Rentables</h3>
                        <p class="text-gray-600">Te ayudamos a mantener el coste por plato bajo control con nuestros precios estables en aceites, arroces y básicos.</p>
                    </div>
                </li>
                <li class="flex gap-4">
                    <span class="text-4xl">🚛</span>
                    <div>
                        <h3 class="font-bold text-lg">Sin Pedidos Mínimos Absurdos</h3>
                        <p class="text-gray-600">Ven y carga solo lo que necesitas para el servicio de hoy. No inmovilices tu capital en stock innecesario.</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bg-gray-100 rounded-2xl p-8 border border-gray-200">
            <h3 class="font-bold text-xl mb-6 text-center">Solicita Tarifas de Hostelería</h3>
            <ProfessionalForm client:visible />
        </div>
    </div>
  </Section>

  <Section class="bg-orange-900 text-white text-center">
    <h2 class="text-3xl font-bold mb-4">¿Tienes una emergencia en pleno servicio?</h2>
    <p class="text-orange-100 mb-8 max-w-xl mx-auto">Estamos abiertos cuando otros proveedores cierran. Ven a buscar lo que te falta hasta las 21:00 (Domingos hasta las 20:30).</p>
    <Button href="/horario-terencio-cash-market" variant="primary" class="bg-white text-orange-900 hover:bg-orange-50">
        Ver Horarios de Emergencia
    </Button>
  </Section>

</Layout>


--- START OF FILE: src/pages/sostenibilidad.astro ---


---
import { Image } from "astro:assets";
import sostenibilidadImg from "../assets/images/sostenibilidad-1.webp";
import Layout from "../layouts/Layout.astro";
---

<Layout title="Sostenibilidad" image={sostenibilidadImg.src}>
  <div class="border-b-2 border-gray-200 mb-8">
    <h1
      class="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6"
    >
      Sostenibilidad
    </h1>
    <h2 class="text-2xl text-center text-gray-700 mb-8">
      En Terencio Supermercados estamos comprometidos con la sostenibilidad y el
      medio ambiente.
    </h2>

    <div>
      <h3 class="text-3xl font-semibold text-gray-800 mb-4">
        Nuestro Compromiso con el Medio Ambiente
      </h3>
      <p class="text-lg mb-6">
        En Terencio Supermercados, nos preocupamos por el impacto que tenemos en
        el medio ambiente. Por eso, estamos comprometidos con la sostenibilidad
        y la protección del planeta. Hemos implementado una serie de medidas
        para reducir nuestra huella de carbono y minimizar nuestro impacto en el
        entorno. Algunas de las acciones que hemos tomado incluyen:
      </p>
      <ul class="list-disc list-inside text-lg mb-6">
        <li>Reciclaje de residuos</li>
        <li>Uso de energías renovables</li>
        <li>Reducción del consumo de plástico</li>
        <li>Apoyo a la producción local</li>
      </ul>
     <div style="max-width: 500px; margin: 0 auto;">
        <Image
        src={sostenibilidadImg}
        alt="Sostenibilidad"
        class="w-full rounded mb-6"
        width={500}
        height={400}
      />
     </div>
      <p class="text-lg">
        Estamos comprometidos con la sostenibilidad y trabajamos constantemente
        para mejorar nuestras prácticas y reducir nuestro impacto en el medio
        ambiente. Creemos que es responsabilidad de todos cuidar el planeta y
        proteger los recursos naturales para las generaciones futuras.
      </p>
    </div>
  </div>
</Layout>


--- START OF FILE: src/pages/supermercado-cerca-de-mi-tenerife.astro ---


---
import interiorImage from "../assets/images/supermercado-interior.webp";
import LocationMap from "../components/LocationMap.astro";
import LocalBusinessSchema from "../components/SEO/LocalBusinessSchema.astro";
import Button from "../components/ui/Button.astro";
import PageHeader from "../components/ui/PageHeader.astro";
import Section from "../components/ui/Section.astro";
import Layout from "../layouts/Layout.astro";

const title = "Supermercado Cerca de Mí en Tenerife | Terencio Cash Market";
const description = "¿Buscas un supermercado cerca de ti en Tenerife Norte? Terencio Cash Market en La Esperanza está a pocos minutos de La Laguna. Parking gratis y precios bajos.";
---

<LocalBusinessSchema />
<Layout title={title} description={description}>
  <!-- Hero enfocado en cercanía -->
  <!-- Hero enfocado en cercanía -->
  <PageHeader 
    title='Tu Supermercado <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Cerca de Ti</span>'
    subtitle="A solo <strong>10 minutos de La Laguna</strong>. El supermercado donde ahorran los que saben comprar."
    badge="¡Estamos muy cerca!"
    badgeClass="bg-yellow-500 text-yellow-900 border-none shadow-md"
    backgroundImage={interiorImage.src}
  >
      <Button href="https://www.google.com/maps/search/?api=1&query=Terencio+Cash+Market" target="_blank" variant="primary" class="text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform bg-yellow-500 text-green-900 border-none hover:bg-yellow-400 font-extrabold">
        📍 Ir Ahora (Google Maps)
      </Button>
  </PageHeader>

  <!-- Distancias -->
  <Section class="bg-gray-50">
    <div class="max-w-4xl mx-auto text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">¿Cuánto tardas en llegar?</h2>
        <p class="text-gray-600">Estamos ubicados estratégicamente en la Carretera de La Esperanza, sin las colas del centro.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div class="bg-white p-6 rounded-xl shadow-sm border-b-4 border-green-500 text-center">
            <span class="text-4xl block mb-2">🚗</span>
            <h3 class="font-bold text-xl mb-1">Desde La Laguna</h3>
            <p class="text-green-700 font-extrabold text-2xl">8 - 10 min</p>
            <p class="text-xs text-gray-500 mt-2">Por Ctra. La Esperanza</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border-b-4 border-green-500 text-center">
            <span class="text-4xl block mb-2">🚗</span>
            <h3 class="font-bold text-xl mb-1">Desde Santa Cruz</h3>
            <p class="text-green-700 font-extrabold text-2xl">15 - 20 min</p>
            <p class="text-xs text-gray-500 mt-2">Por TF-5</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border-b-4 border-green-500 text-center">
            <span class="text-4xl block mb-2">🚗</span>
            <h3 class="font-bold text-xl mb-1">Desde El Rosario</h3>
            <p class="text-green-700 font-extrabold text-2xl">5 min</p>
            <p class="text-xs text-gray-500 mt-2">Vecinos directos</p>
        </div>
    </div>
  </Section>

  <!-- Por qué venir -->
  <Section class="bg-white">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h2 class="text-3xl font-bold mb-6">¿Por qué venir a Terencio en lugar del súper de la esquina?</h2>
            <ul class="space-y-4">
                <li class="flex gap-4">
                    <span class="bg-green-100 text-green-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <div>
                        <h4 class="font-bold text-gray-900">Precios de Cash & Carry</h4>
                        <p class="text-gray-600">Ahorra comprando formatos grandes o unidades sueltas a precio de mayorista.</p>
                    </div>
                </li>
                <li class="flex gap-4">
                    <span class="bg-green-100 text-green-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                        <h4 class="font-bold text-gray-900">Aparcamiento Gratuito</h4>
                        <p class="text-gray-600">Olvídate de dar vueltas. Tenemos parking propio justo en la puerta.</p>
                    </div>
                </li>
                <li class="flex gap-4">
                    <span class="bg-green-100 text-green-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                        <h4 class="font-bold text-gray-900">Sin Tarjeta de Socio</h4>
                        <p class="text-gray-600">Entrada libre para todo el mundo. Compra como un profesional.</p>
                    </div>
                </li>
            </ul>
            <div class="mt-8">
                <Button href="/terencio-cash-market" variant="secondary">
                    Ver Ofertas Semanales
                </Button>
            </div>
        </div>
        <div class="h-[400px] rounded-2xl overflow-hidden shadow-xl">
             <LocationMap title="Mapa de cercanía" />
        </div>
      </div>
  </Section>

  <Section class="bg-brand-secondary text-white text-center py-12">
      <h2 class="text-2xl font-bold mb-6">¿Te vienes? Estamos abiertos ahora</h2>
      <Button href="https://www.google.com/maps/search/?api=1&query=Terencio+Cash+Market" target="_blank" class="bg-white text-brand-secondary hover:bg-gray-100 font-bold px-8 py-3 rounded-full text-lg shadow-lg">
        Cómo llegar ➔
      </Button>
  </Section>
</Layout>


--- START OF FILE: src/pages/supermercado-la-esperanza.astro ---


---
import LocationMap from "../components/LocationMap.astro";
import Layout from "../layouts/Layout.astro";

const title = "Supermercado en La Esperanza | Compra diaria y OFERTAS";
const description = "Tu supermercado de barrio en La Esperanza. Productos frescos, panadería y las mejores marcas a precios de almacén. ¡Ven a visitarnos!";
const canonical = "https://terencio.es/supermercado-la-esperanza";
---

<Layout title={title} description={description} canonical={canonical} image="/supermercados-terencio.jpg">
  <!-- Friendly Hero -->
  <section class="bg-yellow-500 text-gray-900 py-16">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
      <div class="md:w-1/2">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Tu Supermercado en La Esperanza</h1>
        <p class="text-xl mb-8 font-medium">
          Calidad, frescura y precios bajos, muy cerca de casa.
        </p>
        <a href="/ofertas" class="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition shadow-lg">
           Ver Folleto de Ofertas
        </a>
      </div>
      <div class="md:w-1/2">
         <img src="/supermercados-terencio.jpg" alt="Vecinos comprando en Terencio" class="rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500" />
      </div>
    </div>
  </section>

  <!-- Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
       <h2 class="text-3xl font-bold text-center mb-12">Todo lo que necesitas para tu hogar</h2>
       <div class="grid md:grid-cols-3 gap-8 text-center">
          <div class="space-y-4">
             <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 text-3xl">🍏</div>
             <h3 class="text-xl font-bold">Frescos de Calidad</h3>
             <p class="text-gray-600">Frutas, verduras y charcutería seleccionada. Apostamos por el producto local de Tenerife.</p>
          </div>
          <div class="space-y-4">
             <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto text-yellow-600 text-3xl">🥖</div>
             <h3 class="text-xl font-bold">Panadería Diaria</h3>
             <p class="text-gray-600">Pan recién horneado y bollería cada mañana. El olor que te da los buenos días.</p>
          </div>
          <div class="space-y-4">
             <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600 text-3xl">🛒</div>
             <h3 class="text-xl font-bold">Marcas y Ahorro</h3>
             <p class="text-gray-600">Tus marcas favoritas y alternativas económicas para llenar la despensa sin vaciar el bolsillo.</p>
          </div>
       </div>
    </div>
  </section>

  <section class="py-16 bg-gray-50">
     <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="text-3xl font-bold mb-6">Ven a hacer tu compra</h2>
        <p class="text-lg text-gray-700 mb-8">
           Estamos en el corazón de La Esperanza. Un lugar cómodo donde aparcar es fácil y el trato es familiar.
           ¡Te esperamos!
        </p>
        <LocationMap />
     </div>
  </section>

</Layout>


--- START OF FILE: src/pages/supermercados.astro ---


---
import { Image } from "astro:assets";
import supermercadoImg from "../assets/supermercados-terencio.webp";
import LocationMap from "../components/LocationMap.astro";
import PageHeader from "../components/ui/PageHeader.astro";
import siteData from "../data/siteData.json";
import Layout from "../layouts/Layout.astro";

// Título enfocado en SEO Local
const title = "Supermercados Terencio en Tenerife | La Esperanza y La Laguna";
const description = "Visita Terencio Cash Market, tu supermercado de confianza en La Esperanza. Carne fresca, productos canarios y precios de mayorista abiertos al público.";
---

<Layout title={title} description={description} canonical={`${siteData.url}/supermercados`} image={supermercadoImg.src}>
  <PageHeader 
    title="Nuestras Instalaciones" 
    subtitle="Disponemos de una gran superficie de venta en Tenerife diseñada para el ahorro de particulares y la eficiencia de profesionales."
    badge="Instalaciones"
    backgroundImage={supermercadoImg.src}
  >
    <div class="bg-green-800/90 inline-block px-6 py-3 rounded-full backdrop-blur-sm border border-green-700 shadow-xl hover:scale-105 transition-transform">
        <a href="/profesionales#drogueria" class="flex items-center gap-2 text-green-100 hover:text-white transition">
          <span class="material-icons-outlined">cleaning_services</span>
          <span class="font-medium">Limpieza profesional también para tu hogar</span>
          <span class="material-icons-outlined text-sm">arrow_forward</span>
        </a>
    </div>
  </PageHeader>

  <section class="py-16 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
        <!-- Imagen con mayor impacto -->
        <div class="lg:w-1/2 h-80 lg:h-auto relative">
          <Image 
            src={supermercadoImg} 
            alt="Terencio Cash Market La Esperanza Tenerife" 
            class="w-full h-full object-cover absolute inset-0"
            width={800}
            height={600}
          />
          <div class="absolute top-4 left-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
            Abierto ahora
          </div>
        </div>

        <div class="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
           <h2 class="text-3xl font-bold text-gray-900 mb-4">Terencio Cash Market <span class="text-green-700 text-lg block md:inline md:ml-2">La Esperanza</span></h2>
           <p class="text-gray-600 mb-6 leading-relaxed">
             Nuestro centro principal en Tenerife combina un supermercado completo con un área de venta al por mayor. Somos especialistas en <strong>productos frescos de km 0</strong> y formatos industriales para hostelería.
           </p>
           
           <div class="grid sm:grid-cols-2 gap-6 mb-8">
             <div class="space-y-3">
               <h4 class="font-bold text-gray-900 border-b pb-1">📍 Ubicación</h4>
               <p class="text-sm text-gray-600">
                 {siteData.address.streetAddress}<br />
                 38206 La Laguna, Tenerife
               </p>
               <a href="https://maps.google.com" class="text-green-700 text-xs font-bold hover:underline">Cómo llegar →</a>
             </div>
             <div class="space-y-3">
               <h4 class="font-bold text-gray-900 border-b pb-1">⏰ Horario</h4>
               <p class="text-sm text-gray-600">
                 Lun - Sáb: 08:00 – 21:00<br />
                 Dom: 08:30 – 20:30
               </p>
               <p class="text-[10px] text-red-500 font-bold uppercase">Abierto domingos y festivos</p>
             </div>
           </div>

           <div class="flex flex-col sm:flex-row gap-4">
             <a href="/terencio-cash-market" class="bg-green-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-800 transition text-center flex-1 shadow-lg">
               Ver Ofertas de la Tienda
             </a>
             <a href="tel:922550067" class="border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition text-center flex-1">
               Llamar: 922 55 00 67
             </a>
           </div>

           <!-- Servicios específicos de esta tienda (Aumenta keywords) -->
           <div class="mt-8 flex flex-wrap gap-2">
             <span class="bg-gray-100 px-3 py-1 rounded text-[11px] font-bold text-gray-500 uppercase">Carnicería al corte</span>
             <span class="bg-gray-100 px-3 py-1 rounded text-[11px] font-bold text-gray-500 uppercase">Parking Gratuito</span>
             <span class="bg-gray-100 px-3 py-1 rounded text-[11px] font-bold text-gray-500 uppercase">Hielo industrial</span>
             <span class="bg-gray-100 px-3 py-1 rounded text-[11px] font-bold text-gray-500 uppercase">Zona Mayorista</span>
             <span class="bg-gray-100 px-3 py-1 rounded text-[11px] font-bold text-gray-500 uppercase">Panadería</span>
           </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-gray-50 border-t border-gray-200">
    <div class="container mx-auto px-4 text-center mb-10">
        <h2 class="text-3xl font-bold mb-2">Encuéntranos en el mapa</h2>
        <p class="text-gray-600 italic">Evita el tráfico de la ciudad comprando en la subida a La Esperanza.</p>
    </div>
    <div class="container mx-auto px-4 max-w-5xl">
       <LocationMap />
    </div>
  </section>
</Layout>


--- START OF FILE: src/pages/terencio-cash-market.astro ---


---
import { Image } from "astro:assets";
import interiorImage from "../assets/images/supermercado-interior.webp";
import localStoreImage from "../assets/supermercados-terencio.jpg";
import LocationSection from "../components/LocationSection.astro";
import siteData from "../data/siteData.json";
import Layout from "../layouts/Layout.astro";

// SEO Optimizado basado en datos de búsqueda: Terencio, La Esperanza, El Hierro, Cash & Carry
const title = "Terencio Cash Market | Supermercado en La Esperanza y Mayorista en Tenerife";
const description = "Visita Terencio Cash Market en La Esperanza, Tenerife. Tu supermercado de confianza con ofertas en carnicería, productos canarios y venta al por mayor (Cash & Carry) cerca de La Laguna.";

const seoAddress = `${siteData.address.streetAddress}, ${siteData.address.addressLocality}`;
---

<Layout title={title} description={description} canonical={`${siteData.url}/terencio-cash-market`} image={localStoreImage.src}>
  <!-- Hero Section con Keywords Principales -->
  <header class="relative bg-green-900 text-white py-24 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
        <Image 
            src={interiorImage} 
            alt="Interior de Terencio Supermercado" 
            class="w-full h-full object-cover opacity-20 filter brightness-50" 
        />
    </div>
    <div class="container mx-auto px-4 text-center relative z-10">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Terencio Cash Market</h1>
      <p class="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8 font-light">
        Tu supermercado de cercanía en La Esperanza y referente en distribución para Tenerife y El Hierro.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="#contacto" class="bg-white text-green-800 px-8 py-3 rounded-full font-bold hover:bg-green-100 transition shadow-lg">
          Cómo llegar
        </a>
        <a href="tel:922550067" class="bg-green-700 border border-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition">
          Llamar ahora
        </a>
      </div>
    </div>
  </header>

  <!-- Sección: Quiénes Somos (SEO: Supermercado en Tenerife y El Hierro) -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">El Supermercado de confianza en La Esperanza</h2>
        <div class="prose prose-lg text-gray-600 leading-relaxed">
          <p class="mb-6">
            En <strong>Terencio Cash Market</strong>, nos enorgullece ser mucho más que un simple supermercado en La Esperanza. Con décadas de experiencia en el sector de la alimentación en Canarias, nos hemos consolidado como el punto de referencia tanto para familias que buscan <strong>productos frescos de calidad</strong> como para profesionales del sector HORECA a través de nuestro servicio de <strong>Cash & Carry en Tenerife</strong>.
          </p>
          <p class="mb-6">
            Nuestra ubicación estratégica en la carretera de La Esperanza nos sitúa a pocos minutos de San Cristóbal de La Laguna, facilitando las compras diarias sin los problemas de aparcamiento del centro urbano. Además, nuestra conexión histórica con <strong>El Hierro</strong> nos permite ofrecer una selección única de productos herreños y canarios que no encontrarás en otros establecimientos.
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div class="flex items-start gap-3">
            <div class="bg-green-100 p-2 rounded-lg text-green-700">✓</div>
            <div><p class="font-bold text-gray-800">Aparcamiento Gratuito</p><p class="text-sm text-gray-500">Amplio parking privado para clientes.</p></div>
          </div>
          <div class="flex items-start gap-3">
            <div class="bg-green-100 p-2 rounded-lg text-green-700">✓</div>
            <div><p class="font-bold text-gray-800">Venta al por Mayor</p><p class="text-sm text-gray-500">Precios especiales para mayoristas.</p></div>
          </div>
          <div class="flex items-start gap-3">
            <div class="bg-green-100 p-2 rounded-lg text-green-700">✓</div>
            <div><p class="font-bold text-gray-800">Frescos Diarios</p><p class="text-sm text-gray-500">Carnicería y frutería de Kilómetro 0.</p></div>
          </div>
          <div class="flex items-start gap-3">
            <div class="bg-green-100 p-2 rounded-lg text-green-700">✓</div>
            <div><p class="font-bold text-gray-800">Conexión El Hierro</p><p class="text-sm text-gray-500">Referentes en logística con la Isla del Meridiano.</p></div>
          </div>
        </div>
      </div>
      
      <div class="relative">
        <div class="absolute -inset-4 bg-green-100 rounded-3xl -rotate-2"></div>
        <Image 
          src={localStoreImage} 
          alt="Fachada principal de Terencio Cash Market en La Esperanza, Tenerife" 
          class="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white"
          width={800}
          format="webp"
        />
      </div>
    </div>
  </section>

  <!-- Sección: Departamentos (SEO: Carnicería, Droguería, Productos Canarios) -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mucho más que un Cash & Carry</h2>
      <p class="text-gray-600 max-w-2xl mx-auto italic">Calidad garantizada en cada sección, adaptándonos a las necesidades del hogar y del negocio.</p>
    </div>

    <div class="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Card 1: Carnicería -->
      <a href="/carniceria-tenerife" class="block cursor-pointer group">
        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-red-500 h-full">
          <div class="text-5xl mb-6 group-hover:scale-110 transition duration-300">🥩</div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">Carnicería Selecta</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Nuestra carnicería es famosa en La Laguna. Ofrecemos cortes frescos diarios, preparados al gusto y con las mejores ofertas de carne en Tenerife norte.
          </p>
        </div>
      </a>

      <!-- Card 2: Frescos -->
      <a href="/ofertas" class="block cursor-pointer group" id="fruteria">
        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-green-500 h-full">
          <div class="text-5xl mb-6 group-hover:scale-110 transition duration-300">🥗</div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">Frutería Local</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Apostamos por el producto canario. Frutas y verduras frescas de temporada directas de agricultores de La Esperanza y alrededores.
          </p>
        </div>
      </a>

      <!-- Card 3: Droguería -->
      <a href="/profesionales" class="block cursor-pointer group" id="drogueria">
        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-blue-500 h-full">
          <div class="text-5xl mb-6 group-hover:scale-110 transition duration-300">🧼</div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">Limpieza y Hogar</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Sección especializada en droguería industrial y doméstica. Formatos ahorro ideales para familias numerosas y establecimientos hosteleros.
          </p>
        </div>
      </a>

      <!-- Card 4: Especial El Hierro -->
      <a href="/productos-el-hierro-tenerife" class="block cursor-pointer group">
        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-yellow-500 h-full">
          <div class="text-5xl mb-6 group-hover:scale-110 transition duration-300">🧀</div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">Especial El Hierro</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            ¿Buscas quesadillas o queso herreño? Somos especialistas en productos de El Hierro, trayendo el sabor auténtico de la isla a Tenerife.
          </p>
        </div>
      </a>
    </div>

    <!-- Plan Your Visit Flow -->
    <div class="mt-16 container mx-auto px-4">
       <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h3 class="text-2xl font-bold text-center mb-8 text-gray-800">Planifica tu visita</h3>
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 relative">
             <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-0"></div>
             
             <div class="flex flex-col items-center relative z-10 bg-white p-4">
                <div class="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold mb-2 text-xl">1</div>
                <span class="font-bold text-gray-700 mb-2">Consulta el Horario</span>
                <span class="text-sm text-gray-500">De 08:00 a 21:00</span>
             </div>

             <div class="flex flex-col items-center relative z-10 bg-white p-4">
                <div class="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold mb-2 text-xl">2</div>
                <span class="font-bold text-gray-700 mb-2">Mira nuestras Ofertas</span>
                <a href="/ofertas" class="text-sm text-green-700 font-bold hover:underline">Ver folleto actual</a>
             </div>

             <div class="flex flex-col items-center relative z-10 bg-white p-4">
                <div class="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold mb-2 text-xl">3</div>
                <span class="font-bold text-gray-700 mb-2">Ven a vernos</span>
                <a href="#contacto" class="text-sm text-green-700 font-bold hover:underline">Obtener indicaciones</a>
             </div>
          </div>
       </div>
    </div>
  </section>

  <!-- Sección SEO: Terencio El Hierro (Para captar esas búsquedas específicas) -->
  <section class="py-16 bg-green-800 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-6">Tu conexión directa con Terencio El Hierro</h2>
      <p class="text-lg max-w-4xl mx-auto leading-relaxed">
        Como parte del grupo <strong>Supermercados Terencio</strong>, actuamos como puente logístico y comercial con la isla de El Hierro (Valverde, Frontera y La Restinga). Si buscas distribución de mercancías en El Hierro o productos específicos de la isla en Tenerife, somos tu socio estratégico. Ofrecemos servicios de <strong>venta al por mayor y mayoristas en Tenerife</strong> para negocios que operan entre islas.
      </p>
    </div>
  </section>

  <!-- Mapa y Contacto -->
  <LocationSection title="Ubicación y Horarios" subtitle="Encuéntranos fácilmente en la carretera principal hacia el Monte de La Esperanza." />

  <!-- FAQ Section para Snippets de Google -->
  <section class="py-16 bg-gray-50 border-t border-gray-200">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-2xl font-bold text-center mb-10">Preguntas Frecuentes sobre Terencio Cash Market</h2>
      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="font-bold text-lg text-green-800">¿Es un supermercado abierto al público o solo para profesionales?</h3>
          <p class="text-gray-600 mt-2">Estamos abiertos a <strong>todo el público</strong>. Aunque funcionamos como Cash & Carry con precios mayoristas para negocios, cualquier particular puede realizar su compra diaria disfrutando de nuestros precios competitivos.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="font-bold text-lg text-green-800">¿Tienen productos de El Hierro en la tienda de La Esperanza?</h3>
          <p class="text-gray-600 mt-2">Sí, somos especialistas en productos de El Hierro. Recibimos mercancía directamente de la isla, incluyendo sus famosos quesos y repostería tradicional.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="font-bold text-lg text-green-800">¿Cómo llegar desde La Laguna?</h3>
          <p class="text-gray-600 mt-2">Estamos situados en la Carretera de La Esperanza (TF-24), a menos de 10 minutos en coche desde el centro de San Cristóbal de La Laguna. Disponemos de aparcamiento propio para facilitar tu visita.</p>
        </div>
      </div>
    </div>
  </section>
</Layout>
