import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { useAuth } from '@/context/AuthContext';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const OtpPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { login } = useAuth();
    const [otp, setOtp] = useState(['', '', '', '']);
    const [verifying, setVerifying] = useState(false);
    const inputRefs = useRef([]);
    const phone = state?.phone || '9999999999';

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index, value) => {
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value !== '' && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleVerify = async () => {
        const code = otp.join('');
        if (code.length === 4) {
            setVerifying(true);
            // Simulate API call
            setTimeout(() => {
                login(phone);
                setVerifying(false);
                navigate('/');
            }, 1500);
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-background px-6 pt-10 pb-10">
            <button onClick={() => navigate(-1)} className="mb-8 w-fit p-2 -ml-2 rounded-full hover:bg-accent transition-colors">
                <ArrowLeft className="h-6 w-6" />
            </button>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-md mx-auto w-full space-y-8"
            >
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Verify Code</h1>
                    <p className="text-muted-foreground">
                        Please enter the code we sent to <span className="text-foreground font-medium">+91 {phone}</span>
                    </p>
                </div>

                <div className="flex gap-4 justify-between max-w-[280px]">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            maxLength={1}
                            className="h-14 w-12 rounded-xl border border-input bg-background p-2 text-center text-2xl font-bold shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                        />
                    ))}
                </div>

                <div className="pt-4">
                    <Button
                        onClick={handleVerify}
                        size="lg"
                        className="w-full text-base"
                        disabled={otp.some(d => !d) || verifying}
                    >
                        {verifying && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Verify
                    </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                    Didn't receive code? <button className="text-primary font-medium hover:underline">Resend</button>
                </p>
            </motion.div>
        </div>
    );
};

export default OtpPage;
