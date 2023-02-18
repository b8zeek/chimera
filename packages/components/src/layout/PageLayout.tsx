import { ReactNode } from 'react';
import styled from 'styled-components';

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div``;
