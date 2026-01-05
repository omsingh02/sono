import { useState } from 'react';
import Presentation from '@/components/Presentation/Presentation';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Presentation />
    </>
  );
};

export default Index;
