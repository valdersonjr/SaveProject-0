import { ContactForm, Return } from '../../components';

export default function RegisterContact() {
  return (
    <>
      <Return />
      <div className='mt-32 flex justify-center'>
        <div className='flex flex-col text-center select-none items-center'>
          <h2 className='mb-4 font-sans bold text-5xl tracking-widest cursor-default '>
            Cadastrar Contato
          </h2>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
