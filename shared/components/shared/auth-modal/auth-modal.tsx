import { Button, Dialog } from '@/shared/components/ui';
import { signIn } from 'next-auth/react';
import { FC, useState } from 'react';
import { DialogContent } from '../../ui/dialog';
import { LoginForm } from './forms/login-form';
import { RegisterForm } from './forms/register-form';

export interface Props {
    open: boolean;
    onClose: () => void;
}

export const AuthModal: FC<Props> = ({ open, onClose }) => {
    const [type, setType] = useState<'login' | 'register'>('login');

    const onChangeType = () => {
        setType(type === 'login' ? 'register' : 'login');
    };

    const handleClose = () => {
        onClose();
    };
    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="w-[450px] bg-white p-10">
                {type === 'login' ? (
                    <LoginForm onClose={handleClose} />
                ) : (
                    <RegisterForm onClose={handleClose} />
                )}

                <hr />
               

               
                <Button
                    variant="outline"
                    onClick={onChangeType}
                    type="button"
                    className="h-12"
                >
                    {type !== 'login' ? 'Войти' : 'Регистрация'}
                </Button>
            </DialogContent>
        </Dialog>
    );
};
