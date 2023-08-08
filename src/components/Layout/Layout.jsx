import { Outlet } from 'react-router-dom';
import { Container, Nav, NavigationLink } from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <NavigationLink to="/" end>
            Перевірити ТТН
          </NavigationLink>
          <NavigationLink to="adresses">Адреси Відділень</NavigationLink>
        </Nav>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
