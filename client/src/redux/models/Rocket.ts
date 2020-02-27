

export interface RocketResponse {
    status?: "Success" | "error";
    active?:  boolean;
    stages?: number;
    cost_per_launch?: number;
    success_rate_pct?: number;
    first_flight?: string; 
    first_stage_engines?: number;
    first_stage_fuel_amount_tons?: number;
    first_stage_burn_time_sec?: number;
    first_stage_thrust_sea_lvl_kN?: number;
    first_stage_thrust_sea_lvl_ibF?: number;
    first_stage_thrust_vaccum_kN?: number;
    first_stage_thrust_vaccum_ibF?: number;
    second_stage_engines?: number;
    second_stage_fuel_amount_tons?: number;
    second_stage_burn_time_sec?: number;
    second_stage_thrust_kN?: number;
    second_stage_thrust_ibF?: number;
    landing_legs_number?: number
    landing_legs_material?: string | null
   
    
    
    

}


