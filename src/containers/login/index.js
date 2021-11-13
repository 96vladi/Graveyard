import { Formik } from 'formik';
import React from 'react';
import { FlexContainer, Layout, ButtonContainer, TextButton, CustomInputStyle, CustomText } from '../../components/general';
import { Colors } from '../../library/constants/colors';
import { CustomButton } from '../../components/CustomButton';
import { CustomInput } from '../../components/CustomInput';
import { Titles } from '../../components/Titles';

export const Login = () => {
  return(
    <Formik
      initialValues = {{
        email: 'maidana.vladi@gmail.com',
        password: '01Vladi*',
      }}
      onSubmit={values => console.log(values)}
    >
      {({values}) => (
        <Layout>
          <Titles
            title="MyApp"
            size="50px"
            height="20%"
          ></Titles>
          <FlexContainer bgc="white" h="50%" dir="row" jc="flex-start">
            
          </FlexContainer>
          <CustomInput></CustomInput>
          <CustomButton></CustomButton>
        </Layout>
      )}
    </Formik>
  );
};
