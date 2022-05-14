import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Checkbox,
} from "@chakra-ui/react";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import Icon from "../components/Icon/Icon";
import { Wrapper } from "../styles/index.styles";

const Home: NextPage = () => {
  //
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  const cancelRef = useRef(null);
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  const isError = input === "";

  return (
    <Wrapper>
      {/* Simple buttons with default props */}
      <Button variant="primary">test text</Button>

      <Button leftIcon={<></>} size="sm">
        Sign up
      </Button>
      <Button size="md" colorScheme="teal">
        Sign up
      </Button>
      <Button size="lg" colorScheme="teal">
        Sign up
      </Button>

      <Button variant="primaryOutlined">Sign up</Button>

      {/* Most Usefull props */}
      {/* same with right Icon */}

      <Button leftIcon={<Icon type="google" size="sm" />}>
        Sign in with Google
      </Button>

      <Button
        // colorScheme="teal"
        variant="primary"
        // still wont change color variant is stsronger
        leftIcon={<Icon type="google" size="sm" color="white" />}
        size="xl"
        onClick={() => console.log("Sign up with google is clicked")}
      >
        Sign up
      </Button>

      <Button onClick={onModalOpen}>Open Modal</Button>

      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome to our awesome Modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button variant="primary">Sign in</Button>
            <FormControl isInvalid={isError} mt="30px">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />

              <FormHelperText>
                Enter the email you would like to receive the newsletter on.
              </FormHelperText>
            </FormControl>
            <FormControl isInvalid={isError} mt="30px">
              <FormLabel htmlFor="email">Password</FormLabel>
              <Input id="password" type="password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="primaryOutlined" mr="40px" onClick={onModalClose}>
              Close
            </Button>
            <Button variant="primary">Sign in</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <>
        <Button colorScheme="red" onClick={onAlertOpen}>
          Delete Customer
        </Button>

        <AlertDialog
          isOpen={isAlertOpen}
          leastDestructiveRef={cancelRef}
          onClose={onAlertClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Customer
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can not undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onAlertClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={onAlertClose} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    </Wrapper>
  );
};

export default Home;
