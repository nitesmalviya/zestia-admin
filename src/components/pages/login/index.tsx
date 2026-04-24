'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { LoginErrors } from '@/types/auth';
import { signInAction } from '@/utils/graphql/auth/action';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-toastify';

export default function SectionLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (value: string): string | undefined => {
    const emailValue = value.trim();
    if (!emailValue) return 'Email is required.';
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) return 'Enter a valid email address.';
    return undefined;
  };
  const validatePassword = (value: string): string | undefined => {
    const passwordValue = value.trim();
    if (!passwordValue) return 'Password is required.';
    return undefined;
  };
  const validate = (): LoginErrors => ({
    ...(validateEmail(email) ? { email: validateEmail(email) } : {}),
    ...(validatePassword(password) ? { password: validatePassword(password) } : {}),
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsLoading(true);
    try {
      const res = await signInAction({ variables: { email: email.trim(), password } });
      if (res.success) {
        toast.success("Login successful!");
        router.push('/executive-snapshot');
      } else {
        const errorMsg = res.message || 'Invalid credentials or network error.';
        setErrors({ form: errorMsg });
        toast.error(errorMsg);
      }
    } catch (error) {
      const errorMsg = 'An unexpected error occurred. Please try again.';
      setErrors({ form: errorMsg });
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="login-root" style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '60% 40%', background: '#fff' }}>
      <div className="login-left" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(165deg, #051B16 0%, #0A3A1A 45%, #046307 100%)' }}>
        <Image className="login-logo" src="/logo (2).png" alt="Zestia" width={170} height={66} priority style={{ position: 'absolute', top: 44, left: 58, width: 'auto', height: 'auto' }} />
        <div className="login-heading-wrap" style={{ position: 'absolute', top: 197, left: 60, zIndex: 2 }}>
          <h2 style={{ margin: 0, color: '#FFFFFF', fontSize: 64 / 1.4, lineHeight: '100%', fontWeight: 600, fontFamily: "'IvyMode', 'Cormorant Garamond', serif" }}>
            Creating Your
          </h2>
          <h3 style={{ margin: '16px 0 0', color: '#FFFFFF', fontSize: 36, lineHeight: '100%', fontWeight: 700, fontFamily: "'Bebas Neue', sans-serif", textTransform: 'uppercase' }}>
            Extraordinary Life
          </h3>
          <p style={{ margin: '20px 0 0', color: '#FFFFFF', fontSize: 20, lineHeight: '100%', fontWeight: 500, fontFamily: "'Montserrat', sans-serif" }}>
            You&apos;ve built a thriving business.
          </p>
        </div>
        <Image className="login-leaf"
          src="/floral-imag.png"
          alt="botanical decoration"
          width={760}
          height={520}
          priority
          style={{
            position: 'absolute',
            right: -22,
            bottom: -138,
            width: 710,
            height: 'auto',
            opacity: 0.87,
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 24%, rgba(0,0,0,0.82) 56%, rgba(0,0,0,1) 74%)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 24%, rgba(0,0,0,0.82) 56%, rgba(0,0,0,1) 74%)',
          }}
        />
      </div>
      <div className="login-right" style={{ background: '#F5F5F5', display: 'grid', placeItems: 'center' }}>
        <form className="login-form-shell" style={{ width: '100%', maxWidth: 420 }} onSubmit={handleSubmit} noValidate>
          <h1
            style={{
              margin: 0,
              textAlign: 'center',
              color: '#2E2D29',
              fontFamily: "'Bebas Neue', sans-serif",
              fontWeight: 700,
              fontSize: 38,
              lineHeight: '100%',
              letterSpacing: '0.02em',
            }}
          >
            LOGIN
          </h1>
          <p
            style={{
              margin: '14px 0 38px',
              textAlign: 'center',
              color: '#2E2D29',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              fontSize: 24,
              lineHeight: '100%',
            }}
          >
            Sign in to continue
          </p>
          <label style={{ display: 'block', color: '#000B1D', fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 14, marginBottom: 10 }}>
            Email Address
          </label>
          <input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (errors.email || errors.form) setErrors((prev) => ({ ...prev, email: undefined, form: undefined }));
            }}
            onBlur={() => setErrors((prev) => ({ ...prev, email: validateEmail(email) }))}
            placeholder="Enter email"
            type="email"
            style={{
              width: '100%',
              height: 48,
              borderRadius: 11,
              border: errors.email ? '1px solid #D14343' : '1px solid #E6DCC8',
              padding: '0 14px',
              marginBottom: errors.email ? 8 : 24,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              fontSize: 16,
              color: '#2E2D29',
              outline: 'none',
              background: '#F5F5F5',
            }}
          />
          {errors.email ? (
            <p style={{ margin: '0 0 18px', color: '#D14343', fontSize: 12, fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
              {errors.email}
            </p>
          ) : null}
          <label style={{ display: 'block', color: '#000B1D', fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 14, marginBottom: 10 }}>
            Password
          </label>
          <div style={{ position: 'relative', marginBottom: errors.password ? 8 : 44 }}>
            <input
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (errors.password || errors.form) setErrors((prev) => ({ ...prev, password: undefined, form: undefined }));
              }}
              onBlur={() => setErrors((prev) => ({ ...prev, password: validatePassword(password) }))}
              placeholder="Enter password"
              type={showPassword ? 'text' : 'password'}
              style={{
                width: '100%',
                height: 48,
                borderRadius: 11,
                border: errors.password ? '1px solid #D14343' : '1px solid #E6DCC8',
                padding: '0 44px 0 14px',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: '#2E2D29',
                outline: 'none',
                background: '#F5F5F5',
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#A3A7B6',
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password ? (
            <p style={{ margin: '0 0 18px', color: '#D14343', fontSize: 12, fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
              {errors.password}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              height: 48,
              border: 'none',
              borderRadius: 10,
              background: isLoading ? '#A3A7B6' : '#C7A24C',
              color: '#FFFFFF',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 34 / 2.1,
              cursor: isLoading ? 'not-allowed' : 'pointer',
            }}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </section>
  );
}