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

import Form from "./Form";

export default function Insurance()
{
    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">
                    Car insurance quoter
                </h1>
            </header>

            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Form />
            </main>
        </>
    )
}
