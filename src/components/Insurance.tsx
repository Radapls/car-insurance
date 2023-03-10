/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Insurance.tsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 10th March 2023
 */

import logo from "../../public/android-chrome-512x512.png";
import Form from "./Form";

export default function Insurance()
{
    return (
        <>
            <header className="my-10 flex justify-center space-x-5">
                <img src={logo} alt="favicon" className="h-10 drop-shadow-xl shadow-black" draggable={false} />
                <h1 className="text-white text-center text-4xl font-black shadow-black drop-shadow-xl cursor-default">
                    Car insurance quoter
                </h1>
            </header>

            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Form />
            </main>
        </>
    )
}
