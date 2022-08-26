import { Header } from '../../components';

export default function Home() {
  return (
    <div className='text-5xl'>
      <Header />
      <div className='mt-80 flex flex-col font-bold select-none justify-center text-center '>
        <h2>Bem vindo à aplicação, avaliador(a).</h2>
        <h3>Divirta-se!</h3>
      </div>
    </div>
  );
}
