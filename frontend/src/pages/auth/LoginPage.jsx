import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginPage = () => {
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (phone.length >= 10) {
            // In a real app, you'd trigger the API here
            navigate('/auth/otp', { state: { phone } });
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-background px-6 pt-20 pb-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto w-full space-y-8"
            >
                <div className="space-y-2 text-center sm:text-left">
                    <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                    <p className="text-muted-foreground">
                        Enter your mobile number to log in or sign up.
                    </p>
                </div>

                <form onSubmit={handleSendOtp} className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            type="tel"
                            placeholder="Mobile Number"
                            icon={<Phone className="h-4 w-4" />}
                            className="text-lg"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            maxLength={10}
                        />
                        <p className="text-xs text-muted-foreground px-1">
                            We'll send you a 4-digit code to verify.
                        </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full text-base group" disabled={phone.length < 10}>
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </form>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full bg-white">
                        Google
                    </Button>
                    <Button variant="outline" className="w-full bg-white">
                        Apple
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
