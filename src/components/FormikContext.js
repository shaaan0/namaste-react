import { useFormik, validateYupSchema } from "formik";

const FormikContext = React.createContext({})


const Formik = ({children, ...props}) => {
    const formikStateAndHelpers = useFormik(props)

    return (
        <FormikContext.Provider value = {formikStateAndHelpers}>
            {typeof children === 'function' ? children(formikStateAndHelpers): children}
        </FormikContext.Provider>
    )
} 

export default Formik