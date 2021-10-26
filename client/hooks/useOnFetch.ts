import  { useState } from 'react';

export interface Props {
    fetchingFn?: any
}
export const UseFetch: React.FC<Props> = ({ fetchingFn }): any => {
    const [result, setResult] = useState<undefined | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setIsLoading(true);

        const data = await fetchingFn();
        if (data.success === true)
            setIsSuccess(true)
        setResult(data.success)
    }

    setIsLoading(false);

    

    return { result, isLoading, isSuccess };
}



