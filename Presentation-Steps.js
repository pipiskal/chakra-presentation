/*

1. how to install chakra correctly with next js
    -npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6


2. Provider Setup
    - After installing Chakra UI, you need to set up
     the ChakraProvider at the root of your application.

    -What is a the use of the Provider / Context

    Implementing Provider involves wrapping any components that need to know
     about state inside of the Provider component as children

3. Default behavior of chakra with button and how to use it.

    -adding props and values
    -use px instead of chakra system

    -where and how to find how css is writen in chakra
        https://chakra-ui.com/docs/styled-system/features/style-props?scroll=true

    -Most usefull props
        -left icon
        -variant
        -size
        -isDisabled
        -onClick


4. How to customize The default Button to our needs


    -create Theme -Dont forget to pass the custom theme to the provider
    so it will be able to work.

    -how to pass the custom metrics to the styled-components
        -solution we use ThemeProvider from styled-components


    -create seperate component.styles.ts file and we customize
        the default styles of the component

    -In theme we ovveride that specific component

    -Some values like height doenst work on baseStyle
    -You need to check what is working at the time you are building it

    -When defining the styles for the sizes or variants, you can either
     pass a style object or a function that returns a style object

        If we want to pass dynamic values from theme object we need to
        convert the object to function so it can accept the props

5. Customizing more components

    -theme

    -Be aware of the parts of each component so you can
        customize it correctly
    -A multipart component is a component that has multiple parts,
     and requireS these parts to work correctly. This is commonly
     referred to as a composite component.


6. The as prop
    - https://chakra-ui.com/docs/styled-system/features/style-props#the-as-prop


7. Lets work together on a component


8. how to work with React hook form


9. A guide with a bit more advanced technics

    -https://blog.logrocket.com/advanced-techniques-chakra-ui/


*/
