import { Box, Text, useColorModeValue, Image, Heading, HStack, IconButton } from "@chakra-ui/react"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"

const ProductCard = ({ product }) => {
    const boxBgColor = useColorModeValue("gray.100", "gray.800")
    const textColor = useColorModeValue("gray.600", "gray.400")
    return (
        <Box
            key={product._id}
            overflow={"hidden"}
            transition={"all 0.2s"}
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
            p={4}
            bg={boxBgColor}
            rounded={"lg"}
            boxShadow={"md"}
        >
            {/* Image */}
            <Image src={product.imageUrl} alt={product.name} h={48} w={"full"} objectFit={"cover"} />

            <Box p={4}>
                <Heading as={"h3"} size={"md"} fontWeight={"bold"} mb={2}>
                    {product.name}
                </Heading>
                <Text fontSize={"xl"} fontWeight={"bold"} mb={4} color={textColor}>
                    {product.price}
                </Text>
                <HStack spacing={2} justifyContent={"start"}>
                    <IconButton icon={<EditIcon />} aria-label="Edit" colorScheme="blue" />
                    <IconButton icon={<DeleteIcon />} aria-label="Delete" colorScheme="red" />
                </HStack>
            </Box>
        </Box>
    )
}

export default ProductCard