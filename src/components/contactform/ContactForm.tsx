import { useState } from 'react';

export default function ContactForm() {
  const [inputs, setInputs] = useState({
    name: '',
    cpf: '',
    dateOfBirth: '',
    phone: '',
    upload: '',
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form
      className='w-[25rem] flex flex-col gap-4 align-center'
      onSubmit={handleSubmit}
    >
      <input
        className='h-12 mb-1 bg-white text-xl indent-6 text-blue-300 rounded-lg outline-0 placeholder:text-blue-300'
        type='text'
        name='name'
        value={inputs.name || ''}
        onChange={handleChange}
        placeholder='Nome completo'
        required
      />

      <input
        className='h-12 mb-1 bg-white text-xl indent-6 text-blue-300 rounded-lg outline-0 placeholder:text-blue-300'
        type='text'
        name='cpf'
        value={inputs.cpf || ''}
        onChange={handleChange}
        placeholder='CPF:  xxxxxxxxxxx'
        pattern='[0-9]{11}'
        required
      />
      <input
        className='h-12 mb-1 bg-white text-xl indent-6 text-blue-300 rounded-lg outline-0 placeholder:text-blue-300'
        type='birthday'
        name='dateOfBirth'
        value={inputs.dateOfBirth || ''}
        placeholder='Nascimento: dd/mm/aaaa'
        onChange={handleChange}
        pattern='[0-9]{2}/[0-9]{2}/[0-9]{4}'
        required
      />

      <input
        className='h-12 mb-1 bg-white text-xl indent-6 text-blue-300 rounded-lg outline-0 placeholder:text-blue-300'
        type='tel'
        name='phone'
        value={inputs.phone || ''}
        onChange={handleChange}
        placeholder='Telefone:  xx xxxxx xxxx'
        pattern='[0-9]{11}'
        required
      />
      <input
        className='h-12'
        type='file'
        name='upload'
        onChange={handleChange}
        value={inputs.upload || ''}
        accept='application/pdf'
      />
      <input
        className='h-12 mb-1 bg-white text-xl indent-6 text-blue-300 rounded-lg outline-0 placeholder:text-blue-300'
        type='submit'
      />
    </form>
  );
}
