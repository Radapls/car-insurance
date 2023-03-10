/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file useQuoter.tsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 10th March 2023
 */

import { useContext } from 'react';
import QuoterContext from "../context/QuoteProvider";


const useQuoter = () =>
{
    return useContext(QuoterContext)
}

export default useQuoter
