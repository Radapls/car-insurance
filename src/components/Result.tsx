/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Result.tsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 13th March 2023
 */

import { useMemo, useRef } from "react";
import { brands, plans } from "../constants";
import useQuoter from "../hooks/useQuoter";

export default function Result()
{
    const { result, data } = useQuoter();
    const { brand, plan, year } = data;
    const yearRef = useRef(year)

    if (result === '')
    {
        return null;
    }

    const [ brandName ] = useMemo(() =>
        brands.filter(b => b.id === Number(brand)),
        [ result ]);

    const [ planType ] = useMemo(() =>
        plans.filter(p => p.id === Number(plan)),
        [ result ]);


    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resume
            </h2>

            <p className="my-2">
                <span className="font-bold">Brand: </span>
                {brandName.name}
            </p>

            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {planType.name}
            </p>

            <p className="my-2">
                <span className="font-bold">Year: </span>
                {yearRef.current}
            </p>

            <p className="my-2 text-2xl">
                <span className="font-bold">Total value: </span>
                {result}
            </p>
        </div>
    )
}
