'use client';

import { ReactElement, ReactNode } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface FormConfig {
    defaultValues?: Record<string, any>;
    resolver?: any;
}

interface FormProps extends FormConfig {
    children?: ReactElement | ReactNode;
    submitHandler: SubmitHandler<any>;
}

const Form = ({
    children,
    submitHandler,
    defaultValues,
    resolver,
}: FormProps) => {
    const formConfig: FormConfig = {};

    if (!!defaultValues) formConfig['defaultValues'] = defaultValues;
    if (!!resolver) formConfig['resolver'] = resolver;

    const methods = useForm<FormProps>(formConfig);

    const { handleSubmit, reset } = methods;

    const onSubmit = (data: any) => {
        submitHandler(data);
        reset();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    );
};

export default Form;
