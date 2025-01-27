import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current : null,
  destination: null,
  vehicleType: null,
  vehicleSpeed: null,
  driverNote: "",
  destinationPersonName: "",
  destinationPersonPhone: "",
  cost : 0
};

const deliveryLocation = createSlice({
    name: "deliveryLocation",
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setVehicleType: (state, action) => {
            state.vehicleType = action.payload;
        },
        setVehicleSpeed: (state, action) => {
            state.vehicleSpeed = action.payload;
        },
        setDriverNote: (state, action) => {
            state.driverNote = action.payload;
        },
        setDestinationPersonName: (state, action) => {
            state.destinationPersonName = action.payload;
        },
        setDestinationPersonPhone: (state, action) => {
            state.destinationPersonPhone = action.payload;
        },
        setCost: (state, action) => {
            state.cost = action.payload;
        }
    },
});

export const { setCurrent, setDestination,setVehicleSpeed,setVehicleType ,setDriverNote ,setDestinationPersonPhone,setDestinationPersonName,setCost} = deliveryLocation.actions;
export default deliveryLocation.reducer;
