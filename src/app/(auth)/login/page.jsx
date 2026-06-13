'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false)

    const handleRegisterFunc = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userInfo = Object.fromEntries(formData.entries())
        console.log(userInfo)

        const { data, error } = await authClient.signIn.email({
            email: userInfo.email,
            password: userInfo.password,
         
        })

        console.log('signup response', { data, error })

        if (data) {
            alert('login successful')
            redirect('/')
        }

        if (error) {
            alert(error.message)
        }
    }

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className=' my-5 max-w-7xl mx-auto'>
            <div className='text-center my-5'>
                <h2 className='font-semibold text-2xl'>Login your Account</h2>
                <p className='text-sm text-gray-400'>Star an adventure with Wanderlust</p>
            </div>
            <Card className='rounded-none border'>
                <Form className="flex w-96 flex-col gap-4" onSubmit={handleRegisterFunc} >
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        className={'relative'}
                        isRequired
                        minLength={8}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                        <span className='absolute right-3 top-8 cursor-pointer'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {
                                showPassword ?
                                    <span className='text-xl'><FaEye></FaEye></span> :
                                    <span className='text-xl'><FaEyeSlash></FaEyeSlash></span>
                            }
                        </span>
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit" className={'w-full rounded-none bg-cyan-800'}>
                            Login
                        </Button>
                    </div>
                </Form>
                <div>
                    <div className='flex justify-center items-center gap-3 overflow-hidden'>
                                            <Separator></Separator>
                                            <div className="whitespace-nowrap">Or signin with google</div>
                                            <Separator></Separator>
                                        </div>
                    <Button 
                        onClick={handleGoogleSignIn}
                    className="w-full rounded-none my-3" variant="tertiary">
                        <Icon icon="devicon:google" />
                        Sign in with Google
                    </Button>
                    <p className='text-sm text-gray-400 text-center'>Do not have an account <span className='text-cyan-700'><Link href={'/signup'}>Sign up</Link></span></p>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;