import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlusSquare } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { MdLocalGroceryStore } from "react-icons/md";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={'1140px'} p={4}>
      <Flex justify={'space-between'}
        align={'center'}
      >

        <HStack spacing={2}>
          <Link to={'/'}>
            <Text
              fontSize={['2xl', '3xl', '4xl']}
              bgGradient='linear(to-r,cyan.400, blue.500)'
              bgClip='text'
              fontWeight='extrabold'
              textTransform='uppercase'

            >
              Product Store
            </Text>
          </Link>
          <MdLocalGroceryStore fontSize={40} color="cyan" />
        </HStack>

        <HStack spacing={2}>
          <Button as={Link} to={'/create'}>
            <FaPlusSquare fontSize={30} />
          </Button>
          <Button onClick={toggleColorMode}>

            {colorMode === 'light' ? <IoMoonSharp size='20' /> : <LuSun size='20' />}

          </Button>

        </HStack>
      </Flex>

    </Container >
  )
}

export default Navbar