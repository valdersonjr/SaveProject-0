import { useNavigate } from 'react-router-dom';

export default function Return() {
  let navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <img
      src={require('../../assets/left_arrow.png')}
      alt='Icon of an arrow'
      style={{ margin: '50px' }}
      onClick={handleReturn}
    />
  );
}
