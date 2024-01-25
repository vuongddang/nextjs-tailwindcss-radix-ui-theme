import Image from 'next/image'
import { Container, Flex, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size="2">
        <Flex direction="column">
          <Heading color="indigo">NextJs - TailwindCss -  Radix UI Theme</Heading>
          <Link href='/about' color="gray">
            About me
          </Link>
        </Flex>
      </Container>
    </main>
  )
}
