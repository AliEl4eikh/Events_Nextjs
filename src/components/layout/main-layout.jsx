import { Footer } from '@/src/components/footer/footer'
import { Header } from '@/src/components/header/header'

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
