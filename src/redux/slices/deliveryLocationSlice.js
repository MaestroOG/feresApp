import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current : null,
  destination: null,
  vehicleType: null,
  vehicleSpeed: null,
  driverNote: "",
  destinationPersonName: "",
  destinationPersonPhone: "",
  cost : 0,
  totalDistance:0,
  size:null,
  weigth: 0,
  category: null
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
        },
        setTotalDistanceKm: (state, action) => {
            state.totalDistance = action.payload;
        },
        setSize: (state, action) => {
            state.size = action.payload;
        },
        setWeigth: (state, action) => {
            state.weigth = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        }
    },
});

export const { setCurrent,setCategory,setWeigth,setSize, setDestination,setVehicleSpeed,setTotalDistanceKm,setVehicleType ,setDriverNote ,setDestinationPersonPhone,setDestinationPersonName,setCost} = deliveryLocation.actions;
export default deliveryLocation.reducer;
