import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "@/utils/constants";
import {
  TFescoLocationsResponse,
  TFescoLocations,
  TFescoBidsQueryParams,
  TFescoBidsResponse,
  TFescoBidsDataObject,
  TAtiCitySearchResponse,
  TOrderState
} from "@/utils/types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getAtiCitySearchData: builder.mutation<TAtiCitySearchResponse, { userCity: string; direction: string }>({
      query: (data) => ({
        url: `/api/ati_city_search`,
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "",
        },
      }),
    }),
    createOrder: builder.mutation<unknown, TOrderState>({
      query: (data) => ({
        url: `/api/orders`,
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "",
        },
      }),
    }),
    getAtiDistanceData: builder.query<number, { from: number, to: number}>({
      query: (data) => ({
        url: `/api/ati_distance_calculator?from=${data.from}&to=${data.to}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "",
        },
      }),
      transformResponse: (response: { distance: number }): number => response.distance,
    }),
    getFescoLoactionsData: builder.query<Array<TFescoLocations>, null>({
      query: () => ({
        url: `/api/fescoCities`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "",
        },
      }),
      transformResponse: (
        response: TFescoLocationsResponse
      ): Array<TFescoLocations> => {
        const filteredData = response.parsedCities.data.filter((item) => item.country_name === "Россия");
        return filteredData;        
      },
    }),
    getFescoValidToLoactionsData: builder.query<Array<TFescoLocations>, { from: number | '' }>({
      query: (data) => ({
        url: `/api/fescoCities/locTo?from=${data.from}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "",
        },
      }),
      transformResponse: (
        response: TFescoLocationsResponse
      ): Array<TFescoLocations> => {
        const filteredData = response.parsedCities.data.filter((item) => item.country_name === "Россия");
        return filteredData;        
      },
    }),
    getFescoBidsData: builder.query<TFescoBidsDataObject, TFescoBidsQueryParams>({
      query: (data) => ({
        url: `/api/fescoBids?from=${data.from}&to=${data.to}&wte=${data.wte}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "",
        },
        
      }),
      transformResponse: (response: TFescoBidsResponse): TFescoBidsDataObject => response.data[0],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAtiCitySearchDataMutation,
  useGetAtiDistanceDataQuery,
  useGetFescoLoactionsDataQuery,
  useGetFescoBidsDataQuery,
  useGetFescoValidToLoactionsDataQuery,
  useCreateOrderMutation
} = api;
