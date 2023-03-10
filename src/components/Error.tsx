/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Error.tsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 10th March 2023
 */

import useQuoter from "../hooks/useQuoter"

export default function Error()
{
    const { error } = useQuoter()
    return (
        <div className="border text-center border-red-400 bg-red-100 py-3 text-red-700 rounded-lg font-semibold">
            <p className="">
                {error}
            </p>
        </div>
    )
}
