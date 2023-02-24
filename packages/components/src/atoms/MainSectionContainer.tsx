import { ReactNode } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

type MainSectionContainerProps = {
  children?: ReactNode | ReactNode[]
  marginBottom?: string
}

export function MainSectionContainer({ children, marginBottom }: MainSectionContainerProps) {
  return (
    <Container
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: '100px' }
      }}
      marginBottom={marginBottom}
    >
      {children}
    </Container>
  )
}

const Container = styled(motion.div)<{ marginBottom?: string }>`
  padding: 20px;
  border-radius: 5px;
  background: black;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
`
