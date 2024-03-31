"use client"

import axios from "axios";
import React, { useState } from 'react'
import { ChangeEventHandler } from "react";
import { useRouter } from "next/navigation";

export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign Up
                        </div>

                    </div>
                    <div className="pt-2">
                        <LabelledInput onChange={(e) => {
                            setUsername(e.target.value);
                        }} label ="Username" placeholder="asbaghel@gmail.com" />
                        <LabelledInput onChange={(e) => {
                            setPassword(e.target.value);
                        }} label ="Password" placeholder="123456" />

                        <button onClick = {async () => {
                            await axios.post("http://localhost:3000/api/user", {
                                username,
                                password
                            });
                            router.push("/")
                        }} type= "button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>

                        
                    </div>
                </div>

            </a>

        </div> 

    </div>
}


function LabelledInput({label, placeholder, type, onChange}: LabelledInputType){
    return <div>
        <label className="">{label}</label>
        <input onChange={onChange} type ={type || "text" } id="first_name" className=" " placeholder={placeholder} required></input>
    </div>
}


interface LabelledInputType{
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}