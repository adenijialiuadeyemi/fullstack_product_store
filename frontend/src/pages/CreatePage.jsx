import { Button, Container, Heading, Input, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product.js'

const CreatePage = () => {
  const [Product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
  })

  const { createProduct } = useProductStore();
  const toast = useToast()
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(Product)


    if (!success) {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        isClosable: true,
      })
    } else {
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        isClosable: true,
      })
    }
    setProduct({ name: '', price: '', image: '' })
  }
  return (
    <Container maxW={'1140px'} p={8}>
      <VStack spacing={4} >
        <Heading as={'h1'} fontSize={30}>Create New Product</Heading>

        <VStack spacing={4} width={'100%'}>
          <Input placeholder={'Product Name'}
            size={'lg'}
            width={['100%', '50%']}
            name={'name'}
            value={Product.name}
            onChange={(e) => setProduct({ ...Product, name: e.target.value })}
            rounded={10}
          />
          <Input placeholder={'Product Name'}
            size={'lg'}
            width={['100%', '50%']}
            name={'price'}
            value={Product.price}
            onChange={(e) => setProduct({ ...Product, price: e.target.value })}
            rounded={10}
          />
          <Input placeholder={'Product Name'}
            size={'lg'}
            width={['100%', '50%']}
            name={'image'}
            value={Product.image}
            onChange={(e) => setProduct({ ...Product, image: e.target.value })}
            rounded={10}
          />

          <Button colorScheme={'blue'} size={'lg'} w={['100%', '50%']} onClick={() => handleAddProduct()} >Create Product</Button>

        </VStack>



      </VStack>
    </Container>
  )
}

export default CreatePage