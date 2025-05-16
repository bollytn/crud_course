import { Box, Container, SimpleGrid, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import useProductStore from "../store/product"
import { useEffect } from "react"
import ProductCard from "../components/ProductCard"

const HomePage = () => {
    const { fetchProducts, products } = useProductStore() // Fetch products from the store

    // Move the hook calls to the top level of the component
    const bgColor = useColorModeValue("white", "gray.700")

    const noProductsTextColor = useColorModeValue("gray.700", "gray.500")

    // Fetch products when the component mounts
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return (
        <Container maxW={"container.xl"} py={12}>
            <VStack spacing={8}>
                <Text
                    textTransform={"capitalize"}
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                >
                    current products
                </Text>

                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                    spacing={10}
                    w={"full"}
                    p={4}
                    bg={bgColor}
                    rounded={"lg"}
                    boxShadow={"lg"}
                >
                    {/* Map through products here */}
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                    {/* If no products are available */}
                    {products.length === 0 && (
                        <Text fontSize={"lg"} textAlign={"center"} fontWeight={"bold"} color={noProductsTextColor}>
                            No products available yet 😢 {" "}
                            <Text as={"span"} color={"blue.400"} fontWeight={"bold"} _hover={{ textDecoration: "underline" }}>
                                <Link to={"/create"}>create a new product</Link>
                            </Text>
                        </Text>
                    )}
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

export default HomePage