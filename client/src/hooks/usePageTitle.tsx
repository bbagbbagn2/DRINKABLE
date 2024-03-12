import { useEffect } from 'react';

interface Props {
    title: string;
}

export default function usePageTitle({ title }: Props) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}