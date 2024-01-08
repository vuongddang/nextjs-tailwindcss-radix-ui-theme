import Image from 'next/image'
import { Container, Flex, Heading, Text } from '@radix-ui/themes'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size="2">
        <Flex direction="column">
          <Heading color="indigo">NextJs - TailwindCss -  Radix UI Theme</Heading>
          <Text color="gray">
            This is a simple NextJs app with TailwindCss and Radix UI Theme.
          </Text>
        </Flex>
      </Container>
    </main>
  )
}
