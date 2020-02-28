

export interface RocketResponse {
    status?: "Success" | "error";
    active?:  boolean;
    stages?: number;
    cost_per_launch?: number;
    success_rate_pct?: number;
    first_flight?: string; 
    first_stage?:{
        reusable?: boolean;
        engines?: number;
        fuel_amount_tons?: number;
        burn_time_sec?: number;
        thrust_sea_level?: {
            kN?: number;
            lbf?: number;
            }
        thrust_vacuum?: {
            kN?: number;
            lbf?: number;
            }
        } 
        second_stage?: {
            fuel_amount_tons?: number;
            burn_time_sec?: number;
            thrust?:{
                kN?: number;
                lbf?: number;
            }
        }
        landing_legs?: {
        number?: number
        material?: string
        },
        description?: string;
        rocket_name?: string;
        engines?: {
            number?: number;
            type?: string;
            layout?: string;
            propellant_1?: string;
            propellant_2?: string;
            thrust_sea_level?: {
                kN?: number;
                lbf?: number;
                }
            thrust_vacuum?: {
                kN?: number;
                lbf?: number;
                }

        }
}