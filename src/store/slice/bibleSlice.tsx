import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ReadingPlan {

    name: string;

    daysRemaining: number;

    currentDay: number;

    totalDays: number;

    readingPlan: [];

}

interface readingPlanState {
    readingPlan: ReadingPlan[];

}

const initialState: readingPlanState = {

    readingPlan: [],

}

export const readingPlanSlice = createSlice({
    name: "biblePlanName",
    initialState,

    reducers: {
        addReadingPlan: (state, action: PayloadAction<{ 
            name: string, 
            daysRemaining: number, 
            currentDay: number, 
            totalDays: number,
            readingPlan: [],

        }>) => {
            state.readingPlan.push({

                name: action.payload.name,

                daysRemaining: action.payload.daysRemaining,

                currentDay: action.payload.currentDay,

                totalDays: action.payload.totalDays,

                readingPlan: action.payload.readingPlan,

            })

        }
    }
})

export default readingPlanSlice.reducer;
export const { addReadingPlan } = readingPlanSlice.actions;