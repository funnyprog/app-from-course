import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui';
import cls from './LoadingPage.module.scss';

interface LoadingPageProps {
    className?: string
}

export const LoadingPage = (props: LoadingPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.loadingPage, {}, [className])}>
            <Loader />
        </div>
    );
};
