import {Button} from '@/components/ui/button'
import { Separator } from '@radix-ui/react-separator';
export const Inicio = () => {
  return (
    <main className="h-screen w-full max-md:px-4 md:px-20 py-10 bg-[var(--cens-gray-900)]">
      {/* A definir estilo de la main page */}

      <section className="flex flex-col items-center justify-start px-20 py-2 gap-10 min-h-96 text-wrap w-full bg-[var(--cens-gray-200)] rounded-sm">
        
        <h1 className="scroll-m-20 text-center text-6xl mt-12 mb-6 font-extrabold tracking-tight text-balance">
          Educación de Excelencia
        </h1>
        <h4 className="scroll-m-20 text-xl text-center font-semibold tracking-tight">
          En CENS N°452 formamos ciudadanos comprometidos con el futuro,
          brindando educación integral y de calidad en Virrey del Pino.{" "}
        </h4>

        <span>
            <Button variant="default" size='lg' className='cursor-pointer text-[var(--cens-gray-800)] hover:text-[var(--cens-gray-900)] bg-[var(--cens-yellow-400)] hover:bg-[var(--cens-yellow-600)] '>Conocer más</Button>
        </span>
      </section>
      <Separator className='bg-[var(--cens-blue-200)] my-4 h-1 w-full'/>

    </main>
  );
};
